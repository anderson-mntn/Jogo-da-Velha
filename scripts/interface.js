document.addEventListener('DOMContentLoaded', () => {
    
    const crossVic = document.querySelector("#crossVic").innerHTML = 0;
    const ballVic = document.querySelector("#ballVic").innerHTML = 0;
    const draws = document.querySelector("#draws").innerHTML = 0;

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
            quadrado.style.backgroundColor = "rgb(78, 47, 189)";
            quadrado.style.color = "white";
        } else {
            quadrado.classList.add("x");
            quadrado.style.backgroundColor = "rgb(230, 33, 33)";
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
            quadrado.style.backgroundColor = "#000";
            quadrado.classList.remove("o");
            quadrado.style.color = "#2260bd";
        } else {
            quadrado.classList = "square";
            quadrado.classList.remove("x");
            quadrado.style.backgroundColor = "#000";
        }
    }
}




function handleClick(event) {
    
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            if(playerTime == 0){ 
                ballVic.innerHTML++;
                eraseStage();
                board = ['', '', '', '', '', '', '', '', ''];
                playerTime = 1;
                gameOver = false;
                alert('Bolinha venceu!'); 
            } else {
                crossVic.innerHTML++;
                eraseStage();
                board = ['', '', '', '', '', '', '', '', ''];
                playerTime = 1;
                gameOver = false;
                alert('Cruz venceu!');
            } 
        })
    } 



    checkDraw();
    updateSquare(position);
    
    console.log(board)

}

function eraseStage(){
    let stage = document.querySelector("#stage");
        stage.innerHTML = `
        <div id="0" class="square" ></div>
        <div id="1" class="square" ></div>
        <div id="2" class="square"></div>

        <div id="3" class="square" ></div>
        <div id="4" class="square" ></div>
        <div id="5" class="square" ></div>

        <div id="6" class="square" ></div>
        <div id="7" class="square" ></div>
        <div id="8" class="square" ></div>
        `;

    var squares = document.querySelectorAll(".square");
    
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
        square.addEventListener('mouseover', mouseOver);
        square.addEventListener('mouseout', mouseOut)
    })
   
}


function checkDraw(){

    let c = [...board].includes('')
    if(gameOver == false && c == false ){
        draws.innerHTML++;
        eraseStage();
        board = ['', '', '', '', '', '', '', '', ''];
        playerTime = 1;
        gameOver = false;
        alert('Empatou!')
    }
       
}



function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`

    let restartBtn = document.querySelector('.restartBtn')
    restartBtn.addEventListener('click', eraseStage);
    
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
    
