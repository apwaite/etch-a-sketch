const main = document.querySelector(".main");

function makeGrid(rows, cols) {
  main.style.setProperty("--grid-rows", rows);
  main.style.setProperty("--grid-cols", cols);
  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    cell.innerText = "";
    main.appendChild(cell).className = "grid-item";
  }
}

// function makeGrid(num) {
//   const e = document.querySelector(".main");
//   for (let i = 0; i < num; i++) {
//     let row = document.createElement("div");
//     row.className = "row";
//     for (let j = 1; j <= num; j++) {
//       let cell = document.createElement("div");
//       cell.className = "cell";
//       cell.innerText = i * num + j;
//       row.appendChild(cell);
//     }
//     e.appendChild(row);
//   }
// }
