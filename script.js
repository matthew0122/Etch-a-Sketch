let row = 16;
let mode = "black-and-white";
const amtChanger = document.getElementById("amount");
amtChanger.addEventListener("click", givePrompt);

const blackAndWhite = document.getElementById("black-and-white");
blackAndWhite.addEventListener("click", changeMode);
const colored = document.getElementById("colored");
colored.addEventListener("click", changeMode);
const shaded = document.getElementById("shaded");
shaded.addEventListener("click", changeMode);
const clear = document.getElementById("clear");
clear.addEventListener("click", clears);

addDivs(16);

function color(e){
    if(mode == "black-and-white"){
        this.style.backgroundColor = "black";
    }
    else if(mode == "colored"){
        this.style.backgroundColor = randomColor();
        this.style.opacity =1;
    }
    else if (mode == "shaded"){
        this.style.backgroundColor = "black";
        if(this.style.opacity != ""){
            this.style.opacity *= 2;
        }
        else{
            this.style.opacity = 0.1;
        }
    }
}
function randomColor(){
    let ans = "#";
    let options = "0123456789abcdef"
    for (let i = 0; i < 6; i++){
        let num = Math.round(Math.random()*15);
        ans = ans + options[num];
    }
    return ans;
}
function changeMode(e){
   mode = this.id;
}
function givePrompt(e){
    let rows = -1;
    let type = false;
    while (rows < 0 || rows > 100 || !type){
        rows = prompt("How many squares would you like per row and column?");
        type = /^\d+$/.test(rows);
        console.log(type);
    }
    removeDivs();
    row = rows;
    addDivs(rows);
}
function removeDivs() {
    const row = document.getElementsByClassName("flexy");
    const row2 = Array.from(row);
    row2.forEach(element => {
        document.body.removeChild(element);
    });
}
function addDivs(rows){
    const width = 960/rows;
    for(let i = 0; i < rows; i++){
        const flex = document.createElement('div');
        flex.classList.add('flexy');
        for(let j = 0; j < rows; j++){
            const square = document.createElement('div');
            square.classList.add("square");
            square.style.width = width + "px";
            square.style.height = width+"px";
            square.addEventListener("mouseover", color);
            flex.append(square);
        }
        document.body.append(flex);
    }
}
function clears(){
    removeDivs();
    addDivs(row);
}