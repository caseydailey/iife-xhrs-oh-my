// get the elements
const carnList = document.querySelector("#carnivores");
const herbList = document.querySelector("#herbivores");

// define the callbacks
function showCarnivores (carnivores) {
  carnivores.animals.forEach((carnivore) => carnList.innerHTML += `<li>${carnivore.name}</li>`);
}

function showHerbivores (herbivores) {
  herbivores.animals.forEach((herbivore)=> herbList.innerHTML += `<li>${herbivore.name}</li>`);

}

// invoke the loaders, passing the callbacks
Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);