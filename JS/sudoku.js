const BLANK_BOARD = [
  [0, "-", 5, "-", "-", "-", "-", "-", 5],
  [5, "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", 9, "-", "-", "-", "-", "-"],
  [5, 3, "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", 2, "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", 4, "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", 1, "-", "-"],
  ["-", "-", "-", 7, "-", "-", "-", "-", "-"],
  [6, "-", "-", "-", "-", "-", "-", "-", "-"],
];

let td = document.querySelectorAll("td");

let shuffleBoard = (arr) => {
  let curr_index = arr.length;

  while (curr_index !== 0) {
    let rand_index = Math.floor(Math.random() * curr_index);
    curr_index -= 1;

    let temp = arr[curr_index][curr_index];
    arr[curr_index][curr_index] = arr[rand_index][rand_index];
    arr[rand_index][rand_index] = temp;
  }

  return arr;
};
function createBoard(board) {
  const shuffledBoard = shuffleBoard(board);
  shuffledBoard.forEach((e) => console.log(e));
}

createBoard(BLANK_BOARD);
const isColSafe = (grid, col, value) => {
  for (let row = 0; row < CONSTANT.GRID_SIZE; row++) {
    if (grid[row][col] === value) return false;
  }
  return true;
};

// check duplicate number in row
const isRowSafe = (grid, row, value) => {
  for (let col = 0; col < CONSTANT.GRID_SIZE; col++) {
    if (grid[row][col] === value) return false;
  }
  return true;
};

// check duplicate number in 3x3 box
const isBoxSafe = (grid, box_row, box_col, value) => {
  for (let row = 0; row < CONSTANT.BOX_SIZE; row++) {
    for (let col = 0; col < CONSTANT.BOX_SIZE; col++) {
      if (grid[row + box_row][col + box_col] === value) return false;
    }
  }
  return true;
};

// check in row, col and 3x3 box
const isSafe = (grid, row, col, value) => {
  return (
    isColSafe(grid, col, value) &&
    isRowSafe(grid, row, value) &&
    isBoxSafe(grid, row - (row % 2), col - (col % 2), value) &&
    value !== CONSTANT.UNASSIGNED
  );
};
