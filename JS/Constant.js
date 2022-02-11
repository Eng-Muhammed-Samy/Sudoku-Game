const query=location.search;
const GRID_SIZE = Number(location.search.split("&")[1].split("=")[1]);
const GROUP = Number(location.search.split("&")[2].split("=")[1]);
const UN_ASSIGHNED = 0;
const NUMBERS = GRID_SIZE == 4 ? [1, 2, 3, 4] : [1, 2, 3, 4, 5, 6, 7, 8, 9];

const USER_NAME = location.search
  .split("&")[0]
  .split("=")[1]
  .split("+")
  .join(" ");

const BOX_SIZE = Math.sqrt(GRID_SIZE);
