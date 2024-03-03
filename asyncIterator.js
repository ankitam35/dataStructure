let asyncIterator = (async function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
})();


(async () => {
    for await (let res of asyncIterator) {
        console.log(res)
    }
})();