// Tic-Tac-Toe Game
var currentPlayer = "X";
var board = ["", "", "", "", "", "", "", "", ""];

function startTicTacToe() {
    hideAllGames();
    document.getElementById("game-container").classList.remove("hidden");
    document.getElementById("tic-tac-toe").classList.remove("hidden");
}

function makeMove(index) {
    if (!board[index]) {
        board[index] = currentPlayer;
        renderTicTacToeBoard();
        if (checkTicTacToeWinner()) {
            document.getElementById("tic-tac-toe-result").textContent = "Player " + currentPlayer + " wins!";
        } else if (checkTicTacToeDraw()) {
            document.getElementById("tic-tac-toe-result").textContent = "It's a draw!";
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function renderTicTacToeBoard() {
    var cells = document.querySelectorAll("#tic-tac-toe-board .cell");
    cells.forEach((cell, index) => {
        cell.textContent = board[index];
    });
}

function checkTicTacToeWinner() {
    var winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (var i = 0; i < winConditions.length; i++) {
        var [a, b, c] = winConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function checkTicTacToeDraw() {
    return board.every(cell => cell);
}

function restartTicTacToe() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    renderTicTacToeBoard();
    document.getElementById("tic-tac-toe-result").textContent = "";
}

// Word Chain Game
function startWordChain() {
    hideAllGames();
    document.getElementById("game-container").classList.remove("hidden");
    document.getElementById("word-chain").classList.remove("hidden");
}

function checkWord() {
    var inputWord = document.getElementById("word-input").value.toLowerCase();
    var outputElement = document.getElementById("word-chain-output");

    if (inputWord.length === 0) {
        outputElement.textContent = "Please enter a word.";
    } else {
        var lastWord = outputElement.textContent.trim().split(" ").pop();
        if (lastWord && inputWord.charAt(0) !== lastWord.slice(-1)) {
            outputElement.textContent = "Invalid word. It should start with the last letter of the previous word.";
        } else {
            outputElement.textContent += " " + inputWord;
        }
    }
}

function restartWordChain() {
    document.getElementById("word-input").value = "";
    document.getElementById("word-chain-output").textContent = "";
}

// Helper functions
function hideAllGames() {
    var games = document.querySelectorAll(".game");
    games.forEach(game => {
        game.classList.add("hidden");
    });
}