var r = document.querySelector(':root');
var hr=location.href;
let arr;
var active;
let key;
const table = document.getElementById("table");
const ul_images = document.getElementsByClassName("images")[0];
const user_name=document.getElementById("player_game");

window.onload=function(){
    if (sessionStorage.getItem('login') == null)       
    {
        //show validation message
        window.location.href = "../index.html"
    }
  }

function split_data(hr)
{
    arr =hr.slice(hr.indexOf('?')+1).split("&");
    for(var i=0;i<arr.length;i++)
    {
        if(i==0)
        {
            arr[i] =arr[i].split("=")[1].split("+").join(" ") ;
        }
        else
        {
            arr[i] =arr[i].split("=")[1] ;
        }
    };
}
split_data(hr);

const USER_NAME=arr[0];
const LEVEL=parseInt(arr[1]); // 4 9
const GROUP=parseInt(arr[2]);//1  2 3 4
user_name.innerHTML=USER_NAME;
const GenerateMainGid = (size) => {
    for (let i = 0; i < size; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < size; j++) {
            let td = document.createElement('td');
            if(i===0&&j==0)
            {
                td.classList.add("active");
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

const Generatelis = (size,groupnum) => {
    for (let i = 0; i < size; i++) {
        let li = document.createElement('li');
        let transparent_dev=document.createElement('div');
        let p=document.createElement('p');
        p.innerText=(i+1);
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
}
function myFunction_set(num) {
    if(num===2)
    {
        table.className="puzzle-grid2";
    }
  }
myFunction_set(LEVEL/2); 
GenerateMainGid(LEVEL);
Generatelis(LEVEL,GROUP);


$(document).keydown(function (e) {
    key=parseInt(e.key);
    active = $('td.active').removeClass('active');
    var x = active.index();
    var y = active.closest('tr').index();
    if (e.keyCode == 37) {
        x--;
    }
    if (e.keyCode == 38) {
        y--;
    }
    if (e.keyCode == 39) {
        x++
    }
    if (e.keyCode == 40) {
        y++
    }
    active = $('tr').eq(y).find('td').eq(x).addClass('active');
   
    if(key>=1&&key<=LEVEL)
    {
        document.getElementsByClassName("active")[0].setAttribute("value",key);
        document.getElementsByClassName("active")[0].innerHTML=`<img src="../images/page2images/group${GROUP}/${key}.png"/>`;  
    }
});

