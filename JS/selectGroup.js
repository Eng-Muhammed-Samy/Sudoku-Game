window.onload=function(){
  if (sessionStorage.getItem('login') == null)       
  {
      //show validation message
      window.location.href = "../index.html"
  }
}
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
      `../images/images_groups/${path}/${i + 1}.png`
    );
    arrayOfElement[i].classList.add("img");
  }
  return arrayOfElement;
};

// fill groups
const createGroup = (groupName,groupnum) => {
  var query=location.search;
  let parentdev = document.createElement("div");
  parentdev.setAttribute("id", "parent");
  let group = generateGroup(4, groupName);
  let button = document.createElement("a");
  button.innerHTML = "Select";
  button.setAttribute("id", groupName);
  button.setAttribute("class", "myButton");
  button.setAttribute("href","mainGame.html"+query+"&"+"group="+groupnum );
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
      .appendChild(createGroup(`group${i + 1}`,`${i+1}`));
  }
};

addGroupsToContainer(4);


