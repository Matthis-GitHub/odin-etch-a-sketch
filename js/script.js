const gridContainer = document.querySelector(".grid-container");

function createGrid() {
  const rows = 16;
  const columns = 16;
  const gridSize = rows * columns;

  for (let i = 0; i < gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
  }
}

function addMouseEnterEventListener() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseenter", () =>
      square.classList.add("colorized")
    );
  });
}

createGrid();
addMouseEnterEventListener();
