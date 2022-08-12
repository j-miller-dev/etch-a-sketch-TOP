const gridContainer = document.querySelector(".grid-container");
let divSize = 30;
let divCount = 220;

// Loops through
function divGenerate() {
  const countArray = Array.from({ length: divCount }, (_, index) => index + 1);
  console.log(countArray);

  for (let i = 0; i < countArray.length; i++) {
    drawDiv();
  }
}

divGenerate();

function drawDiv() {
  const newDiv = document.createElement("div");
  newDiv.style.backgroundColor = "white";
  newDiv.style.height = `${divSize}px`;
  newDiv.style.width = `${divSize}px`;

  gridContainer.appendChild(newDiv);
}

gridContainer.addEventListener("mouseover", (event) => {
  console.log(event);
  event.target.style.backgroundColor = "black";
});
