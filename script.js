let rows = 16;

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