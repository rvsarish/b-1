let currentPlayer = "X";
let gameOver = false;

function makeMove(cell) {
  if (cell.innerHTML === "" && !gameOver) {
    cell.innerHTML = currentPlayer;
    if (checkWin()) {
      document.getElementById(
        "message"
      ).innerText = `Player ${currentPlayer} wins!`;
      gameOver = true;
    } else if (checkDraw()) {
      document.getElementById("message").innerText = "It's a draw!";
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  const cells = document.getElementsByClassName("cell");
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const pattern of winPatterns) {
    if (
      cells[pattern[0]].innerHTML &&
      cells[pattern[0]].innerHTML === cells[pattern[1]].innerHTML &&
      cells[pattern[0]].innerHTML === cells[pattern[2]].innerHTML
    ) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  const cells = document.getElementsByClassName("cell");
  for (const cell of cells) {
    if (cell.innerHTML === "") {
      return false;
    }
  }
  return true;
}

function resetBoard() {
  const cells = document.getElementsByClassName("cell");
  for (const cell of cells) {
    cell.innerHTML = "";
  }
  document.getElementById("message").innerText = "";
  gameOver = false;
  currentPlayer = "X";
}
