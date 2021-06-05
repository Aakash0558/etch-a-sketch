const grids = document.getElementById("grids");

//starting grid with empty divs but with border
function makeGrid(size) {
  for (grid = 0; grid < (size * size); grid++) {
    const cell = document.createElement("div");
    /*cell.innerText = grid + 1;*/
    cell.classList = "grid-items";
    cell.addEventListener('mouseover', changeColor); //changing the color of grid when mouse is hovered over
    grids.appendChild(cell);
  };
};

//default when the program loads
function defaultGrid() {
  setGridSize(16);
  makeGrid(16);
}

//setting the size of the grid
function setGridSize(size) {
  grids.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

const clr = document.getElementById("clear");

const sizes = document.getElementById("size");

//to reset the changed grid colors to background color of body when clicked
clr.addEventListener('click', clearColor);

//to change the size of the grind when clicked
sizes.addEventListener('click', changeGridSize);

//related to clear button in html page
function clearColor() {
  var gridPixels = grids.querySelectorAll('div');
  gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#293b5f');
}

//reset the grid
function gridClear(){
  const gridArray = Array.from(grids.childNodes);
  gridArray.forEach((element) => {
    grids.removeChild(element);
  });
}

//change color using rgb values
function changeColor(e) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

//this function resets the grid and uses input to make another grid
function changeGridSize() {
  let size = prompt("Enter size of grid");
  if (size !== null) {
    size = parseInt(size);
    if ((size < 1) || (size > 64) || (Number.isNaN(size))){
      alert("Enter a number from 1-64 range");
      changeGridSize();
    }
    else{
      gridClear();
      setGridSize(size);
      makeGrid(size);
    }
  }
}

//to load the default grid when the page loads
window.addEventListener('load', defaultGrid);
