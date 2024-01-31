function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < rows; j++) {
      arr[i][j] = 0;
    }
  }

  return arr;
}

let grid;
let sand = 5;
let cols, rows;
const baseHue = 1;
let hueValue = baseHue;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 255, 255);
  cols = floor(width / sand);
  rows = floor(height / sand);
  grid = make2DArray(cols, rows);
}

function mouseMoved() {
  let col = floor(mouseX / sand);
  let row = floor(mouseY / sand);
  grid[col][row] = hueValue;
  hueValue += 0.2;
  if (hueValue > 360) {
    hueValue = baseHue;
  }
}

function draw() {
  background(0);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // stroke(255);
      noStroke();
      if (grid[i][j] > 0) {
        fill(grid[i][j], 255, 255);
        let x = i * sand;
        let y = j * sand;
        square(x, y, sand);
      }
    }
  }

  let nextGrid = make2DArray(cols, rows);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      if (state > 0) {
        let below = grid[i][j + 1];
        let dir = random([-1, 1]);
        let belowa, belowb;
        if (i + dir > 0 && i + dir < cols - 1) {
          belowa = grid[i + dir][j + 1];
        }
        if (i - dir > 0 && i - dir < cols - 1) {
          belowb = grid[i - dir][j + 1];
        }
        if (below === 0) {
          nextGrid[i][j + 1] = grid[i][j];
        } else if (belowa === 0) {
          nextGrid[i + dir][j + 1] = grid[i][j];
        } else if (belowb === 0) {
          nextGrid[i - dir][j + 1] = grid[i][j];
        } else {
          nextGrid[i][j] = grid[i][j];
        }
      }
    }
  }
  grid = nextGrid;
}
