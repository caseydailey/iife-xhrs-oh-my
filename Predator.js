
var Predator = (function (predator) {
  var carnivores = [];
  var herbivores = [];

  

    predator.loadCarnivores = function (callBack) {
      var request = new XMLHttpRequest();
      request.open("GET", "carnivores.json");
      request.send();
    request.addEventListener("error", loadFailed);
      request.addEventListener("load", function (load) {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);
        callBack(carnivores);
      });
    }

    function loadFailed(load){
      console.log("loaded failed: ", load.target.responseText);
    };

      predator.loadHerbivores = function (callBack) {
      var request = new XMLHttpRequest();
      request.open("GET", "herbivores.json");
      request.send();
    request.addEventListener("error", loadFailed);
      request.addEventListener("load", function (load) {
        // Set the value of the private array
        herbivores = JSON.parse(this.responseText);
        callBack(herbivores);
      });
    }

    function loadFailed(load){
      console.log("loaded failed: ", load.target.responseText);
    };

    return predator;

})(Predator || {});