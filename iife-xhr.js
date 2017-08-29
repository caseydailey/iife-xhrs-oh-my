// get the elements
const carnivoreList = document.querySelector("#carnivores");
const herbivoreList = document.querySelector("#herbivores");

// define the callbacks
function showCarnivores (carnivores) {
  carnivores.animals.forEach((carnivore) => carnivoreList.innerHTML += `<li>${carnivore.name}</li>`);
}

function showHerbivores (herbivores) {
  herbivores.animals.forEach((herbivore)=> herbivoreList.innerHTML += `<li>${herbivore.name}</li>`);

}

// invoke the loaders, passing the callbacks
Animal.loadAnimals(showCarnivores, "carnivores");
Animal.loadAnimals(showHerbivores, "herbivores");