let arr = [1, 2, 3, 4, 6, 7, 9, 1, 2, 4, 5];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            arr.splice(j, 1)
        }
    }
}

console.log(arr)

let arr_1 = [1, 2, 3, 4, 6, 7, 9, 1, 2, 4, 5];

let result = arr_1.filter((value, index, self) => {
    return self.indexOf(value) === index
})

console.log(result)

let arr_2 = [1, 2, 3, 4, 6, 7, 9, 1, 2, 4, 5];

let set = new Set(arr_2)
let result_1 = Array.from(set)

console.log(result_1)