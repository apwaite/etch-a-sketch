const main = document.querySelector(".main");

window.addEventListener("load", defaultSize);

function defaultSize() {
  makeGrid(16);
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
