const main = document.querySelector(".main");

const newGridButton = document.querySelector("#new-grid");

const penColor = document.querySelectorAll(".penColor");

const reset = document.querySelector("#reset");

let currentColor = "standard";

window.addEventListener("load", loadGame);

newGridButton.addEventListener("click", createNewGrid);

reset.addEventListener("click", () => {
  clear();
  draw(currentColor);
});

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

function clear() {
  const gridItems = document.querySelectorAll(".main > div");

  gridItems.forEach((item) => {
    item.style = "background-color = rgb(255, 255, 255)";
  });

  // const gridItems = Array.from(main.childNodes);

  // gridItems.forEach((items) => {
  //   items.style = "background-color = rgb(255, 255, 255)";
  // });
}

function removeGrid() {
  const gridItems = document.querySelectorAll(".main > div");

  gridItems.forEach((items) => {
    main.removeChild(items);
  });

  // const gridItems = Array.from(main.childNodes);

  // gridItems.forEach((items) => {
  //   main.removeChild(items);
  // });
}

function createNewGrid() {
  const newGrid = parseInt(prompt("Please enter a value between 1 and 100: "));

  if (newGrid < 1 || newGrid > 100 || isNaN(newGrid)) {
    alert("Error! Please enter a number between 1 and 100.");
    createNewGrid();
  } else {
    removeGrid();
    makeGrid(newGrid);
    draw(currentColor);
  }
}

function draw(color) {
  const gridItems = document.querySelectorAll(".main > div");

  gridItems.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      if (color === "standard" || currentColor === "standard") {
        e.target.style = "background-color: rgba(46, 49, 49)";
      } else if (color === "rainbow") {
        e.target.style.backgroundColor = randomColor();
      }
    });
  });
}

function selectButton(button) {
  if (button.classList.contains("penColor")) {
    penColor.forEach((selection) => {
      selection.classList.remove("active");
    });
  }
  button.classList.add("active");
}

function changeColor() {
  penColor[0].classList.add("active");

  penColor.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("standard")) {
        draw("standard");
        currentColor = "standard";
        selectButton(item);
      } else if (item.classList.contains("rainbow")) {
        draw("rainbow");
        currentColor = "rainbow";
        selectButton(item);
      }
    });
  });
}

function randomColor() {
  const r1 = Math.floor(Math.random() * 256);
  const r2 = Math.floor(Math.random() * 256);
  const r3 = Math.floor(Math.random() * 256);
  const bgColor = `rgb(${r1}, ${r2}, ${r3})`;
  return bgColor;
}

function loadGame() {
  defaultSize();
  draw("standard");
  changeColor();
}
