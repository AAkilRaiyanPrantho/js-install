// Problem 1 - Harry's Mom

var givenTaka = 5000;
console.log(givenTaka);

var costTaka = 7200;
console.log(costTaka);

var returnTaka = givenTaka - costTaka;
console.log(returnTaka);


// Problem 2 - Average Result Marks

var mathematics = 75.25;
console.log(mathematics);
var biology = 65;
console.log(biology);
var chemistry = 80;
console.log(chemistry);
var physics = 35.45;
console.log(physics);
var bangla = 99.50;
console.log(bangla);

var totalPaise = mathematics + biology + chemistry + physics + bangla;
console.log(totalPaise);
var avgPaise = totalPaise / 5;
console.log(avgPaise);
var fixedPaise = avgPaise.toFixed(2);
console.log(fixedPaise);
fixedPaise = parseFloat(fixedPaise);
console.log(fixedPaise);

// Problem 3: Line Concatenation

var line1 = 'I am going to be'
var line2 = 'an awesome web developer'
var fullLine = line1 + ' ' + line2
console.log(fullLine);

// Problem 4: Remainder Problem

var givenNumber = 119
var remainderResult = givenNumber % 5;
console.log(remainderResult);
var remainderResult = givenNumber % 4;
console.log(remainderResult);
