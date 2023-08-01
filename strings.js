// Concatenation of String

var nameFirst = 'AAkil';
var nameLast = 'Raiyan';

var fullName = nameFirst + nameLast;
console.log(fullName);
var fullName = nameFirst + " " +nameLast;
console.log(fullName);


// Type Conversion

var weight = '85.5';
console.log(weight);
var height = '180';
console.log(height);

var intHeight = parseInt(height);
console.log(intHeight);
var floatWeight = parseFloat(weight);
console.log(floatWeight);


// toFix digits after the (.)

var a = 0.1;
var b = 0.2;
var total = a + b;
console.log(total);
var fixedTotal = total.toFixed(1);
console.log(fixedTotal);
var fixedTotal = parseFloat(fixedTotal);
console.log(fixedTotal);

// Remainder (%)

var x = 102;
var y = 20;

var divResult = x / y;
var remainResult = x % y;
console.log(divResult);
console.log(remainResult);