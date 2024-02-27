let arr = [1, 2, 3, 4, 6, 7, 8, 9];
let pos = 4;
let elementToBeInserted = 5;

for (let i = arr.length - 1; i >= pos; i--) {
    arr[i + 1] = arr[i]
}
arr[pos] = elementToBeInserted

console.log(arr)