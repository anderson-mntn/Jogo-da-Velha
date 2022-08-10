document.addEventListener('DOMContentLoaded', () => {

    var squares = document.querySelectorAll(".square");
    

   

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
        // square.addEventListener('mouseover', hoverMouse)

    })
    
    
})

// function hoverMouse(event){
//     let quadrado = event.target;
//     let posicao = quadrado.id;
//     console.log(quadrado);
//      if(playerTime == 0){
//          quadrado.innerHTML = `<div class='opacx'></div>`
//      }
// }



function handleClick(event) {
    
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            playerTime == 0 ? alert('Escudo venceu!') : alert('Espada venceu!')
        }, 10);
    } 

    
    checkDraw();
    updateSquare(position);

}

function checkDraw(){

    let c = [...board].includes('')
    if(gameOver == false && c == false ){
        alert('Empatou')
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
    
