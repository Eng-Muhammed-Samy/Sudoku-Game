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
      "alt",
      "Not Found"
    );
    imageLi.appendChild(imageImg);
    imageLi.appendChild(imageDiv);
    ulImages.appendChild(imageLi);
  }
};

gridGenerator(4);
imagesGenerator(4);
