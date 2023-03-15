
// criar um array com instancia


let lista = new Array("ovo", "farinha", "arroz", "legumes");
let index = lista[0] // ovo


// usando filter
let ingredientes = lista.filter((ig) => {
    if(ig.includes("farinha") || ig.includes("ovo")){
        return ig;
    }
})

console.log(ingredientes)

let animals = [
    {name: 'Tibbers', type: 'cat', isNeutered: true, age: 2},
    {name: 'Fluffball', type: 'rabbit', isNeutered: false, age: 1},
    {name: 'Strawhat', type: 'cat', isNeutered: true, age: 5}
  ]

 /*using functional filter() where a represents an item in the array*/
let neuteredAnimals = animals.filter((a) => {
     return a.isNeutered;
 });

console.log(neuteredAnimals)


// find

let animals1 = [
    {name: 'Tibbers', type: 'cat', isNeutered: true, age: 2},
    {name: 'Fluffball', type: 'rabbit', isNeutered: false, age: 1},
    {name: 'Strawhat', type: 'cat', isNeutered: true, age: 5}
  ]

animalTypeFound = animals.find( animal => animal.type === 'cat' );

// animalTypeFound will return:
// {name: 'Tibbers', type: 'cat', isNeutered: true, age: 2}


// Map

let animals2 = [
    {name: 'Tibbers', type: 'cat', isNeutered: true, age: 2},
    {name: 'Fluffball', type: 'rabbit', isNeutered: false, age: 1},
    {name: 'Strawhat', type: 'cat', isNeutered: true, age: 5}
  ]

// what you need: 
// [{name: 'Tibbers', species: 'cat'}, {name: 'Fluffball', species: 'rabbit'}, {name: 'Strawhat', species: 'cat'}]

let petDetails = animals.map(animal => {
    return {
        name: animal.name, 
        species: animal.type
    };
});


// add value 
let numbers = [1,2,3,4,5];
numbers.push(6,7,8,9,10);
console.log(numbers);

// add initial value

numbers.unshift(11);
console.log(numbers);

// remove final 
numbers.pop();

// remove initial
numbers.shift();


// get piece of array
numbers2 = numbers.slice(0,3); 
console.log(numbers2)


// remove peice
numbers.splice(3, numbers.length -3 );
console.log(numbers)

// string to array

let abcd = " A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z".replace(",", "").replace(" ", "");

let listAbcd = Array.from(abcd);



