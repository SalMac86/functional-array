const Animals = require('./animals');

function selectNames(arr) {
    let names = [];
    for (let i = 0; i < arr.length; i++) {
        names.push(arr[i].name);
    }
    return names;
}
let names = selectNames(Animals);
console.log(names);
