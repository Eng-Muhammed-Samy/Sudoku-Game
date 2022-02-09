let cells = document.querySelectorAll("td");
let x2 = document.querySelector("#game-difficulty");
let selected_cell;
let su = undefined;
let su_answer = undefined;
let start_btn = document.getElementsByClassName("btn-start")[0];
let active=0;
let key;
let active_cell;
const clearSudoku = () => {
  for (let i = 0; i < Math.pow(GRID_SIZE, 2); i++) {
    cells[i].innerHTML = "";
    cells[i].classList.remove("filled");
  }
};

const initSudoku = () => {
  let Celes =
    x2.value == "Easy"
      ? GRID_SIZE * 3
      : x2.value == "Medium"
      ? GRID_SIZE * 2
      : GRID_SIZE;

  let FREE_CELLS = Math.pow(GRID_SIZE, 2) - Celes;
  // clear old sudoku
  clearSudoku();
  // generate sudoku puzzle here
  su = sudokuGen(FREE_CELLS);
  su_answer = [...su.question];
  // show sudoku to div
  for (let i = 0; i < Math.pow(GRID_SIZE, 2); i++) {
    let row = Math.floor(i / GRID_SIZE);
    let col = i % GRID_SIZE;

    cells[i].setAttribute("data-value", su.question[row][col]);

    if (su.question[row][col] !== 0) {
      cells[i].classList.add("filled");
      let num = su.question[row][col];
      cells[
        i
      ].innerHTML = `<img src="../images/page2images/group${GROUP}/${num}.png"/>`;
    }
  }
};

const checkErr = (value) => {
  const addErr = (cell) => {
    if (parseInt(cell.getAttribute("data-value")) === value) {
      cell.classList.add("err");
      cell.classList.add("cell-err");
      setTimeout(() => {
        cell.classList.remove("cell-err");
      }, 500);
    }
  };

  let index = selected_cell;

  let row = Math.floor(index / GRID_SIZE);
  let col = index % GRID_SIZE;

  let box_start_row = row - (row % BOX_SIZE);
  let box_start_col = col - (col % BOX_SIZE);

  for (let i = 0; i < BOX_SIZE; i++) {
    for (let j = 0; j < BOX_SIZE; j++) {
      let cell = cells[GRID_SIZE * (box_start_row + i) + (box_start_col + j)];
      if (!cell.classList.contains("active")) addErr(cell);
    }
  }
  let step = GRID_SIZE;
  while (index - step >= 0) {
    addErr(cells[index - step]);
    step += GRID_SIZE;
  }

  step = GRID_SIZE;
  while (index + step < Math.pow(GRID_SIZE,2)) {
    addErr(cells[index + step]);
    step += GRID_SIZE;
  }

  step = 1;
  while (index - step >= GRID_SIZE * row) {
    addErr(cells[index - step]);
    step += 1;
  }

  step = 1;
  while (index + step < GRID_SIZE * row + GRID_SIZE) {
    addErr(cells[index + step]);
    step += 1;
  }
};
const removeErr = () =>
 cells.forEach((e) => e.classList.remove("err"));
const isGameWin = () => sudokuCheck(su_answer);
start_btn.onclick = function () {
  start_btn.disabled = true;
  initSudoku();
  timerStart();
  x2.disabled = true;
  document.addEventListener("keydown", function (e) {
    key = parseInt(e.key);
    active = $("td.active").removeClass("active");

    let x = active.index();
    let y = active.closest("tr").index();
    if (e.keyCode == 37) {
      
      x--;
    }
    if (e.keyCode == 38) {
      y--;
    }
    if (e.keyCode == 39) {
      x++;
    }
    if (e.keyCode == 40) {
      y++;
    }
    
    active = $("tr").eq(y).find("td").eq(x).addClass("active");
    active_cell = getByClass("active")[0];
    selected_cell = Array.from(
      active_cell.parentElement.parentElement.getElementsByTagName("td")
    ).indexOf(active_cell);

    if (key >= 1 && key <= GRID_SIZE) {
      if (!active_cell.classList.contains("filled")) {
        active_cell.innerHTML = `<img src="../images/page2images/group${GROUP}/${key}.png"/>`;
        active_cell.setAttribute("data-value", key);
        // add to answer
        let row = Math.floor(selected_cell / GRID_SIZE);
        let col = selected_cell % GRID_SIZE;
        su_answer[row][col] = key;
        // -----
        removeErr();
        checkErr(key);
        cells[selected_cell].classList.add("zoom-in");
        setTimeout(() => {
          cells[selected_cell].classList.remove("zoom-in");
        }, 500);

        // check game win
        if (isGameWin()) {
          console.log("win");
        }
      }
    }
  });
};

const timerStart = () => {
  const minutes = document.getElementById("minute");
  const seconds = document.getElementById("second");
  let second = 59;
  let time =
    GRID_SIZE === 4
      ? x2.value == "Easy"
        ? 1
        : x2.value == "Medium"
        ? 2
        : 3
      : x2.value == "Easy"
      ? 3
      : x2.value == "Medium"
      ? 5
      : 10;
  minutes.innerHTML = --time;
  seconds.innerHTML = second;
  setInterval(() => {
    if (time >= 0) {
      second--;
      seconds.innerHTML = second;
      minutes.innerHTML = time;
      if (second === 0) {
        if (time === 0) {
          seconds.innerHTML = "00";
          minutes.innerHTML = "00";
          start_btn.disabled = false;
          x2.disabled = false;
        }
        time--;
        second = 59;
      }
    } else {
      //game over
    }
  }, 1000);
};
