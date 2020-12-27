'use strict';

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @next keep
 */
function cutFirst(str) {
   return str.substring(0, str.length - 2);
}
function cutLast(str) {
   return str.substring(2, str.length);
}
function cutFirstLast(str) {
   return cutFirst(cutLast(str));
}
console.log(cutFirst('123456'));
console.log(cutLast('123456'));
console.log(cutFirstLast('123456'));
// You must write your own tests
//throw Error('No tests !');
