// ES6 Introduction :-----------------------------------------------------------------------------------------
/* 
ECMAScript 2015 was the second major revision to JavaScript.
ECMAScript 2015 is also known as ES6 and ECMAScript 6.
  ES6 Features :--
  - Variable creation using "let" and "const"
  - Template string
  - Arrow functins
  - Rest and Spread Operator
  - Destructuring
  - Array functions: find() ans findIndex()
  - Classes
  - Promises
  and much more
*/

// Variable creation using "let" and "const" :-- 
console.clear();

let num1 = 10;
console.log(num1);              // 10

const num2 = 20;
// num2 = 30                    // not change const 
console.log(num2);

num3 = 30;
console.log(num3);
var num3;                       // 30

num3 = 30;
console.log(num3);
let num3;                       // Cannot access 'num3' before initialization

// Template String // :--
/* 
  It is just a string wich allows embedding expression inside it.
  To create a template string you don't use single or double quotes,
  you use back tick
  The expresssions are embedded by wrapping them inside ${}.

  for example:-
  const mGreetings = `Hello ${name}`
  Here, the expression is a variable.

  const moreGreetings = `Hello ${fullName()}`
  Here, the expression is a function call
*/

// ex - 1
const name = 'sagar';
const mGreetings = `Hello ${name}`;
console.log(mGreetings);                    // Hello sagar


// ex - 2
const firstName = 'sagar'
const lastName = 'yadav'
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
const fName = `Hello ${getFullName(firstName, lastName)}`;
console.log(fName);                         // Hello sagar yadav

//rgba(red, green, blue, alpha)
let red = 200;
let green = 155;
let blue = 100;
let alpha = 0.8;

const rgbaExp = 'rgba(' + red +','+ green+',' + blue +',' + alpha +')';
console.log(rgbaExp)                        // rgba(200,155,100,0.8)

const rgbaExp = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
console.log(rgbaExp);                       // rgba(200, 155, 100, 0.8)


// Arrow Function // :--
/* 
  ES6 gives us a new syntax for defining function using a fat arrow.
  Arrow function bring a lot of clarity & code reduction.

  Syntax:
  function greetings(name) {
    return('welcome' + name);
  }

  const greetings = (name) => {
    return(`Welcome ${name}`)
  }

*/

// ex - 1
function greetings(name) {
  return `welcome ${name}`
}
console.log(greetings('sagar'));                          // welcome sagar

// ex - 2
const mGreetings = (name) => {
  return `welcome ${name}`
}
console.log(mGreetings('sagar'));                         // welcome sagar

// ex -3
const mGreetings = (name, age) => {
  return `welcome ${name} ${age}`
}
console.log(mGreetings('sagar', 21));                     // welcome sagar 21

// ex - 4
const mGreetings = (name, age) => `welcome ${name} ${age}`
console.log(mGreetings('sagar', 21));                     // welcome sagar 21



// Reset and Spread Operator // :--
// ex - 1
const mSum = (num1, num2) => console.log(num1+num2);       // 3
mSum(1, 2, 3, 4, 5);

// ex - 2
const mSum = (...args) => console.log(args);               // (5) [1, 2, 3, 4, 5]
mSum(1, 2, 3, 4, 5);

// ex - 3
const mSum = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  console.log(sum);                                       // 36
}             
mSum(1, 2, 3, 4, 5, 6, 7, 8);

// ex - 4
const mSum = (num1, num2, ...args) => {
  console.log(num1);
  console.log(num2);
  console.log(args);
  let sum = num1 + num2;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  console.log(sum);                                     // 36 
}             
mSum(1, 2, 3, 4, 5, 6, 7, 8);


// Spread Operator // :--
/* 
Spread syntax allows arrays and objects to be expand into:
  - elements in case of array
  - key-value pairs in case of object.
*/

// ex - 1
let mArr1 = [1, 2, 3, 4, 5];
console.log([...mArr1]);          // (5) [1, 2, 3, 4, 5]

// ex - 2
let mArr1 = [1, 2, 3, 4, 5];
let mArr2 = [...mArr1];
console.log([...mArr2]);          // (5) [1, 2, 3, 4, 5]

// ex - 3
let mArr1 = [1, 2, 3, 4, 5];
let mArr2 = mArr1;
mArr1.push(6);

console.log([...mArr1]);          // (6) [1, 2, 3, 4, 5, 6]
console.log([...mArr2]);          // (6) [1, 2, 3, 4, 5, 6]
 
// ex - 4
let mArr1 = [1, 2, 3, 4, 5];
let mArr2 = [...mArr1];
mArr1.push(6);

console.log([...mArr1]);          // (6) [1, 2, 3, 4, 5, 6]
console.log([...mArr2]);          // (5) [1, 2, 3, 4, 5]

// ex - 5
let mArr1 = [1, 2, 3, 4, 5];
let mArr2 = [6, 7, 8];

let mArr3 = mArr1.concat(mArr2);
console.log(mArr3);               // (8) [1, 2, 3, 4, 5, 6, 7, 8]

// ex - 6
let mArr1 = [1, 2, 3, 4, 5];
let mArr2 = [6, 7, 8];
 
let mArr3 = [...mArr1, ...mArr2];
console.log(mArr3);               // (8) [1, 2, 3, 4, 5, 6, 7, 8]

// ex - 7
let mArr1 = [1, 2, 3, 4, 5];
let mArr2 = [6, 7, 8];
 
let mArr3 = [...mArr2, ...mArr1];
console.log(mArr3);               // (8) [6, 7, 8, 1, 2, 3, 4, 5]

// ex - 8
let mArr1 = [1, 2, 3, 4, 5];
let mArr2 = [6, 7, 8];
 
let mArr3 = [0, ...mArr2, ...mArr1];
console.log(mArr3);               // (9) [0, 6, 7, 8, 1, 2, 3, 4, 5]