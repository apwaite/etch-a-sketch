const main = document.querySelector(".main");

const newGridButton = document.querySelector("#new-grid");

newGridButton.addEventListener("click", createNewGrid);

window.addEventListener("load", defaultSize);

function defaultSize() {
  makeGrid(24);
}
function makeGrid(val) {
  let gridSize = val * val;
  main.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
  for (let i = 0; i < gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList = "grid-item";
    main.appendChild(gridItem);
  }
}

function removeGrid() {
  const mainArray = Array.from(main.childNodes);

  mainArray.forEach((e) => {
    main.removeChild(e);
  });
}

function createNewGrid() {
  let newGrid = prompt("Please enter a value between 1 and 64");

  if (newGrid < 1 || newGrid > 100 || isNaN(newGrid)) {
    alert("Error! Please enter a number between 1 and 64.");
    createNewGrid();
  } else {
    removeGrid();
    makeGrid(newGrid);
  }
}
