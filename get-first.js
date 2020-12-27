'use strict';

/*
 * Create a `getFirst` function that takes an array or a string
 * and return the first element
 *
 * @notions Data-Structures, Get
 * @next get-last
 */

// Your code :
const getFirst = (someData) => someData[0]; // Just showing the arrow functions but they are different in scope comparing arrow functions to normal function declaration

//* Begin of tests
const assert = require('assert');

assert.strictEqual(getFirst([2, 42]), 2);
assert.strictEqual(getFirst(['pouet', 4, true]), 'pouet');
assert.strictEqual(getFirst([getFirst]), getFirst);
assert.strictEqual(getFirst('salut'), 's');
assert.strictEqual(getFirst([]), undefined);
// End of tests */
