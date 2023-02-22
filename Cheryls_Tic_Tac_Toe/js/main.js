console.log('Your JS is linked up. Be the person you needed when you were little.')


/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

    
/*----- app's state (variables) -----*/
let board;
let turn = 'X';
let win;
//win = board[0] && board[0] === board[1] && board[0] === board[2] ? board[0] : null;

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    // new code here
    render();
    };

function render() {
    board.forEach(function(val, idx) {
    squares[idx].textContent = val;
    });
    // new code below
    messages.textContent = win === 'T' ? `That's a tie, queen!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`; 
};


/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
// new code below
const messages = document.querySelector('h2');


/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
//new code
document.getElementById('reset-button').addEventListener('click', init);

/*----- functions -----*/
function handleTurn() {
    let idx = squares.findIndex(function(square) {
    return square === event.target;
    });
    board[idx] = turn;
    // new code here
    win = getWinner();
    render();
    };

function getWinner() {
    let winner = null;
    winningCombos.forEach((combo, index) => {
    if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
    winner = board[combo[0]];
    }
    });
    // new code below
    return winner ? winner : board.includes('') ? null : 'T';
    };