// console.clear();

// print numbers
var firstNum = 10;
console.log(firstNum);

var secondNum = 15;
console.log(secondNum);

// Camel case (Recommended for JS)
var firstNum;

// Pascal case
var FirstNum;

// Snake case
var first_num;

// Rules for naming JS variables  //  :---------------------------------------------------------------------------------------------
// - Name can contain letters, digits, _ and $
var mySubject1, math$

// - Name cannot start with a digit
var maths;

// - Name can start with an _ or $
var _subjectmarks, $rankInClass;

// - Names are case sentitive
var x, X;

// - Names cannnot be reserved keywords
var varName;


// javaScipt Number  //  :---------------------------------------------------------------------------------------------------------
var num1 = 10 				// Integer
var num2 = 10.9				// Decimal Number

console.log(typeof(num1))   // number
console.log(typeof(num2))	// number

//Addition
var num3 = 15;
var sum = num3 + num1 + num2;
console.log(sum);			// 35.9

//Substraction
var diff = num3 - num1;
console.log(diff);			// 5

//Multiplication
var mul = num3 * num1;
console.log(mul);			// 150

// Division
var div = num3 / num1;
console.log(div);			// 1.5

var divByZero = num3 / 0;
console.log(divByZero);				// Infinity
console.log(typeof(divByZero));		// number

var mulByString = num3 * 'A';
console.log(mulByString);			// NaN
console.log(typeof(mulByString));	// number

// JS Number Function // :-------------------------------------------------------------------------------------------------------
var num1 = 10;
var num2 = 20.3;

// toString() number as input and returns a string
console.log(num1.toString())		// 10
console.log(num2.toString())		// 20.3

var strNum1 = "10";
var strNum2 = "11.5";
var strNum3 = "ABC";

// parseInt() string numeral as input and returns a number
console.log(parseInt(strNum1));		// 10
console.log(parseInt(strNum2));		// 11
console.log(parseInt(strNum3));		// NaN

// parseFloat() string numeral as an input and returns a foating
console.log(parseFloat(strNum2))	// 11.5
console.log(parseFloat(strNum3))	// NaN

// toFixed() takes floating number and rounds it off to given position
var strFloat = 87.987653;				
console.log(strFloat.toFixed())		// 88
console.log(strFloat.toFixed(2))	// 87.99
console.log(strFloat.toFixed(5))	// 87.98765
console.log(strFloat.toFixed(10))	// 87.9876530000



// JavaScript String    // :-----------------------------------------------------------------------------------------------------
var myFirstString = "I love JavaScript"
console.log(typeof(myFirstString))								// string

var mySecondString = 'We will learn JavaScript together'
console.log(typeof(mySecondString))								// string

//What if my string contains a double quote
var doubleQuotesString = "This is a \"JavaScript\" string"
console.log(doubleQuotesString)									// This is a "JavaScript" string

// What if my string contains a single quote
var singleQuotesString = 'This is a \'JavaScript\' string'
console.log(singleQuotesString)									// This is a 'JavaScript' string

var doubleQuotesString2 = "This is a 'JavaScript' string"
var singleQuotesString2 = 'This is a "JavaScript" string'


// JavaScript Strings Functions - Part 1    //  :--------------------------------------------------------------------------------------
var myFirstString = "This is a string for Javascript string functions, Javascript"

// Returns the length of the string
console.log(myFirstString.length)									// 60

// Find index of a string inside another string
console.log(myFirstString.indexOf('Javascript'))					// 21
console.log(myFirstString.indexOf('This'))							// 0

// Find LAST index of a string inside another string
console.log(myFirstString.lastIndexOf('Javascript'))				// 50
console.log(myFirstString.lastIndexOf('This'))						// 0

// Get a part of our string slice(start, end)
console.log(myFirstString.slice(0, 4))								// This
console.log(myFirstString.slice(21, 31))							// Javascript
console.log(myFirstString.slice(-10))								// Javascript
console.log(myFirstString.slice(5))									// is a string for Javascript string functions, Javascript

