class ScriptNumbers {

    constructor() {
        this.number1 = document.querySelector ("#number-1-id")
        this.number1.addEventListener ("click", () => this.numberOneFunc())

        this.currentOperant = 0
    }

    numberOneFunc() {
        this.currentOperant = 1
        console.log (this.currentOperant)
    }

}

const scriptNumbers = new ScriptNumbers()