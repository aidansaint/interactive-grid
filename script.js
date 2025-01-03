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

createTiles(4096);
