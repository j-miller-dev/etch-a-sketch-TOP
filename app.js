const gridContainer = document.querySelector(".grid-container");
let sizeSlider = document.querySelector("#sizeRange");
let color = "black";
const colorButtons = document.querySelectorAll(".color-choice");
const userColorPicker = document.querySelector("#input-color");
const clearButton = document.querySelector(".clear");

// Loops through
function createGrid(sizeSlider) {
  let gridArea = sizeSlider * sizeSlider;

  for (let i = 0; i < gridArea; i++) {
    let gridItem = document.createElement("div");
    gridContainer.style.gridTemplateColumns = `repeat(${sizeSlider}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${sizeSlider}, 1fr)`;
    gridContainer.insertAdjacentElement("beforeend", gridItem);
  }
  let gridPixels = gridContainer.querySelectorAll("div");
  gridPixels.forEach((gridPixel) =>
    gridPixel.addEventListener("mouseover", colorGrid)
  );
}

// A function that colours grid based on selection
function colorGrid() {
  switch (color) {
    case "rainbow":
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      this.classList.remove("gray");
      break;
    case "gray":
      if (this.style.backgroundColor.math(/rgba/)) {
        let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
        if (currentOpacity <= 0.9) {
          this.style.backgroundColor = `rgba(0,0,0, ${currentOpacity + 0.1})`;
          this.classList.add("gray");
        }
      } else if (
        this.classList == "gray" &&
        this.style.backgroundColor == "rgba(0,0,0)"
      ) {
        return;
      } else {
        this.style.backgroundCOlor = "rgba(0,0,0, 0.1)";
      }
      break;
    case "eraser":
      this.style.backgroundColor = "#ffffff";
      this.classList.remove("gray");
      break;
    case "black":
      this.style.backgroundColor = "#000000";
      this.classList.remove("gray");
      break;
    default:
      this.style.backgroundColor = color;
      this.classList.remove("gray");
      break;
  }
}

// Clear
function eraseAllColor() {
  let gridPixels = gridContainer.querySelectorAll("div");
  gridPixels.forEach(
    (gridPixel) => (gridPixel.style.backgroundColor = "#ffffff")
  );
}

// Updates color when clicked
function changeColor(event) {
  switch (event.target.dataset.color) {
    case "rainbow":
      color = "rainbow";
      break;
    case "gray":
      color = "gray";
      break;
    case "eraser":
      color = "eraser";
      break;
    default:
      color = "black";
      break;
  }
}

function pixelSize() {
  let gridPixels = gridContainer.querySelectorAll("div");
  gridPixels.forEach((gridPixel) => gridPixel.remove());
  createGrid(sizeSlider.value);
}

function userColorSelection(event) {
  color = event.target.value;
}

function buttonHover() {
  this.style.border = "1px solid #ffffff";
}

function buttonStandard() {
  this.style.border = "1px solid #FF0000";
}

// On Page Load - default size
createGrid(10);

// Event listeners
clearButton.addEventListener("click", eraseAllColor);
clearButton.addEventListener("mouseover", buttonHover);
clearButton.addEventListener("mouseout", buttonStandard);
colorButtons.forEach((colorButton) =>
  colorButton.addEventListener("click", changeColor)
);
colorButtons.forEach((colorButton) =>
  colorButton.addEventListener("mouseover", buttonHover)
);
colorButtons.forEach((colorButton) =>
  colorButton.addEventListener("mouseout", buttonStandard)
);
slider.addEventListener("mouseup", pixelSize);
userColorPicker.addEventListener("change", userColorSelection, false);
userColorPicker.addEventListener("input", userColorSelection, false);
