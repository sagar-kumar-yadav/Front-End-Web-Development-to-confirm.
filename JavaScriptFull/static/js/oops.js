// Object Oriented Prgramming //   :----------------------------------------------------------------------------------------------------------------
// Encapsulation: --
var videoName = "Intro to JS"
var fileFormat = "mp4"
var duration = "2:48"
var owner = "sagar"

function getVideoName() {
	return videoName;
}
function getFileFormt() {
	return fileFormat;
}
function getDuration() {
	return duration;
}
function getOwner() {
	return owner;
}

var video = {
	videoName: "Intro to JS",
	fileFormat: "mp4",
	duration: "2:48",
	owner: "sagar",
	getVideoName: function() {
		return this.videoName
	},
	getFileFormt: function() {
		return this.fileFormat
	},
	getDuration: function() {
		return this.duration
	},
	getOwner: function() {
		return this.owner
	}
}

console.log(video.getVideoName());      // Intro to JS
console.log(video.getDuration());       // 2:48
console.log(video.getFileFormt());      // mp4
console.log(video.getOwner());          // sagar

// This Keyword :--
/* "John is running faast because he is trying to catch the train"
In JavaScript, this keyword refers to the current context. The this object ALWAYS refer to a single object
and it is ussually used inside a function or a method to access properties and methods which are a part
of the object which is associated with the function.*/

// ex:-1
var person = {
    firstName: 'sagar',
    yearOfBirth: 2000,
    job: 'SW',
    getName: function() {
        console.log(this.firstName)
    }
}
person.getName();                                   // sagar

// ex:2
var firstName = 'Kety'
var person = {
    firstName: 'sagar',
    yearOfBirth: 2000,
    job: 'SWD',
    getName: function() {
        console.log(this.firstName)                 // sagar
        console.log(firstName)                      // kety
    }
}
person.getName();  

// ex:3
var person = {
    firstName: 'sagar',
    yearOfBirth: 2000,
    job: 'SW',
    getName: function() {
        console.log(this.firstName)                                    
    },
    parents: {
        firstName: 'Kety',
        yearOfBirth: 2001,
        job: 'teacher',
        getName: function() {
            console.log(this.firstName)
        }
    }
}
person.getName();           // sagar
person.parents.getName();   // kety

// Constructor :--
/* Basically this function acts as a blueprint for the objects, Other programming language it would be called classes but 
in JavaScript we call it constructor or a prototype. Based on this constructor we can create as many objects as we want and these 
new objects is called instances.8 */

// ex 1:-
var person = {
    name: 'sagar',
    yearOfBirth: 1900,
    job: 'Agent'
}
function Person(pName, pYearOfBirth, pJob) {
    this.name = pName;
    this.yearOfBirth = pYearOfBirth;
    this.job = pJob;
}
var kety = new Person('Yadav', 1992, 'Developer')
console.log(kety);                                  // Person {name: 'Yadav', yearOfBirth: 1992, job: 'Developer'}

// ex 2:-
var person = {
    name: 'sagar',
    yearOfBirth: 1900,
    job: 'Agent'
}
function Person(pName, pYearOfBirth, pJob) {
    this.name = pName;
    this.yearOfBirth = pYearOfBirth;
    this.job = pJob;

    this.calculateAge = function() {
        console.log(2022 - this.yearOfBirth)
    }
}
var kety = new Person('Yadav', 2000, 'Developer')
kety.calculateAge();                                // 22

var tez = new Person('pratap', 2001, 'SDE')
tez.calculateAge();                                 // 21

// Inheritace and Prototype Chain :--
/* it just means one object baised on another object, this results in a parent child relation 
> Each and every javascript object has a property called prototype, This prototype property makes it possile to
inherit methos and properties to the child object. */

var person = {
    name: 'sagar',
    yearOfBirth: 1900,
    job: 'Agent'
}

function Person(pName, pYearOfBirth, pJob) {
    this.name = pName;
    this.yearOfBirth = pYearOfBirth;
    this.job = pJob;
}

Person.prototype.calculateAge = function() {
    console.log(2022 - this.yearOfBirth)
}
Person.prototype.lastName = "Yadav"

var kety = new Person('kety', 2000, 'Developer')
kety.calculateAge();                                    // 22

var tez = new Person('pratap', 2001, 'SDE')
tez.calculateAge();                                     // 21

console.log(kety.lastName)                              // yadav
console.log(tez.lastName)                               // yadav


// update birth year
var person = {
    name: 'sagar',
    yearOfBirth: 1900,
    job: 'Agent'
}

function Person(pName, pYearOfBirth, pJob) {
    this.name = pName;
    this.yearOfBirth = pYearOfBirth;
    this.job = pJob;
}

