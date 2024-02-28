let arr = [1, 2, 3, 4, 6, 7, 9, 1, 2, 4, 5];
let positionRemove = 5;

for (let i = positionRemove; i < arr.length; i++) {
    arr[i] = arr[i + 1]
}

if (arr[arr.length - 1] === undefined) {
    arr.length -= 1
}

console.log(arr)
