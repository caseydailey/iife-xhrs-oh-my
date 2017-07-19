const carnList = document.querySelector("#carnivores");
const herbList = document.querySelector("#herbivores");

function showCarnivores (carnivores) {
  carnivores.predators.forEach((carnivore)=> carnList.innerHTML += `<li>${carnivore.name}</li>`);
}

function showHerbivores (herbivores) {
  herbivores.herbivores.forEach((herbivore)=> herbList.innerHTML += `<li>${herbivore.name}</li>`);

}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);