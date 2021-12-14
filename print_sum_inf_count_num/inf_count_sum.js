/*Create a function that takes infinite count of elements, operator
and prints their sum. If there's no operator, then default should be +*/

function printSum(opt, ...num) {
    if(opt === "*") {
        let total = 1;
        num.forEach(function(val) {
            total *= val;
        })
        return total;
    } else if(opt === "-") {
        let total = 0;
        num.forEach(function(val) {
            total -= val;
        })
        return total;
    }else if(opt == "**") {
        let total = 1;
        num.forEach(function(val) {
            (total *= val) * 2;
        }) 
    } else if(typeof opt === "number") {
        let total = 0;
        num.forEach(function(val) {
            total += val;
        })
        return total;
    } else
        return 0;
}

console.log(printSum("*", 1, 2, 3)); // 9
console.log(printSum(1, 2, 3, 4, 5));  // 15
console.log(printSum("-", 1, 2, 3, 6, 7));  // -17
console.log(printSum("**", 2, 3, 2));  // 64