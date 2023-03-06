let row = 16;
const amtChanger = document.getElementById("amount");
amtChanger.addEventListener("click", givePrompt);
addDivs(16);

function color(e){
    this.classList.add("hovered");
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
    addDivs(rows);
} //ADD INPUT VALIDATION
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