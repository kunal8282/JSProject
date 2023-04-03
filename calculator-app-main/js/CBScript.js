class Calculator {
    constructor() {
        this.clear();
    }

    clear() {
        this.currentOperand = "";
        this.prevOperand = "";
        this.operator = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if(number == '.' && this.currentOperand.toString().includes('.')) return;

        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operator) {
        if (this.currentOperand == "") return;
        if (this.prevOperand != "") this.computeValue();

        this.prevOperand = this.currentOperand;
        this.operator = operator;
        this.currentOperand = "";

    }

    computeValue() {
        let result;
        const prev = Number.parseFloat(this.prevOperand);
        const current = Number.parseFloat(this.currentOperand); 

        if(isNaN(prev) || isNaN(current)) return;

        switch (this.operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                break;
        }


        this.currentOperand = result;
        this.operator = undefined;
        this.prevOperand = '';
    }

    getDisplay(){
        if(this.currentOperand == "" && this.prevOperand == ""){
            return '0';
        }

        if(this.currentOperand == ""){
            return this.prevOperand.toString();
        }

        return this.currentOperand.toString();
    }
}


const numeric_btn = document.querySelectorAll('#numeric_btn');
const operator_btn = document.querySelectorAll('#operation_btn');
const reset_btn = document.querySelector('.reset_btn');
const equal_btn = document.querySelector('.equal_btn');
const displayBox = document.querySelector('.calc_display h1');
const delete_btn = document.querySelector('#delete_btn')


const calculator = new Calculator();

numeric_btn.forEach((ele) => {
    ele.addEventListener('click', () => {
        calculator.appendNumber(ele.textContent);
        displayBox.innerHTML = calculator.getDisplay();
    })
})

operator_btn.forEach(ele => {
    ele.addEventListener('click', () => {
        calculator.chooseOperation(ele.textContent);
        displayBox.innerHTML = calculator.getDisplay();
    })
})

delete_btn.addEventListener('click', () => {
    calculator.delete();
    displayBox.innerHTML = calculator.getDisplay();
})

reset_btn.addEventListener('click', () =>{
    calculator.clear();
    displayBox.innerHTML = calculator.getDisplay();
})

equal_btn.addEventListener('click', () => {
    calculator.computeValue();
    displayBox.innerHTML = calculator.getDisplay();
})

