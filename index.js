console.time("Your code took");
console.log("Hello Console");
console.log(4 + 34);
console.log(34);
console.log(true);
console.log([23, 5, 9, 1]);
console.log({ harry: "this", marks: 34 });
console.table({ harry: "this", marks: 55 });
console.warn("this is a warning");
console.timeEnd("Your code took");
console.assert(500 > 180, "Age>180 is not possible");
console.error("This is an error");
console.clear();

// Variables in JS
// var , let , const
var name = "harry";
var channel;
var marks = 345;
// channel = "codewithharry";
console.log(name, channel, marks);

// Rules for creating Javascipt Variables
/*
1. Cannot start with Numbers.Cannot
2. Can start with letters , numbers , _ or $
3. Varibles are case sensitive
*/
var city = "Delhi";
console.log(city);

const ownersName = "Hari Ram";
// ownersName='Harry'; //cannot do this (error)
console.log(ownersName);

{
  let city = "rampur";
  console.log(city);
}
console.log(city);

const arr1 = [12, 23, 16, 45, 3];
arr1.push(45);
console.log(arr1);
console.clear();

/* Most common programming case types:

1. camelCase
2. kebab-case
3. snake_case
4. PascalCase
*/

// DATA-TYPES IN JS
/*
1. Primitive data type (Stack Memory Location)
    --Strings
    --Numbers
    --Boolean
    --Null
    --Undefined
    --Symbol(ES6)

2. Reference/Derived data type (Heap Memory Location)
    --Arrays
    --Object literals
    --Functions
    --Dates
*/

// String
let Name = "harry";
console.log("My string is " + Name);
console.log("Data type is " + typeof Name);

// Numbers
let mark = 34;
console.log("Data type is " + typeof mark);

// Boolean
let isDriver = true;
console.log("Data type is " + typeof isDriver);

// Null
let nullVar = null;
console.log("Data type is " + typeof nullVar);

// Undefined
let undef = undefined;
console.log("Data type is " + typeof undef);

// Arrays
let myArr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + typeof myArr);

// Object Literals
let stMarks = {
  ayush: 89,
  shubham: 70,
  rohan: 50,
};
console.log("Data type is " + typeof stMarks);

// Function
function findName() {}
console.log("Data type is " + typeof findName);

// Date
let date = new Date();
console.log(typeof date);
console.clear();

// Type Conversion AND Type Coercion
// TYPE CONVERSION
let myvar;
myvar = 34;
console.log(myvar, typeof myvar);

myvar = String(34);
console.log(myvar, typeof myvar);

// ---------
let booleanvar = true;
console.log(booleanvar, typeof booleanvar);

let booleanvar1 = String(true);
console.log(booleanvar1, typeof booleanvar1);

// ---------
let dates = new Date();
console.log(dates, typeof dates);

let dates1 = String(new Date());
console.log(dates1, typeof dates1);

// ---------
let arr = [1, 2, 3, 4, 5];
console.log(arr.length, typeof arr);

let arr2 = String([1, 2, 3, 4, 5]);
console.log(arr2.length, typeof arr2);

// ----------
let i = 56;
console.log(i.toString());

// ----------
let stri = Number("3434");
console.log(stri, typeof stri);

stri = Number("23d4");
console.log(stri, typeof stri);

stri = Number(false);
console.log(stri, typeof stri);

stri = Number(true);
console.log(stri, typeof stri);

stri = Number([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(stri, typeof stri);

//  -----------
let number = "34";
console.log(number, typeof number);

number = parseInt("34");
console.log(number, typeof number);

number = parseFloat("34.584");
console.log(number, typeof number);

number = parseFloat("34.584");
console.log(number.toFixed(5), typeof number);

//  ------------
// TYPE COERCION
let mystr = "698";
let mynum = 34;
console.log(mystr + mynum);

mystr = Number("698");
mynum = 34;
console.log(mystr + mynum);
console.clear();

// Strings Properties
const name1 = "Ayush";
const greeting = "Good Morning";
console.log(greeting + " " + name1);

let html;
html = "<h1> This is Heading</h1>" + "<p>This is my para</p>";
console.log(html);

html = html.concat("this", "str2");
console.log(html);

console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html[1]);
console.log(html.indexOf("h1"));
console.log(html.indexOf("this"));
console.log(html.indexOf("tasdfsfg"));
console.log(html.indexOf("<"));
console.log(html.lastIndexOf("<"));
console.log(html.charAt(2));
console.log(html.endsWith("str2"));
console.log(html.includes("str2"));
console.log(html.substring(1, 4));
console.log(html.slice(-4));
console.log(html.slice(0, 4));
console.log(html.split(" "));
console.log(html.split("<"));
console.log(html.replace("this", "it"));

let fruit1 = "Orange";
let fruit2 = "Apple";
let myHtml = `Hello ${name1}
          <h1>This is "my" Heading </h1>
          <p> You like ${fruit1} and ${fruit2}</p>`;

document.body.innerHTML = myHtml;
console.clear();

// ARRAYS AND OBEJECTS
let Marks = [23, 6, 78, 95, 24, 68];
const furits = ["Orange", "Apple", "Pineapple"];
const mixed = ["str", 34, [3, 6]];

const arr3 = new Array(21, 34, 56, 76, "Orange");
console.log(arr3);
console.log(mixed);
console.log(furits);

let value = Marks.indexOf(95);
console.log(value);

// #Mutating or Modifying arrays
Marks.push(334); /*At the last of array*/
console.log(Marks);

Marks.unshift(1093); /*At the beginning of the array*/
console.log(Marks);

Marks.pop(); /*Remove At the last of array */
console.log(Marks);
Marks.shift(); /*Remove from the beginning of Arrays*/
console.log(Marks);

// Marks.splice(index,upto which index element should remove)
Marks.splice(2, 3);
console.log(Marks);
Marks.reverse();
console.log(Marks);

let Marks1 = [1, 43, 2, 4];
Marks = Marks.concat(Marks1);
console.log(Marks);

let myobj = {
  name2: "harry",
  channel1: "CodeWithHarry",
  isActive: true,
  maRks: [132, 5, 3, 53],
};
console.log(myobj);
console.log(myobj.channel1);
console.log(myobj.maRks);
console.log(myobj.isActive);
console.clear();

// IF-ELSE CONDITIONALS & SWITCHES
const age = 65;
if (age == 19) {
  console.log("Age is 19");
} else if (age == 65) {
  console.log("Age is 65");
} else {
  console.log("Age is 19");
}
// else if(age!== 65)   --> it is used when type and name have to check

const vari = 32;
if (typeof vari !== "undefined") {
  console.log("Vari is Defined");
} else {
  console.log("Vari is not defined");
}

// Operator : & , ||
const doesDrive = true;
if (doesDrive && age > 18) {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}

// Ternary Operator
console.log(age == 45 ? "Age is 45" : "Age is not 45");

// Switch Statement
switch (age) {
  case 18:
    console.log("You are 18");
    break;
  case 28:
    console.log("You are 28");
    break;
  case 38:
    console.log("You are 38");
    break;

  default:
    console.log("You are unknown age");
    break;
}
console.clear();
