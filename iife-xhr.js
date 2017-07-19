const carnList = document.querySelector("#carnivores");
const herbList = document.querySelector("#herbivores");

function showCarnivores (carnivores) {
  carnivores.animals.forEach((carnivore)=> carnList.innerHTML += `<li>${carnivore.name}</li>`);
}

function showHerbivores (herbivores) {
  herbivores.animals.forEach((herbivore)=> herbList.innerHTML += `<li>${herbivore.name}</li>`);

}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);