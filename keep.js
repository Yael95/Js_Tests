'use strict';

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 * @next capitalize
 */
function keepFirst(str) {
   return str.substr(0, 2);
}
function keepLast(str) {
   return str.substr(-2);
}
function keepFirstLast(str) {
   return str.substring(2, 4); // keeping 2 characters from third character? third character included?
} // I don't know the exact interpretation but if I understood right meaning only keeping 3rd and 4th character

// You must write your own tests
//throw Error('No tests !');
