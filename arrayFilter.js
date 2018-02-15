const Animals = require('./animals');
// let animals = Animals.Animals;

function selectDogs(arr) {
    let dogs = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].species === "dog") {
            dogs.push(arr[i])
        }
    }
    return dogs;
}
let dogs = selectDogs(Animals);
console.log(dogs);

function selectDogsF(arr) {
    return arr.filter(e => e.species === 'dog')
}
let dogsF = selectDogsF(Animals);
console.log(dogsF);
