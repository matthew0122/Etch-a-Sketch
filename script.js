let rows = 16;
const amtChanger = document.getElementById("amount");
amtChanger.addEventListener("click", givePrompt);
for(let i = 0; i < rows; i++){
    const flex = document.createElement('div');
    flex.classList.add('flexy');
    for(let j = 0; j < rows; j++){
        const square = document.createElement('div');
        square.classList.add("square");
        square.addEventListener("mouseover", color);
        flex.append(square);
    }
    document.body.append(flex);
}

function color(e){
    this.classList.add("hovered");
}
function givePrompt(e){
    let rows = prompt("How many squares would you like per row and column?");
    removeDivs();
} //ADD INPUT VALIDATION
function removeDivs() {
    const row = document.getElementsByClassName("flexy");
    const row2 = Array.from(row);
    row2.forEach(element => {
        document.body.removeChild(element);
    });
    console.log("hi");
}