// Get sub string function - substr(startPos, length)
console.log(myFirstString.substr(0, 4))								// This
console.log(myFirstString.substr(21, 10))							// Javascript
console.log(myFirstString.substr(21))								// Javascript string functions, Javascript


// JavaScript Strings Functions - Part 2   //   :----------------------------------------------------------------------------------------
var exampleString = "This is Javascript tutorial"

// toUpperCase() - It converts our string -> uppercase characters
console.log(exampleString.toUpperCase())									// THIS IS JAVASCRIPT TUTORIAL

// toLowerCase() - It converts our string -> lowercase characters
console.log(exampleString.toLowerCase())									// this is javascript tutorial

// concat() - It merges two or more strings
var firstName = "Javascript"
var lastName = "Playground"
console.log(exampleString.concat(firstName))								// This is Javascript tutorialJavascript
console.log(exampleString.concat(' ', firstName, ' ', lastName))			// This is Javascript tutorial Javascript Playground

// We can also use '+' to concat two or more strings
console.log(firstName + ' ' + lastName + ' ' + exampleString)				// Javascript Playground This is Javascript tutorial

// trim() - It removes extra spaces
var extraSpaceString = '        mystring     '
console.log(extraSpaceString.trim())										// mystring

var extraSpaceStringExample2 = '      my string    '
console.log(extraSpaceStringExample2.trim())								// my string

// charAt() -> this take a position as an arg and returns the character at that position
var charAtExampleString = 'This is my test string'
console.log(charAtExampleString.charAt(5))									// i
console.log(charAtExampleString.charAt(11))									// t					


// split() splits our string on the basis of the arguments passed

var sampleString = "This is my sample string"
console.log(sampleString.split(' '))										// ['This', 'is', 'my', 'sample', 'string']

var sampleString2 = "This,is,my,sample,string"
console.log(sampleString2.split(','))										// ['This', 'is', 'my', 'sample', 'string']

var sampleString3 = "This is awesome"
console.log(sampleString3.split())											// ['This is awesome']


// NULL and UNDEFINED   //   :-----------------------------------------------------------------------------------------------------
var mVar //mvar holds no value
console.log(mVar)									// undefined

mVar = null //mVar holds the value null
console.log(mVar)									// null


// JavaScript - If-else   //   :------------------------------------------------------------------------------------------------------
if (5 > 7) {
	console.log('5 > 7')
} else if(7 > 8){ 
	console.log('7 > 8')
} else {
	console.log('Nothing')							// Nothing
}

// JavaScript - Switch   //   :------------------------------------------------------------------------------------------------------
var currentDay = 'Thu'

if(currentDay === 'Mon') {
	console.log('Timings: 10:00-06:00')
} else if(currentDay === 'Tue') {
	console.log('Timings: 09:00-05:00')
} else if(currentDay === 'Wed') {
	console.log('Timings: 09:30-05:30')
} else if(currentDay === 'Thu') {
	console.log('Timings: 10:15-06:15')
} else if(currentDay === 'Fri') {
	console.log('Timings: 09:05-05:05')
} else if(currentDay === 'Sat') {
	console.log('Timings: 09:00-05:00')
} else if(currentDay === 'Sun') {
	console.log('Timings: 09:00-01:00')				// Timings: 10:15-06:15
}

switch(currentDay) {
	case 'Mon':
	  console.log('Timings: 10:00-06:00')
	  break;
	case 'Tue':
	  console.log('Timings: 09:00-05:00')
		break;
	case 'Wed':
	console.log('Timings: 09:30-05:30')
		break;
	case 'Thu':
	console.log('Timings: 10:15-06:15')
		break;
	case 'Fri':
	console.log('Timings: 09:05-05:05')
		break;
	case 'Sat':
	console.log('Timings: 09:00-05:00')
		break;
	case 'Sun':
	console.log('Timings: 09:00-01:00')
		break;
	default:
	console.log('Timings: 09:00-01:00')			// Timings: 10:15-06:15
}


