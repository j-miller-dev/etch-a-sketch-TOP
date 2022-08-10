const gridContainer = document.querySelector(".grid-container");
let divSize = 30;
let divCount = 16;

function divGenerate(divCount) {
  let divCountSpread = String(divCount)
    .split("")
    .map((divCount) => {
      return Number(divCount);
    });
  console.log(divCountSpread);
  for (let i = 0; i <= divCountSpread; i++) {
    console.log(i);
    drawDiv();
  }
}

divGenerate(divCount);

function drawDiv() {
  const newDiv = document.createElement("div");
  newDiv.style.backgroundColor = "blue";
  newDiv.style.height = `${divSize}px`;
  newDiv.style.width = `${divSize}px`;
  gridContainer.appendChild(newDiv);
}

drawDiv();
drawDiv();
