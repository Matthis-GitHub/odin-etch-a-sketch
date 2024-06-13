// Global variables
let squaresPerSide = 16;
const gridContainerSize = 700;

// DOM elements
const chooseSquaresBtn = document.querySelector(".choose-squares");
chooseSquaresBtn.addEventListener("click", createNewGrid);

const gridContainer = document.querySelector(".grid-container");
gridContainer.style["width"] = `${gridContainerSize}px`;
gridContainer.style["height"] = `${gridContainerSize}px`;

// Functions
function createGrid() {
  let squareSize = gridContainerSize / squaresPerSide;

  for (let i = 0; i < squaresPerSide ** 2; i++) {
    const square = document.createElement("div");
    square.style["width"] = `${squareSize}px`;
    square.style["height"] = `${squareSize}px`;
    square.classList.add("square");
    gridContainer.appendChild(square);
  }
}

function createNewGrid() {
  // get user input
  let userInput = setSquaresPerSideByUserInput(
    "Enter grid size number (i.e. 16 to create a 16x16 grid)."
  );
  if (!userInput) {
    return;
  }
  // remove existing grid
  removeAllSquares();
  // add new grid
  createGrid();
  // color squares on hover
  addSquaresMouseEnterEventListener();
}

function removeAllSquares() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => square.remove());
}

function addSquaresMouseEnterEventListener() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseenter", () =>
      square.classList.add("colorized")
    );
  });
}

function setSquaresPerSideByUserInput(message) {
  let userInput = parseInt(prompt(message));
  console.log(userInput);
  if (isNaN(userInput)) {
    return null;
  }

  if (userInput > 0 && userInput <= 100) {
    squaresPerSide = userInput;
    return true;
  } else {
    setSquaresPerSideByUserInput(
      "Invalid, please type a number between 1 and 100"
    );
  }
}

// Initial function calls
createGrid();
addSquaresMouseEnterEventListener();
