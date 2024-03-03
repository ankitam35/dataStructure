let arr = [0, 1, 2, 1, 1, 0, 0, 2, 1, 0, 0, 2];
let reqArr = arr.filter(i => i == 0).concat(arr.filter(i => i == 2)).concat(arr.filter(i => i == 1))
console.log(reqArr)
