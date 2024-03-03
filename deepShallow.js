let obj = [{
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four"
}, {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four"
}]

let shallowObj = Object.assign({}, obj)
let deepObj = JSON.parse(JSON.stringify(obj))

deepObj[0][0] = 'Z'


console.log(obj)
console.log(shallowObj)
console.log(deepObj)