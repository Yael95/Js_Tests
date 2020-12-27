'use strict';

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 * @next total
 */

function jadenCase(str) {
   const jdCaseArr = str.split(' ');

   for (let i = 0; i < jdCaseArr.length; i++) {
      jdCaseArr[i] =
         jdCaseArr[i].charAt(0).toUpperCase() + jdCaseArr[i].substr(1); // basically I just get first character upper case it plus substring skipping first letter
   }
   return jdCaseArr.join(' '); // joining back my string in the return statement
}
console.log(jadenCase('How are you?'));
// You must write your own tests
//throw Error('No tests !');
