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
      `../images/page2images/group${groupnum}/${i + 1}.png`
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

// var disableSelect = false;
// var iselectNum = null;
// var gselectNum = null;

// document.addEventListener("keydown", function (e) {
//   key = parseInt(e.key);
//   active = $("td.active").removeClass("active");
//   var x = active.index();
//   var y = active.closest("tr").index();
//   if (e.keyCode == 37) {
//     x--;
//   }
//   if (e.keyCode == 38) {
//     y--;
//   }
//   if (e.keyCode == 39) {
//     x++;
//   }
//   if (e.keyCode == 40) {
//     y++;
//   }
//   disableSelect = true;
//   active = $("tr").eq(y).find("td").eq(x).addClass("active");

//   if (key >= 1 && key <= GRID_SIZE) {
//     getByClass("active")[0].setAttribute("value", key);
//     getByClass(
//       "active"
//     )[0].innerHTML = `<img src="../images/page2images/group${GROUP}/${key}.png"/>`;
//     disableSelect = false;
//   }
// });

// let time = 60;
// function onTimer() {
//   getById("timer").innerHTML = time;
//   time--;
//   if (time < 0) {
//     alert("Time finished!");
//   } else {
//     setTimeout(onTimer, 1000);
//   }
// }

// // Images columan active selection
// const imageSelect = () => {
//   for (let i = 0; i < getByClass("images")[0].children.length; i++) {
//     getByClass("images")[0].children[i].addEventListener("click", function () {
//       if (!disableSelect) {
//         if (this.classList.contains("active")) {
//           this.classList.remove("active");
//           iselectNum = null;
//         } else {
//           for (let i = 0; i < getByClass("images")[0].children.length; i++) {
//             getByClass("images")[0].children[i].classList.remove("active");
//           }
//           this.classList.add("active");
//           iselectNum = 1;
//         }
//       }
//     });
//   }
// };

// // Grid selection
// const gridSelect = () => {
//   for (let i = 0; i < getByClass("puzzle-grid")[0].children.length; i++) {
//     for (let j = 0; j < getByClass("puzzle-grid")[0].children.length; j++) {
//       getByClass("puzzle-grid")[0].children[i].children[j].addEventListener(
//         "click",
//         function () {
//           if (!disableSelect) {
//             if (this.classList.contains("active")) {
//               this.classList.remove("active");
//               gselectNum = null;
//             } else {
//               for (
//                 let i = 0;
//                 i < getByClass("puzzle-grid")[0].children.length;
//                 i++
//               ) {
//                 getByClass("puzzle-grid")[0].children[i].children[
//                   j
//                 ].classList.remove("active");
//               }
//               if (gselectNum == null) {
//                 this.classList.add("active");
//                 // if (iselectNum == 1) {
//                 //   this.innerHTML = `<img src="../images/page2images/group${GROUP}/${imgNum}.png"/>`;
//                 // }
//                 gselectNum = 1;
//               }
//             }
//           }
//         }
//       );
//     }
//   }
// };

// imageSelect();
// gridSelect();
