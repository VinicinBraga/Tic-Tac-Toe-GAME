const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");
const winningMessage = document.querySelector("[data-winning-message]");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
let isCircleTurn;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

const startGame = () => {
  for (const cell of cellElements) {
    cell.addEventListener("click", handleClick, { once: true });
  }
  isCircleTurn = false;
  board.classList.add("x");
};

const endGame = (isDraw) => {
  if (isDraw) {
    winningMessageTextElement.innerText = "Empate!";
  } else {
    winningMessageTextElement.innerText = isCircleTurn
      ? "Circle Won!"
      : "X Won!";
  }
  winningMessage.classList.add("show-winning-message");
};

const checkForWin = (currentPlayer) => {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentPlayer);
    });
  });
};

const placeMark = (cell, classToadd) => {
  cell.classList.add(classToadd);
};

const swapTurns = () => {
  isCircleTurn = !isCircleTurn;

  board.classList.remove("circle");
  board.classList.remove("x");

  if (isCircleTurn) {
    board.classList.add("circle");
  } else {
    board.classList.add("x");
  }
};

const handleClick = (e) => {
  //Colocar(X ou Circle)
  const cell = e.target;
  const classToadd = isCircleTurn ? "circle" : "x";

  placeMark(cell, classToadd);
  //Verificar vitoria
  const isWin = checkForWin(classToadd);
  if (isWin) {
    endGame(false);
  }
  //Verificar Empate
  //Mudar simbolo
  swapTurns();
};

startGame();
