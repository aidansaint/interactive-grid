const colours = [
  "rgb(255, 60, 50)", // red
  "rgb(255, 150, 0)", // orange
  "rgb(255, 205, 0)", // yellow
  "rgb(50, 200, 90)", // green
  "rgb(0, 200, 190)", // mint
  "rgb(50, 175, 200)", // teal
  "rgb(50, 175, 230)", // cyan
  "rgb(0, 120, 255)", // blue
  "rgb(90, 85, 215)", // indigo
  "rgb(175, 80, 220)", // purple
  "rgb(255, 45, 85)", // pink
  "rgb(165, 130, 95)", // brown
];

function getRandomColour() {
  const randomIndex = Math.floor(Math.random() * colours.length);

  return colours[randomIndex];
}

const container = document.querySelector(".container");

function createTiles(numberOfTiles) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < numberOfTiles; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    fragment.appendChild(tile);
  }

  container.appendChild(fragment);
}

container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("tile")) {
    e.target.style.backgroundColor = getRandomColour();
  }
});

container.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("tile")) {
    e.target.style.backgroundColor = "";
  }
});

createTiles(1024);
