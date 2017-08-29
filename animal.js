
var Animal = (function (animals) {

    animals.loadAnimals = function (callBack, type) {

      //make a new request
      var request = new XMLHttpRequest();
    
      //listen for load and/or error
      request.onload = () => callBack(JSON.parse(request.responseText));
      request.onerror = error => console.log(error);

      //open and send it
      request.open("GET", `${type}.json`);
      request.send();
    }

    return animals;

})(Animal || {});