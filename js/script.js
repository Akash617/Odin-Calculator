function add() {
    result = number1 + number2;
    number1 = result;
    resetInput();
}

function sub() {
    result = number1 - number2;
    number1 = result;
    resetInput();
}

function mul() {
    result = number1*number2;
    number1 = result;
    resetInput();
}

function div() {
    resetInput();
}

function resetInput() {
    result, number2 = 0;
    firstOp = false;
    displayMain(number1);
}

function resetAll() {
    number1, number2, result = 0;
    firstOp = true;
}

function displayMain(value) {
    resDisplay.innerHTML = value;
}

function inputNum(value) {
    if (firstOp) {
        number1Tmp = number1;
        number1 = (number1Tmp*10) + value;
        number1Tmp = 0;
        displayMain(number1);
    } else {
        number2Tmp = number2;
        number2 = (number2Tmp*10) + value;
        number2Tmp = 0;
        displayMain(number2);
    }
}

function operation() {

}

function run() {
    
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
    } else {
        resetInput();
    }
}

let number1 = 0;
let number1Tmp = 0;
let number2 = 0;
let number2Tmp = 0;
let result = 0;
let firstOp = true; //Used in case the actual value of num1 is -1 because of the resetInput() function

let addBit, subBit, mulBit, divBit = false;

let resDisplay = document.querySelector(".res-display");

let inNum0 = document.querySelector(".num0");
let inNum1 = document.querySelector(".num1");
let inNum2 = document.querySelector(".num2");
let inNum3 = document.querySelector(".num3");
let inNum4 = document.querySelector(".num4");
let inNum5 = document.querySelector(".num5");
let inNum6 = document.querySelector(".num6");
let inNum7 = document.querySelector(".num7");
let inNum8 = document.querySelector(".num8");
let inNum9 = document.querySelector(".num9");

let opAdd = document.querySelector(".add");
let opSub = document.querySelector(".sub");
let opMul = document.querySelector(".mul");
let opDiv = document.querySelector(".div");
let opEq = document.querySelector(".eq");

let exClear = document.querySelector(".clear");
let exBack = document.querySelector(".back");
let exDot = document.querySelector(".dot");
let exPlusMin = document.querySelector(".plus-min");
let exPercent = document.querySelector(".percent");

inNum0.addEventListener('click', function() {inputNum(0)});
inNum1.addEventListener('click', function() {inputNum(1)});
inNum2.addEventListener('click', function() {inputNum(2)});
inNum3.addEventListener('click', function() {inputNum(3)});
inNum4.addEventListener('click', function() {inputNum(4)});
inNum5.addEventListener('click', function() {inputNum(5)});
inNum6.addEventListener('click', function() {inputNum(6)});
inNum7.addEventListener('click', function() {inputNum(7)});
inNum8.addEventListener('click', function() {inputNum(8)});
inNum9.addEventListener('click', function() {inputNum(9)});

opAdd.addEventListener('click' , function() {
    run();
    addBit = true;
});

opSub.addEventListener('click' , function() {
    run();
    subBit = true;
});

opMul.addEventListener('click' , function() {
    run();
    mulBit = true;
});

opDiv.addEventListener('click' , function() {
    run();
    divBit = true;
});

opEq.addEventListener('click' , run);