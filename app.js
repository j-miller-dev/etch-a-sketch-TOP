const gridContainer = document.querySelector(".grid-container");
let divSize = 30;
let divCount = 16 * 16;

function divGenerate(divCount) {
  const countArray = Array.from({ length: divCount }, (_, index) => index + 1);
  console.log(countArray);
  for (let i = 0; i < countArray.length; i++) {
    drawDiv();
  }
}

divGenerate(divCount);

function drawDiv() {
  const newDiv = document.createElement("div");
  newDiv.style.backgroundColor = "white";
  newDiv.style.height = `${divSize}px`;
  newDiv.style.width = `${divSize}px`;
  gridContainer.appendChild(newDiv);
}

// document.addEventListener("DOMContentLoaded", function () {
//   // Handler for when the DOM is fully loaded
// });

gridContainer.addEventListener("mouseover", (event) => {
  console.log(event);
  event.target.style.backgroundColor = "red";
  //   let allHoverEvents = document.querySelectorAll(".div");

  //   for (let i = 0; i < allHoverEvents.length; i++) {
  //     allHoverEvents.item(i).onmouseover = function () {
  //       console.log("Hello!");
  //     };
  //   }
});
