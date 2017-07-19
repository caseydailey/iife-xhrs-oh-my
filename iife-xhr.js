function showCarnivores (carnivores) {
  console.log("showCarnivores: ", carnivores);
}

function showHerbivores (herbivores) {
  console.log("showHerbivores: ", herbivores);

}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);