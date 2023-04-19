
// LÀM VIỆC VƠI NUMBER 
// TO STRING
//TO FIXED

// let otherNumber = new Number (9)
// let result = 20 /1;
// console.log(isNaN(result));
let age = 20;
let pi =2.17;


console.log(age.toString());
console.log(pi.toFixed(1));

function isNumber(value) {
    if(isNaN(value) == false && typeof(value) === 'number') 
        return true;
    else 
        return false;
}

// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false