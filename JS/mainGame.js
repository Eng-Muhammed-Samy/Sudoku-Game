const table = getById("table");
const ul_images = getByClass("images")[0];
getById("player_game").innerHTML = USER_NAME;

// Shortuct for element by class
function getByClass(e) {
  return document.getElementsByClassName(e);
}

// Shortuct for element by id
function getById(e) {
  return document.getElementById(e);
}

window.onload = function () {
  if (sessionStorage.getItem("login") == null) {
    //show validation message
    window.location.href = "../index.html";
  }
};

const GenerateMainGid = (size) => {
  for (let i = 0; i < size; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < size; j++) {
      let td = document.createElement("td");
      if (i === 0 && j == 0) {
        td.classList.add("active");
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
};
// add aside images
const GenerateImages = (size, groupnum) => {
  for (let i = 0; i < size; i++) {
    let li = document.createElement("li");
    let transparent_dev = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = i + 1;
    transparent_dev.appendChild(p);
    let img = document.createElement("img");
    img.setAttribute(
      "src",
      `../images/images_groups/group${groupnum}/${i + 1}.png`
    );
    li.appendChild(img);
    li.appendChild(transparent_dev);
    ul_images.appendChild(li);
  }
};

function myFunction_set(num) {
  if (num === 2) {
    table.className = "puzzle-grid2";
  }
}
myFunction_set(GRID_SIZE / 2);
GenerateMainGid(GRID_SIZE);
GenerateImages(GRID_SIZE, GROUP);