// Arithmetic Operators  //     :-----------------------------------------------------------------------------------------------------
var num1 = 10;
var num2 = 15;
var num3 = 20;

//Addition
console.log(num1 + num2)						// 25
console.log(num1 + num2 + num3)					// 45

//Subtraction
console.log(num2 - num1)						// 5
console.log(num3 - num2 - num1)					// -5

//Multiplication
console.log(num1 * num2)						// 15

//Division
console.log(num2/num1)							// 1.5

//Modulus
console.log(num2 % num1)						// 5

//Increment - Post and Pre
console.log(num1++)				// 10
console.log(num1++)				// 11
console.log(num1)				// 12

console.log(++num1)				// 13
console.log(num1)				// 13

//Decrement - Post and Pre
console.log(num1--)				// 13
console.log(num1)				// 12

console.log(--num1)				// 11
console.log(num1)				// 11


// Assignment Operators   //  :--------------------------------------------------------------------------------------------------
var num1 = 15;
var num2 = 30;

// =
num1 = 20;

// +=
num1 += 10; 	// num1 = num1 + 10
num1 += num2 	// num1 = num1 + num2
console.log(num1)								// 60

// -=
num1 -= 10; 	//num1 = num1 - 10
num1 -= num2 	//num1 = num1 - num2
console.log(num1)								// 20

// *=
num1 *= 20		 //num1 = num1 * 20
console.log(num1)								// 400

// /=
num1 /= 10 		//num1 = num1 / 10
console.log(num1)								// 40

// %=
num1 %= 10 		//num1 = num1 % 10
console.log(num1)								// 0



// Comparison, Logical and Ternary Operator    //   :--------------------------------------------------------------------------------
if(5 == '5') {console.log(true)}									// true
if(5 === 5) {console.log(true)} else {console.log(false)}			// true
if(5 != '5') {console.log(true)} else {console.log(false)}			// false
if(5 !== '5') {console.log(true)} else {console.log(false)}			// true
if(15 < 15) {console.log(true)} else {console.log(false)}			// false
if(15 <= 15 ) {console.log(true)} else {console.log(false)}			// true
if(15 > 15) {console.log(true)} else {console.log(false)}			// flase
if(15 >= 15) {console.log(true)} else {console.log(false)}			// true

//Logical Operators &&, ||, !
if(5 > 10 && 10 > 15) {console.log(true)} else {console.log(false)}		// false
console.log(5 < 10 || 10 < 15)											// true
console.log(!(5 < 10))													// false

//Ternary Operator (expression) ? a : b
20 < 3 ? console.log(true) : console.log(false)							// false


// Implicit Type Coercion   //   :----------------------------------------------------------------------------------------------------
var mStr = 'Hello'
var mNum = 5
var mSum = mStr + mNum												

console.log(mSum);													// "Hello5"
console.log(typeof(mSum));											// "string"

console.log('hola' + true);											// "holatrue"
console.log(typeof('hola' + true))									// "string"

console.log(null + 'hola');											// nullhola
console.log(typeof(null + 'hola'))									// string

console.log(50 + 'hola');											// 50hola
console.log(typeof(50 + 'hola'))									// string


if('Rocket' + 10) {
	console.log('True')
} else {
	console.log('False')
}																	// True


// JavaScript - Explicit Type Coercion   //   :--------------------------------------------------------------------------------------
var mNum = 15
console.log(typeof(String(mNum)))				// string
console.log(typeof(String(true)))				// string
console.log(typeof(String(-98.10)))				// string
console.log(typeof(String(null)))				// string
console.log(typeof(String(undefined)))			// string

// To Number
console.log(typeof(Number('2')))								// number
console.log(Number(true), typeof(Number(true)))					// 1 'number'
console.log(Number(false), typeof(Number(true)))				// 0 'number'
console.log(Number('-90.234'), typeof(Number('-90.234')))		// -90.234 'number'
console.log(Number('apple'), typeof(Number('apple')))			// NaN 'number'

