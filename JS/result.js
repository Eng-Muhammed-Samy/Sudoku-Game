let img_name = location.search.split("&")[3].split("=")[1];
let img_tag=document.getElementsByTagName("img")[0];
let query=location.search.split("&img")[0];
img_tag.src=`../images/${img_name}.jpg`;
function exitFunction(){
    location.href="../index.html";
}
function replayFunction(){
    window.location.href = "../HTML/mainGame.html"+query;
}


