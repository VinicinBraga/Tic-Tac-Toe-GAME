const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");

let isCircleTurn;
const winningCombinations = [
  [0, 1, 2][(3, 4, 5)][(6, 7, 8)][(0, 3, 6)][(1, 4, 7)][(2, 5, 8)][(0, 4, 8)][
    (6, 4, 2)
  ],
];

const startGame = () => {
  for (const cell of cellElements) {
    cell.addEventListener("click", handleClick, { once: true });
  }
  isCircleTurn = false;
  board.classList.add("x");
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
  //Verificar Empate

  //Mudar simbolo
  swapTurns();
};

startGame();
