function createGrid() {
  const rows = 16;
  const columns = 16;
  const gridSize = rows * columns;

  const gridContainer = document.querySelector(".grid-container");

  for (let i = 0; i < gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
  }
}

createGrid();
