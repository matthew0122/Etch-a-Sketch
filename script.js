
for(let i = 0; i < 16; i++){
    const flex = document.createElement('div');
    flex.classList.add('flexy');
    for(let j = 0; j < 16; j++){
        const square = document.createElement('div');
        square.classList.add("square");
        flex.append(square);
    }
    document.body.append(flex);
}