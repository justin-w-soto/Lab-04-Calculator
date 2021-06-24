

// QUNIT TEST
const test = QUnit.test;

// ADD
import { add } from '../calculations.js';
test('time to test a function', (expect) => {
    const expected = 5;
    const actual = add(2, 3); 
    expect.equal(actual, expected);
});

// SUBTRACT
import { subtract } from '../calculations.js';
test('time to test a function', (expect) => {
    const expected = 1;
    const actual = subtract(3, 2); 
    expect.equal(actual, expected);
});

// MULTIPLY
import { multiply} from '../calculations.js';
test('time to test a function', (expect) => {
    const expected = 6;
    const actual = multiply(3, 2); 
    expect.equal(actual, expected);
});

// DIVIDE
import { divide } from '../calculations.js';
test('time to test a function', (expect) => {
    const expected = 3;
    const actual = divide(6, 2);
    expect.equal(actual, expected);
});

// MODULO
import { modulo } from '../calculations.js';
test('time to test a function', (expect) => {
    const expected = 1;
    const actual = modulo(7, 2); 
    expect.equal(actual, expected);
});

//INTEGER DIVISION
import { integer } from '../calculations.js';
test('time to test a function', (expect) => {
    const expected = 3;
    const actual = integer(10, 3); 
    expect.equal(actual, expected);
});


