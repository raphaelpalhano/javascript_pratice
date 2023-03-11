// contando valores
const nome = "Laura Fernandes".length;
const array = [1,23,4,5,6].length;
console.log(nome);

//fixed number and replace: fixar a quantia de casas decimais 

function controlNumber(number, fix, sep){
    return number.toFixed(fix).replace(sep);
}

const number = 99.999999999999
console.log(number.toFixed(2).replace('.', ','));


// quebrando string

const textos = "Eu e minha cachorra fomos ao parque olhar a natureza.".split(' ');

const unindoTextos = textos.join("_");

console.log(unindoTextos);


// buscando valor

const obj = "Meu nome é Gabriela"

console.log(obj.includes("Gabriela")); // true

