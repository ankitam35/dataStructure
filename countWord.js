let str = "The first pragraph. This is my second pragraph";
let arr = str.replace(/[^\s\w]/g, '').toLowerCase().split(" ");
let countArr = {}

arr.forEach(word => {
    if (countArr[word]) {
        countArr[word]++
    } else {
        countArr[word] = 1
    }
})

console.log(countArr)

