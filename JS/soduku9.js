const table = document.getElementById("puzzle-grid");
const ul_images = document.getElementsByClassName("images")[0];
const GenerateMainGid = (size) => {
    for (let i = 0; i < size; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < size; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

const Generatelis = (size) => {
    for (let i = 0; i < size; i++) {
        let li = document.createElement('li');
        let transparent_dev=document.createElement('div');
        let p=document.createElement('p');
        p.innerText=(i+1);
        transparent_dev.appendChild(p);
        let img = document.createElement("img");
        img.setAttribute(
            "src",
            `../images/soduku9/${i + 1}.png`
        );
        li.appendChild(img);
        li.appendChild(transparent_dev);
        ul_images.appendChild(li);
    }

}
GenerateMainGid(9);
Generatelis(9);