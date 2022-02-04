const tableSoudku = document.getElementById("Grid");
const ulImages = document.getElementsByClassName("imagesSection")[0];

const gridGenerator = (size) => {
  for (let i = 0; i < size; i++) {
    let gridTr = document.createElement("tr");
    // add refrences
    gridTr.classList.add("row" + (i + 1));
    for (let j = 0; j < size; j++) {
      let gridTd = document.createElement("td");
      gridTd.classList.add("row" + (i + 1) + "-" + "cell" + (j + 1));
      gridTr.appendChild(gridTd);
    }
    tableSoudku.appendChild(gridTr);
  }
};

const imagesGenerator = (size) => {
  for (let i = 0; i < size; i++) {
    let imageLi = document.createElement("li");
    let imageDiv = document.createElement("div");
    let imageP = document.createElement("p");
    imageP.innerText = i + 1;
    imageDiv.appendChild(imageP);
    let imageImg = document.createElement("img");
    imageImg.classList.add("image" + (i + 1));
    imageImg.setAttribute(
      "src",
      `../images/page2Images/group4/${i + 1}.png`,
      +"alt",
      "Not Found"
    );
    imageLi.appendChild(imageImg);
    imageLi.appendChild(imageDiv);
    ulImages.appendChild(imageLi);
  }
};

gridGenerator(4);
imagesGenerator(4);

let time = 60;
function onTimer() {
  document.getElementById("timer").innerHTML = time;
  time--;
  if (time < 0) {
    alert("Time finished!");
  } else {
    setTimeout(onTimer, 1000);
  }
}

// function byClass(syntax) {
//   return document.getElementsByClassName(syntax);
// }

let disableSelect = false;
var iselectNum = null;
var gselectNum = null;
// Images columan selection
for (
  let i = 0;
  i < document.getElementsByClassName("imagesSection")[0].children.length;
  i++
) {
  document
    .getElementsByClassName("imagesSection")[0]
    .children[i].addEventListener("click", function () {
      if (!disableSelect) {
        if (this.classList.contains("iselected")) {
          this.classList.remove("iselected");
          iselectNum = null;
        } else {
          for (
            let i = 0;
            i <
            document.getElementsByClassName("imagesSection")[0].children.length;
            i++
          ) {
            document
              .getElementsByClassName("imagesSection")[0]
              .children[i].classList.remove("iselected");
          }
          this.classList.add("iselected");
          iselectNum = 1;
        }
      }
    });
}

// Grid selection
for (let i = 0; i < document.getElementById("Grid").children.length; i++) {
  for (let j = 0; j < document.getElementById("Grid").children.length; j++) {
    document
      .getElementById("Grid")
      .children[i].children[j].addEventListener("click", function () {
        if (!disableSelect) {
          if (this.classList.contains("gselected")) {
            this.classList.remove("gselected");
            gselectNum = null;
          } else {
            for (
              let i = 0;
              i < document.getElementById("Grid").children.length;
              i++
            ) {
              document
                .getElementById("Grid")
                .children[i].children[j].classList.remove("selected");
            }
            if (gselectNum == null) {
              this.classList.add("gselected");
              gselectNum = 1;
            }
          }
        }
      });
  }
}