//To Boolean
console.log(Boolean(1), typeof(Boolean(1)))							// true 'boolean'
console.log(Boolean(0), typeof(Boolean(0)))							// false 'boolean'
console.log(Boolean('Apple'), typeof(Boolean('Apple')))				// true 'boolean'
console.log(Boolean(null), typeof(Boolean(null)))					// false 'boolean'
console.log(Boolean(undefined), typeof(Boolean(undefined)))			// false 'boolean'
console.log(Boolean(''), typeof(Boolean('')))						// false 'boolean'



// JavaScript - Objects    //   :--------------------------------------------------------------------------------------------------------
var mCars = {
	"p1" : "350 kmph",
	"gallardo" : '320 kmph',
	"veyron" : '409 kmph',
	"agera" : '429 kmph'
}

console.log(mCars)						// {p1: '350 kmph', gallardo: '320 kmph', veyron: '409 kmph', agera: '429 kmph'}
console.log(typeof(mCars))          	// object


var mAgera = {
	name: "Agera",
	manufacturer: {
		name: "Koenigsegg",
		loaction: "Sweden"
	},
	topSpeed: 429,
	color: "Black",
	spoilers: false,
	applyBrakes: function() {
		setTimeout(function() {
			console.log('Car Stopped');
		}, 5000)
	}
}

console.log(mAgera.name)							// Agera
console.log(mAgera.topSpeed)						
console.log(mAgera.manufacturer)					
console.log(mAgera.manufacturer.name)				
console.log(mAgera.applyBrakes())					
console.log(mAgera.applyBrakes)



