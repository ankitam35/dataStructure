class Test {
    constructor() {
        console.log(Test.getDisplay())
    }

    static getDisplay() {
        return "This is Test and getDisplay function invoked";
    }
}

new Test()