// Cria um objeto "Animal"
var Animal = {
  type: "desconhecido",
  typeSon: "...",
  som: function () {
    console.log(`O som do ${this.type} é ${this.typeSon}.`);
  },
};

Animal.som();

// Cria um objeto "Cachorro" com o protótipo de "Animal"
var Cachorro = Object.create(Animal);
Cachorro.type = "cachorro";
Cachorro.typeSon = "auau";


// Cria um objeto "Gato" com o protótipo de "Animal"
var Gato = Object.create(Animal);
Gato.type = "gato";
Gato.typeSon = "miau";

// Usa o objeto "Cachorro"
Cachorro.som(); // "O som do cachorro é latido."

// Usa o objeto "Gato"
Gato.som(); // "O som do gato é miado."
