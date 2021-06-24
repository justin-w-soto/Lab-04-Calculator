// import functions
// reference needed DOM elements
// #add-num1, #add-num2, #add-answer, #add-btn
// set event listeners 
// get user input(s)
// do any needed work with the value(s)
// update DOM to reflect new value(s)
// add event listener to button click

//ADD
import { add } from './calculations.js';
const addInput1 = document.getElementById('add-num1');
const addInput2 = document.getElementById('add-num2');
const addAnswerSpan = document.getElementById('add-answer');
const addBtn = document.getElementById('add-btn');


addBtn.addEventListener('click', () => {
    console.log(addInput1.value);
    const add1 = Number(addInput1.value);
    const add2 = Number(addInput2.value);
    const answer = add(add1, add2);
    console.log(answer);
    addAnswerSpan.textContent = answer;
});


// SUBTRACT
import { subtract } from './calculations.js';
const subtractInput1 = document.getElementById('subtract-num1');
const subtractInput2 = document.getElementById('subtract-num2');
const subtractAnswerSpan = document.getElementById('subtract-answer');
const subtractBtn = document.getElementById('subtract-btn');

subtractBtn.addEventListener('click', () => {
    console.log(subtractInput1.value);
    const subtract1 = Number(subtractInput1.value);
    const subtract2 = Number(subtractInput2.value);
    const answer = subtract(subtract1, subtract2);
    console.log(answer);
    subtractAnswerSpan.textContent = answer;
});

// MULTIPLY
import { multiply } from './calculations.js';
const multiplyInput1 = document.getElementById('multiply-num1');
const multiplyInput2 = document.getElementById('multiply-num2');
const multiplyAnswerSpan = document.getElementById('multiply-answer');
const multiplyBtn = document.getElementById('multiply-btn');

multiplyBtn.addEventListener('click', () => {
    console.log(multiplyInput1.value);
    const multiply1 = Number(multiplyInput1.value);
    const multiply2 = Number(multiplyInput2.value);
    const answer = multiply(multiply1, multiply2);
    console.log(answer);
    multiplyAnswerSpan.textContent = answer;
});

// DIVIDE
import { divide } from './calculations.js';
const divideInput1 = document.getElementById('divide-num1');
const divideInput2 = document.getElementById('divide-num2');
const divideAnswerSpan = document.getElementById('divide-answer');
const divideBtn = document.getElementById('divide-btn');

divideBtn.addEventListener('click', () => {
    console.log(divideInput1.value);
    const divide1 = Number(divideInput1.value);
    const divide2 = Number(divideInput2.value);
    const answer = divide(divide1, divide2);
    console.log(answer);
    divideAnswerSpan.textContent = answer;
});

// MODULO
import { modulo } from './calculations.js';
const moduloInput1 = document.getElementById('modulo-num1');
const moduloInput2 = document.getElementById('modulo-num2');
const moduloAnswerSpan = document.getElementById('modulo-answer');
const moduloBtn = document.getElementById('modulo-btn');

moduloBtn.addEventListener('click', () => {
    console.log(moduloInput1.value);
    const modulo1 = Number(moduloInput1.value);
    const modulo2 = Number(moduloInput2.value);
    const answer = modulo(modulo1, modulo2);
    console.log(answer);
    moduloAnswerSpan.textContent = answer;
});

//integer division
import { integer } from './calculations.js';
const integerInput1 = document.getElementById('integerdiv-num1');
const integerInput2 = document.getElementById('integerdiv-num2');
const integerAnswerSpan = document.getElementById('integerdiv-answer');
const integerBtn = document.getElementById('integerdiv-btn');

integerBtn.addEventListener('click', () => {
    console.log(integerInput1.value);
    const integer1 = Number(integerInput1.value);
    const integer2 = Number(integerInput2.value);
    const answer = integer(integer1, integer2);
    console.log(answer);
    integerAnswerSpan.textContent = answer;
});
//pythagorean theorem