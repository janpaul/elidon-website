type WallDirection = 'top' | 'right' | 'bottom' | 'left'

export class Cell {
  x: number
  y: number
  wall: {
    top: boolean
    right: boolean
    bottom: boolean
    left: boolean
  }
  visited: boolean

  constructor(_x: number, _y: number) {
    this.x = _x
    this.y = _y
    this.visited = false
    this.wall = { top: true, right: true, bottom: true, left: true }
  }

  draw(ctx: CanvasRenderingContext2D, cellWidth: number, cellHeight: number, current: boolean): void {
    const x = this.x * cellWidth
    const y = this.y * cellHeight
    ctx.fillStyle = current ? 'rgba(0, 200, 0, 0.8)' : this.visited ? 'rgba(0, 0, 200, 0.5)' : 'rgba(200, 0, 0, 0.5)'
    ctx.fillRect(x, y, cellWidth, cellHeight)

    ctx.beginPath()
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)'
    ctx.moveTo(x, y)
    this.wall.top ? ctx.lineTo(x + cellWidth, y) : ctx.moveTo(x + cellWidth, y)
    this.wall.right ? ctx.lineTo(x + cellWidth, y + cellHeight) : ctx.moveTo(x + cellWidth, y + cellHeight)
    this.wall.bottom ? ctx.lineTo(x, y + cellHeight) : ctx.moveTo(x, y + cellHeight)
    this.wall.left && ctx.lineTo(x, y)
    ctx.stroke()
  }

  markVisited() {
    this.visited = true
  }

  reset() {
    this.visited = false
    this.wall = { top: true, right: true, bottom: true, left: true }
  }

  removeWall(direction: WallDirection) {
    switch (direction) {
      case 'top':
        this.wall.top = false
        break
      case 'right':
        this.wall.right = false
        break
      case 'bottom':
        this.wall.bottom = false
        break
      case 'left':
        this.wall.left = false
        break
    }
  }
}
