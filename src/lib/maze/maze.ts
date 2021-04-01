import { Cell } from './cell'

const MAZE_ROWS = 50
const MAZE_COLUMNS = 50
const ENDLESS_MODE = true

const maze: Cell[] = []
const stack: Cell[] = []
let currentCell: Cell
let done = false

const draw = (canvas: HTMLCanvasElement) => {
  const { width, height } = canvas
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d')
  const cellHeight = height / MAZE_ROWS
  const cellWidth = width / MAZE_COLUMNS
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, width, height)
  maze.forEach(cell => {
    cell.draw(ctx, cellWidth, cellHeight, !done && currentCell.x === cell.x && currentCell.y === cell.y)
  })
}

const getCell = (x, y) => maze[y * MAZE_COLUMNS + x]

const update = () => {
  currentCell.markVisited()
  const visitedCells = maze.filter(cell => cell.visited).length

  const neighbors = [
    currentCell.y > 0 ? getCell(currentCell.x, currentCell.y - 1) : undefined,
    currentCell.x < MAZE_COLUMNS - 1 ? getCell(currentCell.x + 1, currentCell.y) : undefined,
    currentCell.y < MAZE_ROWS - 1 ? getCell(currentCell.x, currentCell.y + 1) : undefined,
    currentCell.x > 0 ? getCell(currentCell.x - 1, currentCell.y) : undefined,
  ].filter(cell => !!cell)
  const unvisitedNeighbors = neighbors.filter(cell => !cell.visited)
  // console.log({ x: current.x, y: current.y, visitedCells, current, neighbors, unvisitedNeighbors })
  if (unvisitedNeighbors.length > 0) {
    // const next = unvisitedNeighbors[0]
    stack.push(currentCell)
    const next = unvisitedNeighbors[Math.floor(Math.random() * unvisitedNeighbors.length)]
    if (next.y < currentCell.y) {
      currentCell.removeWall('top')
      next.removeWall('bottom')
    } else if (next.y > currentCell.y) {
      currentCell.removeWall('bottom')
      next.removeWall('top')
    } else if (next.x < currentCell.x) {
      currentCell.removeWall('left')
      next.removeWall('right')
    } else if (next.x > currentCell.x) {
      currentCell.removeWall('right')
      next.removeWall('left')
    }
    currentCell = next
  } else {
    currentCell = stack.pop()
  }
  done = visitedCells === MAZE_COLUMNS * MAZE_ROWS
}

export const setup = (canvas: HTMLCanvasElement) => {
  for (let y = 0; y < MAZE_ROWS; y++) {
    for (let x = 0; x < MAZE_COLUMNS; x++) {
      maze.push(new Cell(x, y))
    }
  }
  currentCell = getCell(0, 0)

  const step = () => {
    if (done) {
      if (ENDLESS_MODE) {
        maze.forEach(cell => cell.reset())
        done = false
      }
    } else {
      draw(canvas)
      update()
    }
    window.requestAnimationFrame(step)
  }
  window.requestAnimationFrame(step)
}

export function shutdown() {}
