/* console.log('hello');
alert('hey i am sagar'); */

/* // variables

var b = 'sagar';
console.log(b);

var someNumber = 24;
console.log(someNumber);
 */


// var age = prompt("what is your age")

// document.getElementById('someText').innerHTML = age;


// number in java script
// var num = 10;

/* 


// functions
function fun() {
    // alert("this is a function")
    console.log("this is a function");
}

fun();

function greetings(){
    var name = prompt("what is your name");
    // string concatenation
    var result = 'hello ' + name;
    console.log(result);
}

// greetings();
 */



// how to aruguments work in function
/* 
function sumNumber(num1, num2) {
    console.log(num1 + num2);
}

// sumNumber(10, 10);
sumNumber('hello', ' kety')
 */



// while
/* var num = 0;
while (num < 100) {
    num += 1;
    console.log(num);
} */

// for loop
/* for (let index = 0; index <= 100; index++) {
    console.log(index);
} */


// data types
let age = 18; // number
let yourName = 'sagar' // string
let name = {first: 'sagar', last: 'Doe'} //object
let truth = false; //boolean
let random;  // undefined
let groceries = ['apple', 'banana', 'oranges']; //array
let nothing = null; //value null

// string common method
let fruit = 'banana';
let morefruits = 'banana\napple'        //new line
console.log(morefruits);                    

console.log(morefruits.length);
console.log(morefruits.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(morefruits.replace('ban', '123'));
console.log(morefruits.toUpperCase());
console.log(morefruits.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(''));       // split by characters

let fruits = 'banana,apple,orange,blackberry'
console.log(fruits.split(','));    // split by a comma

// Arrays in javascript
let fruitsss = ['banana', 'apple', 'orange', 'pineapple'];
let fruitsss1 = new Array('banana', 'apple', 'orange', 'pineapple');

console.log(fruitsss[2]);
fruitsss[0] = 'pear';
console.log(fruitsss);

for (let i = 0; i < fruitsss.length; i++) {
    console.log(fruitsss[i]);   
}

console.log('to string', fruitsss.toString());
console.log(fruitsss.join(' * '));                      
console.log(fruitsss.pop(), fruitsss);                  // remove last item
console.log(fruitsss.push('black-berries'), fruits);    // append

console.log(fruitsss[4]);                               // undefinded
fruitsss[4] = 'new fruits';
console.log(fruitsss);

fruitsss.shift();                                       // remove first element
console.log(fruitsss);

fruitsss.unshift('kiwi');                               // add first to add an array
console.log(fruitsss);

let vegetables = ['broccoli', 'tomato', 'potato'];
let allGroceries = fruitsss.concat(vegetables);         // combine arrays
console.log(allGroceries);

console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 10, 2, 5, 13, 27, 98, 0, 1, 24];
console.log(someNumbers.sort(function(a, b) {return a-b}));         // assending order
console.log(someNumbers.sort(function(a, b) {return b-a}));         // desensing order

let emptyArrray = new Array();
for(let num = 0; num <= 10; num++) {
    emptyArrray.push(num);
}
console.log(emptyArrray);


// object in javascript
// dictionaries in python
// let student = {first: 'sagar', last: 'kumar'};

let student = {
    first: 'sagar',
    last: 'kumar',
    age: 19,
    heifgt: 170,
    studentInfo: function() {
        return this.first + '\n' + this.last;
    }

};
// console.log(student.first);
// console.log(student.last);
// student.first = 'kety';
// console.log(student.first);
// student.age++;
// console.log(student.age++);

console.log(student.studentInfo());

// if else
var age1 = prompt('what is your age');

if ((age1 >= 18) && (age1 <= 35)) {
    status = 'target demo';
    console.log(status);
}
else{
    status = 'not my audiance';
    console.log(status);
}

// switch statement
// diffrence between weekday or weekend

switch (6) {
    case 0:
        text = 'weekend';
    case 5:
        text = 'weekend';
    case 6:
        text = 'weekend';
    default:
        text = 'weekday';
}

console.log(text);


// float
var num1 = 66.086666;
console.log(num1.toFixed())
console.log(num1.toFixed(2))