// JavaScript - Arrays Part 1   //  :-------------------------------------------------------------------------------------------------------
var mFriends = ['Shaw', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina']
console.log(mFriends)														// ['Shaw', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina']
console.log(typeof(mFriends))												// "object"					

console.log(mFriends[2])													// "Vab"
console.log(mFriends[0])													// "Shaw"
console.log(mFriends[4])													// "Jacob"

// Update a value
mFriends[0] = 'Shawn'														
console.log(mFriends)														// ['Shawn', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina']

// Add more items
mFriends[6] = 'Alan'
console.log(mFriends)														// ['Shawn', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina', Alan]

// mFriends[10] = 'Tiffany'
// console.log(mFriends)													// ['Shawn', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina', Alan, undefined, undefined, undefined, 'Tiffany]'

mFriends[mFriends.length] = 'Rob'
console.log(mFriends)														// ['Shawn', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina', 'Alan', 'Tiffany', 'Rob']

mFriends.push('Jack')
console.log(mFriends)														// ['Shawn', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina', 'Alan', 'Tiffany', 'Rob', 'Jack']

// Delete a value
var mName = mFriends.pop()													
console.log(mName)															// "Jack"
console.log(mFriends)														// ['Shawn', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina', 'Alan', 'Tiffany', 'Rob']
var mName = mFriends.pop()													// "Rob"
console.log(mName)															// ['Shawn', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina', 'Alan', 'Tiffany]
console.log(mFriends)
var mName = mFriends.pop()
console.log(mName)
console.log(mFriends)
var mName = mFriends.pop()
console.log(mName)
console.log(mFriends)



// JavaScript - Arrays Part 2   //   :-------------------------------------------------------------------------------------------------
var mFriends = ['Shaw', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina']
mFriends.splice(3, 0, 'Donna', 'Rachel')

// 1st tells where to start
// 2nd tells how many items to be deleted
// 3rd and 4th and so on tells what items to  be added
console.log(mFriends)													// ["Shaw", "Clara","Vab", "Donna", "Rachel", "Kun", "Jacob", "Dina"]

mFriends.splice(0, 0, 'Harvey')
console.log(mFriends)													// ["Harvey", "Shaw", "Clara", "Vab", "Donna", "Rachel", "Kun", "Jacob", "Dina"]

// Delete item at specific position
mFriends.splice(2, 1)
console.log(mFriends)													// ["Harvey", "Shaw", "Vab", "Donna", "Rachel", "Kun", "Jacob", "Dina"]

mFriends.splice(0, 2)
console.log(mFriends)													// ["Vab", "Donna", "Rachel", "Kun", "Jacob", "Dina"]

// Concatenation
var mOfficeFriends = ['Nina', 'Aron', 'Katie', 'Vic', 'Paula']			
var mAllFriends = mFriends.concat(mOfficeFriends)

console.log('====================================')						// "===================================="
console.log(mFriends)													// ["Vab", "Donna", "Rachel", "Kun", "Jacob", "Dina"]
console.log(mOfficeFriends)												// ["Nina", "Aron", "Katie", "Vic", "Paula"]
console.log(mAllFriends)												// ["Vab", "Donna", "Rachel", "Kun", "Jacob", "Dina", "Nina", "Aron", "Katie", "Vic", "Paula"]

//Sorting Ascending and Descending

mAllFriends.sort()
console.log(mAllFriends)												/

mAllFriends.reverse()
console.log(mAllFriends)



// While Loop    //   :-----------------------------------------------------------------------------------------------------------------
// while(condition) {
// 	// block of code
// }

var mValue = 0
while(mValue < 50) {
	mValue++
}

console.log(mValue);



// JavaScript - For Loop   //  :-------------------------------------------------------------------------------------------------------------
var mList = [1, 2, 3, 4, 5]
// var pos;
// for(pos = 0; pos < mList.length; pos++) {
// 	console.log('Position => ' + pos + ' Value => ' + mList[pos])
// }


// Break Keyword

// var pos;
// for(pos = 0; pos < mList.length; pos++) {
// 	if(pos >= 3) break
// 	console.log('Position => ' + pos + ' Value => ' + mList[pos])
// }

// Continue Keyword

var pos;
for(pos = 0; pos < mList.length; pos++) {
	if(pos % 2 === 0) continue
	console.log('Position => ' + pos + ' Value => ' + mList[pos])
}



// Functions in JavaScript  //  :----------------------------------------------------------------------------------------------------
// function mSum() {
// 	var num1 = 10;
// 	var num2 = 20;
// 	var sum = num1 + num2;
// 	console.log(sum)
// }

// mSum()

function mSum() {
	var num1 = 40;
	var num2 = 20;
	var sum = num1 + num2;
	
	return sum
	console.log('Im a print statement')
}

var totalSum = 100 + mSum()
console.log(totalSum);


// Function Arguments   //  :------------------------------------------------------------------------------------------------------------
// function greetings(personName) {
// 	console.log('Welcome ' + personName);
// }

// greetings('Qaifi');
// greetings('Nate')
// greetings('Vijay')

function totalSum(num1, num2, num3) {
	console.log('num1 => ' + num1);
	console.log('num2 => ' + num2);
	console.log('num3 => ' + num3);
	if(num3 !== undefined) {	
		console.log(num1 + num2 + num3)	
	} else {
		console.log(num1 + num2);
	}
}

totalSum(2, 7);
// totalSum(22, 38, 33, 50, 43, 58);
// totalSum();


// Variable Hosting // :-----------------------------------------------------------------------------------------------------------------

// Hosting :- This mwchanism where variable and function can be used before declaring them is called Hoisting in jabaScript

console.log(num1);						// undefined
num1 = 10;
console.log(num1);                      // 10
var num1;


console.log(str1);						// undefined
str1 = "Demo String";
console.log(str1);						// "Demo String"
var str1;


// --> The Variable and Function declearartion are moved to the top of their scope before code execution
// --> JavaScript Has to steps in executing a particular script
// step 1:- Creation 
// step 2:- Execution


// Function Hosting	//  :------------------------------------------------------------------------------------------------------------------------------

sum(30, 32);

function sum(num1, num2) {
	console.log(num1 + num2);		// 62
}

sum(90, 8);							// 98


// Introduction To Dom // :--------------------------------------------------------------------------------------------------------------------
// --> When a web page is loaded, the browser creates Docoment Object model of the page. It is the tree representation of the html docoment.
// This DOM tree can be modified with the help of javaScript

// JavaScript Can add new HTML element attributes.
// JAvaScript can change any HTML Elements attributes in the page
// JavaScript can change all the css styles in the page
// JavaScript can remove exiting HTML Elements and attributes
// JavaScript can add and listen to HTML events like onClick, onScroll etc.

// document.getElementById();
// document.getElementByClassName();
// document.getElementByTagName();


// Query Sellectors  //   :-------------------------------------------------------------------------------------------------------------------------------
// --> Query Selectors allows you to use CSS selectors HTML elements. It is the new way in javaScript to select HTML elements.
// there are two such selectors:
// --> QuerySelector()
// --> QuerySelectorAll()


// document.querySelectorAll();
// document.querySelector();


// Add Remove Classes Using JavaScript   //   : ---------------------------------------------------------------------------------------------------------------------
// Syntax :- selectedElement.classList.add('MyClass');
// selectedElement.classList.add('show');


// From Event // :----------------------------------------------------------------------------------------------------------------------------------
// username.addEventListener('change', function() {
	// console.log('value changed')
// });


// Browser Object Model //  :--------------------------------------------------------------------------------------------------------
// --> BOM reprsets the current browser window. The Main purpose Of Browser Object Model is to mainipulate the properties and methods 
// which are associated with the browser window.
// Window --> document, history, location, screen, navigator

// window.innerWidth
// window.innerHeight

// Window object :--
// - setTimeout()
// - setInterval()
// - alert()
// - confirm()
// - prompt()
// - open()
// - close()

// Screen object :--
// --> The JavaScript screen objects holds information of the browser screen.
// it can be used to display screen width, height, availableWidth, availableHeight, colorDepth, pixleDepth etc.

// Navigator object :--
// --> The navigator object contains information about the browser where your application is running.
// - navigator, - navigator.userAgent, - navigator.onLine

// History Object :--
// --> The JavaScript history object represents an array of URLs visited by the user.
// - back() 		- it loads the previous page from the browser history
// - forward()		- it loads the next page from the browser history
// window.history

// Location Object :--
// --> The Location Object can be used to get the details of the current page address. 
// it can also redirect the browser to a new page in the same browser tab.
// window.location
// window.location.href
// window.location.hostname
// window.location.pathname
// window.location.search
// window.location.assign('https://www.google.com')


// Regular Expressions // :---------------------------------------------------------------------------------------------------
/* --> A regular is an object that describe a pattern for characters. It allows us to search for specific patterns
of text using the defined patterns.

for example:-
- to check whether a given string is a valid email or not
- to check that an entered username should only contain alphabets and numbers

Syntax for Regular Expressions :-
- This is the syntax to define regular rexpressions /pattern-string/flags

> pattern-string is where you define what string this pattern should match.
> forward slash represent the start and end of pattern-string.
> flags are used to be define whether you want to search to be case-sensitive or case-insensitive, or 
whether you want just the first result or all the results.


// Sets and Ranges  :--
-->Sets and ranges are represented by several characters inside square brackets [...], This just means for srearch for any character among given value.

> It has two variation it like this [ABC]. It means any of three characters:
'A', 'B', 'C' will be matched This is called Set.
for ex:- String: Air Birm Circle.
		Pattern: [ABC]irm

> Square Bracket may also contain character ranges.
> [A-Z] is a character in range from A to Z, and [0-9] is a digit from 0 to 9.
for ex:- String: Same Name Fame Glam 
pattern: [A-Z]ame


// Regex Quantifiers  :--
--> Quantifiers select a value multiple times. They also decide how many times  value should be selected.

> Syntax:
To define a quantifier, we add a value inside curly braces after the sets or ranges. 
for ex:- [\d{3}]		*/
