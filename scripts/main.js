var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/breadfruit.jpg') {
		myImage.setAttribute ('src','images/black-and-white.jpg');
	} else {
		myImage.setAttribute ('src','images/breadfruit.jpg');
	}
}

document.querySelector('h2').textContent = 'click the picture, please';


alert('hello, stranger!');


/*
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'welcome to hell, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'welcomme to hell, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}


/* an if ... elese conditional statement code structure,
allows testing if an expression returns true or not,
running alternative code revealed byits result
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}
*/

//example variables for future reference
var myVar1 = 'Spencer'; /* a string of chars, must have quotes */

var myVar2 = 10; /* a number variable*/

var myVar3 = true; /* a boolean variable, which is a true/false value */

var myVar4 = ['Spencer', 10, true]; /* an array, stores multiple values in one variable*/

var myVar5 = document.querySelector(''); /* an object, which can store pretty much anything in a a variable */
myVar5.textContent = ''; /* this defines the variable */

// shorter object function code
// document.querySelector('').defineObject = function() {};

/* can set and define customized variables for use in devlopment of whatever project
function multiply(num1,num2){
	var result = num1 * num2;
	return result;
}
*/