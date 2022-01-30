let audio = document.querySelector("audio");
document.getElementById("btnplayMusic").addEventListener("click", () => {
  if (audio.paused) {
    document.getElementById("btnplayMusic").innerHTML =
      '<i class="far fa-pause-circle"></i>';
    audio.play();
  } else {
    document.getElementById("btnplayMusic").innerHTML =
      '<i class="far fa-play-circle"></i>';
    audio.pause();
  }
});

const generateGroup = (num, path) => {
  let arrayOfElement = [];
  for (let i = 0; i < num; i++) {
    arrayOfElement[i] = document.createElement("img");
    arrayOfElement[i].setAttribute(
      "src",
      `../images/page2Images/${path}/${i + 1}.png`
    );
    arrayOfElement[i].classList.add("img");
  }
  return arrayOfElement;
};

// fill groups
const createGroup = (groupName) => {
  let parentdev = document.createElement("div");
  let group = generateGroup(4, groupName);
  let button = document.createElement("button");
  button.innerHTML = "Select";
  button.setAttribute("id", groupName);
  button.setAttribute("class", "myButton");
  let div = document.createElement("div");
  div.setAttribute("class", "group");
  div.classList.add(groupName);
  group.forEach((img) => div.appendChild(img));
  parentdev.appendChild(div);
  parentdev.appendChild(button);
  return parentdev;
};

const addGroupsToContainer = (numOfGroups) => {
  for (let i = 0; i < numOfGroups; i++) {
    document
      .getElementsByClassName("container")[0]
      .appendChild(createGroup(`group${i + 1}`));
  }
};

addGroupsToContainer(4);

// some body style

// (function () {
//   setInterval(() => {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);
//     document.body.style.backgroundColor =
//       "rgb(" + red + "," + green + "," + blue + ")";
//   }, 1000);
// })();
