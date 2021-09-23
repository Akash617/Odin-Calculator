function add() {
    result = number1 + number2;
}

function sub() {
    result = number1 - number2;
}

function mul() {

}

function div() {

}

function resetInput() {
    number1 = result;
    result, number2 = -1;
}

function resetAll() {
    number1, number2, result = -1;
}

function displayMain(value) {

}

function run() {
    if (number1 != -1 && number2 != -1) {
        if (addBit) {
            add();
            addBit = false;
        } else if (subBit) {
            sub();
            subBit = false;
        } else if (mulBit) {
            mul();
            mulBit = false;
        } else if (divBit) {
            div();
            divBit = false;
        }
    }
}

let number1 = -1;
let number2 = -1;
let result = -1;

let addBit, subBit, mulBit, divBit = false;
let interval = setInterval(run, 10);

