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
        this.subtractionButton = document.querySelector 
        ("#subtraction-button-id")
        this.subtractionButton.addEventListener ("click", () => this.SubtractionFunc())
        this.multiplicationButton = document.querySelector ("#multiplication-button-id")
        this.multiplicationButton.addEventListener ("click", () => this.MultiplicationFunc())
        this.divisionButton = document.querySelector ("#division-button-id")
        this.divisionButton.addEventListener ("click", () => this.DivisionFunc())
        this.percentageButton = document.querySelector ("#percentage-button-id")
        this.percentageButton.addEventListener ("click", () => this.PercentageFunc())
        
        this.output = '0'
        this.previousOperant.innerHTML = this.output
        this.currentOperant.innerHTML = this.output

        this.signal = ''
        this.total = 0
        this.conditionTwo = 0

    
        // Interation with the keyboard

        document.addEventListener("keypress", (e) => {
            if(e.key === '0') {
                this.number0.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '1') {
                this.number1.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '2') {
                this.number2.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '3') {
                this.number3.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '4') {
                this.number4.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '5') {
                this.number5.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '6') {
                this.number6.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '7') {
                this.number7.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '8') {
                this.number8.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '9') {
                this.number9.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === 'Enter') {
                this.buttonEqual.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '+') {
                this.buttonAddition.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '-') {
                this.subtractionButton.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '*') {
                this.multiplicationButton.click();
            } else if (e.key === 'x') {
                this.multiplicationButton.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '/') {
                this.divisionButton.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === 'c') {
                this.buttonClear.click();
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === 'd') {
                if (this.output == 0) {
                    this.currentOperant.innerHTML = `0`
                } else {
                    this.buttonCancel.click();
                    if (this.output == '') {
                        this.currentOperant.innerHTML = `0`
                    }
                }
            }
        });

        document.addEventListener("keypress", (e) => {
            if(e.key === '%') {
                this.percentageButton.click();
            }
        });

    }

    buttonEqualFunc() {

        this.conditionTwo = parseFloat(this.output)

        if (this.signal == '+') {
            this.total = this.conditionOne + this.conditionTwo
        } else if (this.signal == '-') {
            this.total = this.conditionOne - this.conditionTwo
        } else if (this.signal == '*') {
            this.total = this.conditionOne * this.conditionTwo
            this.signal = 'x' 
        } else if (this.signal == '/') {
            this.total = this.conditionOne / this.conditionTwo
            this.signal = '÷' 
        }

        this.previousOperant.innerHTML = `${this.conditionOne} ${this.signal} ${this.conditionTwo} = ${this.total}`

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
        this.conditionOne = parseFloat(this.output)
        this.output = 0
        this.currentOperant.innerHTML = `+`
    }

    SubtractionFunc() {
        this.signal = '-'
        this.previousOperant.innerHTML = this.output
        this.conditionOne = parseFloat(this.output)
        this.output = 0
        this.currentOperant.innerHTML = `-`
    }

    MultiplicationFunc() {
        this.signal = '*'
        this.previousOperant.innerHTML = this.output
        this.conditionOne = parseFloat(this.output)
        this.output = 0
        this.currentOperant.innerHTML = `x`
    }

    DivisionFunc() {
        this.signal = '/'
        this.previousOperant.innerHTML = this.output
        this.conditionOne = parseFloat(this.output)
        this.output = 0
        this.currentOperant.innerHTML = `÷`
    }

    PercentageFunc() {

        this.conditionTwo = parseFloat(this.output)
        this.total = (this.conditionOne / 100) * this.conditionTwo

        this.signal = 'x'
        this.previousOperant.innerHTML = `${this.conditionOne} ${this.signal} ${this.conditionTwo} % = ${this.total.toFixed(2).replace('.',',')}`

        this.output = '0'
        this.currentOperant.innerHTML = this.output
        
    }

}

const calculator = new Calculator()