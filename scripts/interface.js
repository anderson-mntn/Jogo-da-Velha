document.addEventListener('DOMContentLoaded', () => {
    
    var squares = document.querySelectorAll(".square");
    
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
        square.addEventListener('mouseover', mouseOver);
        square.addEventListener('mouseout', mouseOut);
    })
    
})

function mouseOver(event){
    event.preventDefault();
    let quadrado = event.target;

    if (quadrado.firstChild == null){
        if(playerTime == 0){
            quadrado.classList.add("o");
            quadrado.style.backgroundColor = "rgb(30, 117, 221)";
            quadrado.style.color = "white";
        } else {
            quadrado.classList.add("x");
            quadrado.style.backgroundColor = "#ff726f";
            quadrado.style.color = "#fff";
        }
    }
}

function mouseOut(event){
    event.preventDefault();
    let quadrado = event.target;


    if (quadrado.firstChild != null){
        return;
    } else{
        if(playerTime == 0){
            quadrado.classList = "square";
      
            quadrado.style.backgroundColor = "white";
            quadrado.style.color = "#2260bd";
        } else {
            quadrado.classList = "square";
            quadrado.classList.remove("x");
            quadrado.style.backgroundColor = "white";
        }
    }
}




function handleClick(event) {
    
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            playerTime == 0 ? alert('Bolinha venceu!') : alert('Cruz venceu!')
        }, 10);
    } 

    
    checkDraw();
    updateSquare(position);

}

function checkDraw(){

    let c = [...board].includes('')
    if(gameOver == false && c == false ){
        setTimeout(() => { alert('Empatou')
    }, 20)
    }
       
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`

    let restartBtn = document.querySelector('.restartBtn')
     restartBtn.addEventListener('click', ()=>{
         square.innerHTML = `<div></div>`
    })
}


 function updateSquares() {
     let squares = document.querySelectorAll(".square");
     squares.forEach((square) => {
         let position = square.id;
         let symbol = board[position];
         if (symbol != '') {
             square.innerHTML = `<div class='${symbol}'></div>`
         }
     })
 }
    
