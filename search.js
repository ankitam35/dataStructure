let arr = [1, 2, 3, 4, 6, 7, 9, 1, 2, 4, 5];
let item = 7;
let index = null

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
        index = i
        break;
    }
}

console.log(`The index is ${index}`)