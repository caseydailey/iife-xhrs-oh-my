
var Predator = (function (predator) {

    var carnivores = [];
    var herbivores = [];

    predator.loadCarnivores = function (callBack) {

      //make a new request
      var request = new XMLHttpRequest();

      //listen for load and/or error
      request.addEventListener("load", loadComplete);
      request.addEventListener("error", loadFailed);

      //callback for load
      function loadComplete() {
        carnivores = JSON.parse(this.responseText);
        // invoking the callback passed at callsite
        // in iife-xhr.js
        callBack(carnivores);
      }

      //callback for error
      function loadFailed(load){
        console.log("loaded failed: ", load.target.responseText);
      };

      //open and send it
      request.open("GET", "carnivores.json");
      request.send();
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