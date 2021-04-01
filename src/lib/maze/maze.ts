import { Cell } from './cell'

const INTERVAL = 5
const MAZE_ROWS = 50
const MAZE_COLUMNS = 50

let loop: NodeJS.Timeout
const maze: Cell[] = []
const stack: Cell[] = []
let current: Cell
let done = false

const draw = (canvas: HTMLCanvasElement) => {
  const { width, height } = canvas
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d')
  const cellHeight = height / MAZE_ROWS
  const cellWidth = width / MAZE_COLUMNS
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, width, height)
  maze.forEach(cell => {
    cell.draw(ctx, cellWidth, cellHeight, current.x === cell.x && current.y === cell.y)
  })
}

const getCell = (x, y) => maze[y * MAZE_COLUMNS + x]

const update = () => {
  current.markVisited()
  const visitedCells = maze.filter(cell => cell.visited).length

  const neighbors = [
    current.y > 0 ? getCell(current.x, current.y - 1) : undefined,
    current.x < MAZE_COLUMNS - 1 ? getCell(current.x + 1, current.y) : undefined,
    current.y < MAZE_ROWS - 1 ? getCell(current.x, current.y + 1) : undefined,
    current.x > 0 ? getCell(current.x - 1, current.y) : undefined,
  ].filter(cell => !!cell)
  const unvisitedNeighbors = neighbors.filter(cell => !cell.visited)
  // console.log({ x: current.x, y: current.y, visitedCells, current, neighbors, unvisitedNeighbors })
  if (unvisitedNeighbors.length > 0) {
    // const next = unvisitedNeighbors[0]
    stack.push(current)
    const next = unvisitedNeighbors[Math.floor(Math.random() * unvisitedNeighbors.length)]
    if (next.y < current.y) {
      current.removeWall('top')
      next.removeWall('bottom')
    } else if (next.y > current.y) {
      current.removeWall('bottom')
      next.removeWall('top')
    } else if (next.x < current.x) {
      current.removeWall('left')
      next.removeWall('right')
    } else if (next.x > current.x) {
      current.removeWall('right')
      next.removeWall('left')
    }
    current = next
  } else {
    current = stack.pop()
  }
  done = visitedCells === MAZE_COLUMNS * MAZE_ROWS
}

export const setup = (canvas: HTMLCanvasElement) => {
  for (let y = 0; y < MAZE_ROWS; y++) {
    for (let x = 0; x < MAZE_COLUMNS; x++) {
      maze.push(new Cell(x, y))
    }
  }
  current = getCell(0, 0)
  draw(canvas)
  loop = setInterval(() => {
    if (done) {
      console.log('ALL DONE')
      clearInterval(loop)
    } else {
      update()
      draw(canvas)
    }
  }, INTERVAL)
}

export function shutdown() {
  if (!!loop) clearInterval(loop)
}