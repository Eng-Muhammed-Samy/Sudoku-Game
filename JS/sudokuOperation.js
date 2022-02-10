// this is a function to greate the grid deoent on level if leve 1=> arr 4*4 else arr 9*9 and initiate its val with zero
const newGrid = (size) => {
  let arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = new Array(size);
  }
  for (let i = 0; i < Math.pow(size, 2); i++) {
    arr[Math.floor(i / size)][i % size] = UN_ASSIGHNED;
  }
  return arr;
};

// check duplicate number in col
const isColSafe = (grid, col, value) => {
  for (let row = 0; row < GRID_SIZE; row++) {
    if (grid[row][col] === value) return false;
  }
  return true;
};

// check duplicate number in row
const isRowSafe = (grid, row, value) => {
  for (let col = 0; col < GRID_SIZE; col++) {
    if (grid[row][col] === value) return false;
  }
  return true;
};

// check duplicate number in 3x3 box
const isBoxSafe = (grid, box_row, box_col, value) => {
  for (let row = 0; row < BOX_SIZE; row++) {
    for (let col = 0; col < BOX_SIZE; col++) {
      if (grid[row + box_row][col + box_col] === value) return false;
    }
  }
  return true;

};

// check in row, col and  box
const isSafe = (grid, row, col, value) => {
  return (
    isColSafe(grid, col, value) &&
    isRowSafe(grid, row, value) &&
    isBoxSafe(grid, row - (row % BOX_SIZE), col - (col % BOX_SIZE), value) &&
    value !== UN_ASSIGHNED
  );
};

// find unassigned cell
const findUnassignedPos = (grid, pos) => {
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      if (grid[row][col] === UN_ASSIGHNED) {
        pos.row = row;
        pos.col = col;
        return true;
      }
    }
  }
  return false;
};

// shuffle arr
const shuffleArray = (arr) => {
  let curr_index = arr.length;
  while (curr_index !== 0) {
    let rand_index = Math.floor(Math.random() * curr_index);
    curr_index -= 1;

    let temp = arr[curr_index];
    arr[curr_index] = arr[rand_index];
    arr[rand_index] = temp;
  }
  return arr;
};

// check puzzle is complete
const isFullGrid = (grid) => {
  return grid.every((row) => {
    return row.every((value) => {
      return value !== UN_ASSIGHNED;
    });
  });
};

// this function is used to create the grid and initiate it with random images and validate coreect positions of them
const sudokuCreate = (grid) => {
  let unassigned_pos = {
    row: -1,
    col: -1,
  };

  if (!findUnassignedPos(grid, unassigned_pos)) return true;

  let number_list = shuffleArray([...NUMBERS]);
  let row = unassigned_pos.row;
  let col = unassigned_pos.col;

  number_list.forEach((num) => {
    if (isSafe(grid, row, col, num)) {
      grid[row][col] = num;

      if (isFullGrid(grid)) {
        return true;
      } else {
        if (sudokuCreate(grid)) {
          return true;
        }
      }
      grid[row][col] = UN_ASSIGHNED;
    }
  });
  return isFullGrid(grid);
};

// this is the function used to check if user win after full grid
function checkwin(matrix) {
  let count=0;
  for(let num=0;num<NUMBERS.length;num++)
  {
        for(let i=0;i<matrix.length;i++)
        {
            for(let j=0;j<matrix[i].length;j++)
            {
                if(NUMBERS[num]===matrix[i][j])
                {
                    ++count;
                }
            }
        }
        if(count>GRID_SIZE) return false;
        else count=0;
  }
  return true;
}

//this is a function used to select random images when create grid
const rand = () => Math.floor(Math.random() * GRID_SIZE);

// thiis is used to free cells depend on level (easy , medium,hard)
const removeCells = (grid, level) => {
  let res = [...grid];
  let attemps = level;
  while (attemps > 0) {
    let row = rand();
    let col = rand();
    while (res[row][col] === 0) {
      row = rand();
      col = rand();
    }
    res[row][col] = UN_ASSIGHNED;
    attemps--;
  }
  return res;
};

// generate sudoku base on level
const sudokuGen = (level) => {
  let sudoku = newGrid(GRID_SIZE);
  let check = sudokuCreate(sudoku);
  if (check) {
    let question = removeCells(sudoku, level);
    return  question;
  }
  return undefined;
};
