document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => { //pega todos os elementos com a classe square
        square.addEventListener('click', handleClick); //adiciona um evento de click para cada elemento
    });
});

function handleClick(event) {
    let square = event.target; //pega o elemento que foi clicado
    let position = square.id; //pega o id do elemento clicado

    if (handleMove(position)) {
        setTimeout(() => {
            alert('O jogo acabou - O vencedor foi o jogador ' + playerTime);
        }, 10);
    }

    updateSquares(position);
    
}

function updateSquares(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];

    square.innerHTML = `<div class='${symbol}'></div>`;
}

