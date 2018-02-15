const Animals = [
    { name: "Fluffykins", species: "rabbit" },
    { name: "Caro", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" }
]

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
