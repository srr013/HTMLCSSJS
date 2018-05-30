let numRows = 8;
let numCols = 8;
let i = 0;
let j=0;
let div = document.getElementById("container");
let colorpicker = document.querySelector("#colorpicker");
colorpicker.addEventListener("change", changeColor, false);
let colorvalue = 'rgb(0,0,0)'

function createSquares(){
    while (i<numRows){
        while (j<numCols){
            let square = document.createElement('div');
            square.setAttribute('class','square');
            square.rgb = colorvalue;
            square.a = 0;
            div.appendChild(square);
            j++
        }
        j=0;
        i++;
    }
}

function changeColor(event){
    console.log(event);
    colorvalue = event.target.value;
    colorvalue = hexToRgbA(colorvalue);
}

function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgb('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+')';
    }
    throw new Error('Bad Hex');
}

createSquares();
let squares = document.querySelectorAll('.square')
squares.forEach(square => {
    square.addEventListener('mouseover',updateColor);
});
                            
function updateColor(square){
    console.log(this, this.rgb,this.a);
        if (this.a < 1){
            this.a += .2;
        }
        this.style.backgroundColor = colorvalue;
        this.style.opacity = this.a;
    };

function resetSquares(){
    squares.forEach(square => {
        square.style.backgroundColor = 'rgba(0,0,0,0)'
        square.a = 0;
        square.rgb = colorvalue;
    })
}