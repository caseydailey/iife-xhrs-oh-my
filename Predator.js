
var Predator = (function (predator) {

    var carnivores = [];
    var herbivores = [];

    predator.loadCarnivores = function (callBack) {

      //make a new request
      var request = new XMLHttpRequest();

      //open and send it
      request.open("GET", "carnivores.json");
      request.send();

      //listen for load and/or error
      request.addEventListener("error", loadFailed);
      request.addEventListener("load", loadComplete);

      //callback for load
      function loadComplete(load) {
        carnivores = JSON.parse(this.responseText);
        callBack(carnivores);
      }

      //callback for error
      function loadFailed(load){
        console.log("loaded failed: ", load.target.responseText);
      };
    }



    predator.loadHerbivores = function (callBack) {

      //create a new request
      var request = new XMLHttpRequest();

      //open and send it
      request.open("GET", "herbivores.json");
      request.send();

      //listen for load and/or errors
      request.addEventListener("error", loadFailed);
      request.addEventListener("load", loadComplete);

      //callback for load
      function loadComplete(load) {
        herbivores = JSON.parse(this.responseText);
        callBack(herbivores);
      }

      //callback for error
      function loadFailed(load){
        console.log("loaded failed: ", load.target.responseText);
      };

    }

    return predator;

})(Predator || {});