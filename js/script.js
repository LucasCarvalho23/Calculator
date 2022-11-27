class Calculator {

    constructor() {
        this.previousOperant = document.querySelector ("#previous-operant-id")
        this.currentOperant = document.querySelector ("#current-operant-id")

        this.buttonEqual = document.querySelector ("#button-equal-id")
        this.buttonEqual.addEventListener ("click", () => this.buttonEqualFunc())

        this.buttonClear = document.querySelector ("#button-clear-id")
        this.buttonClear.addEventListener ("click", () => this.buttonClearFunc())

        this.buttonCancel = document.querySelector ("#button-cancel-id")
        this.buttonCancel.addEventListener ("click", () => this.buttonCancelFunc())

        this.buttonComma = document.querySelector ("#button-comma-id")
        this.buttonComma.addEventListener ("click", () => this.buttonCommaFunc())

        this.number0 = document.querySelector ("#number-0-id")
        this.number0.addEventListener ("click", () => this.numberZeroFunc())
        this.number1 = document.querySelector ("#number-1-id")
        this.number1.addEventListener ("click", () => this.numberOneFunc())
        this.number2 = document.querySelector ("#number-2-id")
        this.number2.addEventListener ("click", () => this.numberTwoFunc())
        this.number3 = document.querySelector ("#number-3-id")
        this.number3.addEventListener ("click", () => this.numberThreeFunc())
        this.number4 = document.querySelector ("#number-4-id")
        this.number4.addEventListener ("click", () => this.numberFourFunc())
        this.number5 = document.querySelector ("#number-5-id")
        this.number5.addEventListener ("click", () => this.numberFiveFunc())
        this.number6 = document.querySelector ("#number-6-id")
        this.number6.addEventListener ("click", () => this.numberSixFunc())
        this.number7 = document.querySelector ("#number-7-id")
        this.number7.addEventListener ("click", () => this.numberSevenFunc())
        this.number8 = document.querySelector ("#number-8-id")
        this.number8.addEventListener ("click", () => this.numberEightFunc())
        this.number9 = document.querySelector ("#number-9-id")
        this.number9.addEventListener ("click", () => this.numberNineFunc())

        this.buttonAddition = document.querySelector ("#button-addition-id")
        this.buttonAddition.addEventListener ("click", () => this.AdditionFunc())
        
        this.output = '0'
        this.previousOperant.innerHTML = this.output
        this.currentOperant.innerHTML = this.output

        this.signal = ''
        this.total = 0
    }

    buttonEqualFunc() {
        this.conditionTwo = this.output
        this.conditionTwo = Number(this.conditionTwo.value)
        this.total = this.conditionOne + this.conditionTwo

        this.previousOperant.innerHTML = `${this.conditionOne} + ${this.conditionTwo} = ${this.total}`

        this.output = '0'
        this.currentOperant.innerHTML = this.output
    }

    buttonClearFunc() {
        this.output = '0'
        this.previousOperant.innerHTML = this.output
        this.currentOperant.innerHTML = this.output
    }

    buttonCancelFunc() {
        this.output = this.output.slice(0,-1)
        this.currentOperant.innerHTML = this.output
    }

    buttonCommaFunc() {
        this.output += ','
        this.currentOperant.innerHTML = this.output
    }

    // NUMBERS

    numberZeroFunc() {
        if (this.output == '0') {
            this.output = '0'
            this.currentOperant.innerHTML = this.output
        }
        else { 
            this.output += '0'
            this.currentOperant.innerHTML = this.output
        }
    }


    numberOneFunc() {
        if (this.output == '0') {
            this.output = '1'
            this.currentOperant.innerHTML = this.output
        }
        else { 
            this.output += '1'
            this.currentOperant.innerHTML = this.output
        }
    }

    numberTwoFunc() {
        if (this.output == '0') {
            this.output = '2'
            this.currentOperant.innerHTML = this.output
        }
        else { 
            this.output += '2'
            this.currentOperant.innerHTML = this.output
        }
    }

    numberThreeFunc() {
        if (this.output == '0') {
            this.output = '3'
            this.currentOperant.innerHTML = this.output
        }
        else { 
            this.output += '3'
            this.currentOperant.innerHTML = this.output
        }
    }

    numberFourFunc() {
        if (this.output == '0') {
            this.output = '4'
            this.currentOperant.innerHTML = this.output
        }
        else { 
            this.output += '4'
            this.currentOperant.innerHTML = this.output
        }
    }

    numberFiveFunc() {
        if (this.output == '0') {
            this.output = '5'
            this.currentOperant.innerHTML = this.output
        }
        else { 
            this.output += '5'
            this.currentOperant.innerHTML = this.output
        }
    }

    numberSixFunc() {
        if (this.output == '0') {
            this.output = '6'
            this.currentOperant.innerHTML = this.output
        }
        else { 
            this.output += '6'
            this.currentOperant.innerHTML = this.output
        }
    }

    numberSevenFunc() {
        if (this.output == '0') {
            this.output = '7'
            this.currentOperant.innerHTML = this.output
        }
        else { 
            this.output += '7'
            this.currentOperant.innerHTML = this.output
        }
    }

    numberEightFunc() {
        if (this.output == '0') {
            this.output = '8'
            this.currentOperant.innerHTML = this.output
        }
        else { 
            this.output += '8'
            this.currentOperant.innerHTML = this.output
        }
    }

    numberNineFunc() {
        if (this.output == '0') {
            this.output = '9'
            this.currentOperant.innerHTML = this.output
        }
        else { 
            this.output += '9'
            this.currentOperant.innerHTML = this.output
        }
    }

    AdditionFunc() {
        this.signal = '+'
        this.previousOperant.innerHTML = this.output
        console.log (this.output)
        console.log (typeof this.output)
        this.conditionOne = Number(this.output.value)
        console.log (this.conditionOne)
        console.log (typeof this.conditionOne)
        this.output = 0
        this.currentOperant.innerHTML = `+`
    }

}

const calculator = new Calculator()