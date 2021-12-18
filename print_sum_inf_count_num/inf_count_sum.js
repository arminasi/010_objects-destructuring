/*Create a function that takes infinite count of elements, operator
and prints their sum. If there's no operator, then default should be +*/

"use strict"

function printSum(opt, ...num) {
    let total = 0;
    if(opt === "*") {
        total = 1;
        num.forEach(function(val) {
            total *= val;
        })
        return total;
    } else if(opt === "-") {
        total = num.reduce(function(acc, elem) {
            return acc - elem;
        })
        return total;
    } else if(opt === "**") {
        total = num.reduce(function(acc, elem) {
            return acc ** elem;
        })
    } else
        total = num.reduce(function(acc, elem) {
            return acc + elem;
        }, 1);
        return total;
}

console.log(printSum("*", 1, 2, 3)); // 9
console.log(printSum(1, 2, 3, 4, 5));  // 15
console.log(printSum("-", 1, 2, 3, 6, 7));  // -17
console.log(printSum("**", 2, 3, 2));  // 64