Person.prototype.calculateAge = function() {
    console.log('For => '+  this.name, 2022 - this.yearOfBirth)
}
Person.prototype.updateYearOfBirth = function(birthYear) {
    // console.log(birthYear)                              // 1998
    this.yearOfBirth = birthYear
}
Person.prototype.lastName = "Yadav"

var kety = new Person('kety', 2000, 'Developer')
kety.calculateAge();                                    // For => kety 22
kety.updateYearOfBirth(1998);
kety.calculateAge();                                    // For => kety 24

var tez = new Person('pratap', 2001, 'SDE')
tez.calculateAge();                                     // For => pratap 21
tez.updateYearOfBirth(2005);
tez.calculateAge();                                     // For => pratap 17


// Frontend vs Backend // :------------------------------------------------------------------------------------------------------
/* 
Frontend :- It refers to the clint side of the applicaion
         :- It includes everything which is visible on the browser screen.
         :- To Develop frontend web applications you cn use HTML, CSS, React, Angular etc.

Backend :- It refer to the server-side of the application.
        :- Backend is where all the data is handled. And it recives data from the frountend to store or update in the database.
        :- To develop backend application you can use Nodejs, DoNet, PHP, JAVA etc. 


// HTTP Requests :--
-> HTTP stands for Hypertext Transfer Protocol. The requests to backend are sent using HTTP. 
It is a Protocol which allows the fetching of data from the server. It is the foundation of any data exchange on the Web.
Clints and servers comunicate by exchanging individual messages. The messages sent by the clint are called requests.
The message sent by the server as an answer are called responses. 


// HTTP Methods :--
--> GET - it is used to get some data from the backend. The data can be a JSON Object or a JSON Array.

--> POST - it is used to create new data entries on the backend. It accepts some data in the request and takes 
that data to the backend for creation.

--> PUT - it is used to update existing data entries on the backend. It accepts some data in the request and takes
that data to the backend for updation.

--> DELETE - it is used to delete an existing data entry on the backend.

etc..


// GET Request :--
Request Method: GET
it tels that the request needs to return some data.

URL: "https://jsonplaceholder.typicode.com/todos"
The complete URL for the HTTP call.

Backend URL: "https://jsonplaceholder.typicode.com"
it points to the backend sever.

TODO Endpoint: "/todos"
it tells backend what is requested by the frontend.

// Response Codes :--
200 - It represents "Success" which means the request was successful and the data is recived by the frontend.

400 - It represents "Bad Request" which means that the backend did not undestand the request.

401 - It represents "Unauthorized" which means that the user is not authorized to access the response data.

404 - It represents "not found" which means the URL is not found.

500 - It represents "Something Went Wrong" which means that something failed at the backend and the request cannot be compleated.

etc...
*/

// Introduction to JSON // :-------------------------------------------------------------------------------------
/*
  JSON  stands for JavaScript Object Notation.
  It is basically a text format that akes it easy to share data between clints and Servers. Its Origin is based 
  on how javascript object works so that's why it looks like a javascript object.

  It is widely used across many language like C, Ruby, Python, PHP etc.*/

// this is javascript object
var mObj = {
    name: 'sagar',
    age: 18
}

// this is JSON object
var mObj = {
    "name": 'sagar',
    "age": 18
}
console.log(mObj.name);         // sagar

// this is JSON array
var mArr = [
    {
        "name": 'sagar',
        "age": 18
    },
    {
        "name": 'kumar',
        "age": 20
    },
    {
        "name": 'yadav',
        "age": 22
    }
]
console.log(mArr[0].name);      // sagar

// convert to string or number
var mObj = {
    "name": 'sagar',
    "age": 18
}
var strJSON = JSON.stringify(mObj)
console.log(strJSON);                   // {"name":"sagar","age":18}
console.log(JSON.parse(strJSON));       // {name: 'sagar', age: 18}


// Introduction to AJAX
/*
  AJAX is a short form for Asynchronous JavaScript And XML.
  It allows web pages to be updated asynchronously by exchanging data with the backend.
  This makes it possible to update parts of a web page, without reoading the whole page.

  Initially AJAX was used to send and receive XML because that was how the data was received from the backend in old
  days.But now it can also be used to send/recive JSOn objects. which is pretty common these days.

  Asynchronous Code :--
  Normally, the way JavaScript code is run is that it executes one line of code and then moves to next line and 
  then the line after that and so on.

  Say there is a ine of code which takes 5 seconds to execute.
  This would just mean that JavaScript will have to wait 5 seconds before it can move on to execute more lines of code.

  To avid this, there is another way to execute a specific part of code such that the exeution start and it runs 
  in the background, which allows rest of the code to be executed. Running code n the background is called 
  Asynchronous Execution.
*/