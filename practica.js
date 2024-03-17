var pet = function (name) {
    // La función externa define una variable llamada "name"
    var getName = function () {
      return name; // La función interna tiene acceso a la variable
      // "name" de la función externa
    };
    return getName; // Devuelve la función interna, exponiéndola así a ámbitos externos
  };
  myPet = pet("Vivie");
  
  myPet(); // Devuelve "Vivie"
  