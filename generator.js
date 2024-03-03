function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const generator = simpleGenerator()

let flag = false
while (!flag) {
    let { done, value } = generator.next();
    console.log(value)
    flag = done
}
