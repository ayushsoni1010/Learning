console.log("This is tutorial 30");

const proto = {
  slogan: function () {
    return `This company is the best`;
  },
  changeName: function (newName) {
    this.name = newName;
  },
};

// This creates harry object
let harry = Object.create(proto);
harry.name = "harry";
harry.role = "Programmer";
// harry.changeName("Harry2")
// console.log(harry)

// This also creates harry object
const harry1 = Object.create(proto, {
  name: { value: "harry", writable: true },
  role: { value: "Programmer" },
});
harry1.changeName("Harry2");
// console.log(harry1)

// Employee constructor
function Employee(name, salary, experience) {
  this.name = name;
  this.salary = salary;
  this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
  return `This company is the best. Regards, ${this.name}`;
};

// Create an object from this constructor now
let harryObj = new Employee("Harry", 345099, 87);
console.log(harryObj.slogan());

// Programmer
function Programmer(name, salary, experience, language) {
  Employee.call(this, name, salary, experience);
  this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 2, 0, "Javascript");
console.log(rohan);
console.clear();

// ES6 CLASSES & INHERITANCE IN JS

class Employee1 {
  constructor(givenName, givenExperience, givenDivision) {
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
  }
  slogan() {
    return `I am ${this.name} and this company is the best`;
  }
  joiningYear() {
    return 2020 - this.experience;
  }
  static add(a, b) {
    return a + b;
  }
}

let ayu = new Employee1("Ayush", 56, "Division");
console.log(ayu);
console.log(ayu.slogan());
console.log(ayu.joiningYear());
console.log(Employee1.add(34, 5));

class Programmer1 extends Employee1 {
  constructor(
    givenName,
    givenExperience,
    givenDivision,
    givenLanguage,
    givenGithub
  ) {
    super(givenName, givenExperience, givenDivision);
    this.language = givenLanguage;
    this.github = givenGithub;
  }

  favouriteLanguage() {
    if (this.language == "Python") {
      return "Python";
    } else {
      return "JavaScript";
    }
  }

  static multiply(a, b) {
    return a * b;
  }
}

ayu = new Programmer1("Ayu", 34, "Division", "JavaScript", "ayushsoni1010");

console.log(ayu);
console.log(ayu.favouriteLanguage());
console.log(Programmer1.multiply(5, 7));

class Library {
  constructor() {}
  getBookList() {}
  issueBook(username, user) {}
  returnBook(bookName) {}
}

console.log("this is tutorial 41");
console.clear();

//ASYNC & AWAIT IN JS

console.log("This is tutorial 43");

async function harrry() {
  console.log("Inside harry function");
  const response = await fetch("https://api.github.com/users");
  console.log("before response");
  const users = await response.json();
  console.log("users resolved");
  return users;

  // return "harrry";
}

// console.log("Before calling harry");
// let a = harrry();
// console.log("After calling harry");
// console.log(a);
// a.then((data) => console.log(data));
// console.log("Last line of this js file");
// console.clear();

// ERROR HANDLING & TRY CATCH IN JS
console.log("This is tutorial 44");

// Pretend this is coming from a server as response
let a = "Harry bhai";
a = undefined;
if (a != undefined) {
  throw new Error("This is not undefined");
} else {
  console.log("This is undefined");
}

try {
  null.console;
  console.log("We are inside try block");

  functionHarry();
} catch (error) {
  console.log(error);
  console.log("Are you okay?");
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log("Finally we will run this");
}

console.clear();

// JAVASCRIPT REGULAR EXPRESSIONS & RELATED FUNCTIONS
console.log("This is tutorial 46");
let reg = /harry/; // This is a regular expression literal in js
reg = /harry/g; // g means global
// reg = /harry/i; // i means case insensitive

// console.log(reg);
// console.log(reg.source);

let s = "This is great code with harry and also harry bhai";
// Functions to match expressions
// 1. exec() - This function will return an array for match or null for no match
let result = reg.exec(s);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result); ---> We can use multiple exec with global flag

// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }

// 2. test() - Returns true or false
let result2 = reg.test(s);
// console.log(result2); --> This will only print true if the "reg" is there in the string "s"

// 3. match() - It will return an array of results or null
// let result3 = reg.match(s) ---> This is wrong!!
let result3 = s.match(reg); // ---> This is right
// console.log(result3);

// 4. search() - Returns index of first match else -1
// let result4 = reg.search(s) ---> This is wrong!!
let result4 = s.search(reg); // ---> This is right
// console.log(result4);

// 5. replace() - Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)

let result5 = s.replace(reg, "SHUBHAM");
console.log(result5);

console.clear();

// REGULAR EXPRESSIONS - METACHARACTERS IN JS
console.log("This is tutorial 47");

let regex = /harrsdfgy/;
// Lets look into some metacharacter symbols
regex = /^harrdc/; // ^ means expression will match if string starts with
regex = /harry$/; // $ at the end of the string means "string ends with"
regex = /h.rry/; //matches any one character
regex = /h*rry/; //matches any 0 or more characters
regex = /ha?rryi?t/; //? after character means that character is optional
regex = /h\*rry/;

let str = "h*rry means codewith"; //

result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} does not match the expression ${regex.source}`
  );
}

// REGULAR EXPRESSIONS -CHARACTER SETS IN JS

// Regular Expressions:
// Basic functions
// Metacharacter Symbols
// Character Sets - we use []

// regex=/^h/i;

regex = /h[a-z]rry/;    // can be any character from a-z
regex = /h[aty]rry/;    // can be an a, t or y
regex = /h[^atz]rry/;   // cannot be any of a, t or z
regex = /h[^atz]rr[yu]/;    //  cannot be any of a, t or z + can be a u or y

regex = /h[^a-zA-Z]rr[yu0-9][0-9]/; 
// We can have as many character sets as we want

str='hirry bhai';
str='harry bhai';
str = "hyrry bhai";
str='hirry0 bhai';


// Regular Expressions : Quantifiers - we use {}
regex=/har{2}y/;    // r can occur exactly 2 times
regex=/har{0,2}y/;    // r can occur exactly 0-2 times

str="harry bhai";
str="hay bhai";


// Groupings - we use paranthesis for grouping ()
regex=/(har){2}/;
regex=/(har){2}([0-9]r){3}/;


str="harry bhai";
str="harhar1r4r5r bhai";


result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} does not match the expression ${regex.source}`
  );
}








// SHORTHAND CHARACTER CLASSES (REGULAR EXPRESSIONS)


regex=/\war/;     // word character - alphabet or numbers or underscore
regex=/\w+1r4r/;    // \w+ means one or more word characters 
regex=/\Wbhai/;    // Non word character
regex=/\W+bhai/;    // \w+ means more word one Non word character

regex=/\d999/;    // \d means digit
regex=/\d+999/;    // \d+ means more than one digit

regex=/\D999/;    // \D means non digit
regex=/\D+999/;    // \D+ means more than one non digit

regex=/\ska number/;    // match whitespace character
regex=/\s+ka number/;    // match one more than one whitespace character

regex=/\Ska number/;    // match Non whitespace character
regex=/\S+ka number/;    // match one or more than one Non whitespace character

regex=/4r5r\b/;       //word boundary



// Regular Expressions: Assertions
regex=/h(?=y)/;
regex=/h(?!=y)/;




str = "harhar1r4r5r bhai";
str = "harhar1r4r5r %%&$bhai";
str = "harhar1r4r5r %%&$bhai harry ka number 8999999";
str = "harhar1r4r5r %%&$bhai harry ka number 89999harry99999";
str = "harhar1r4r5r %%&$bhai harry    ka number 89999harry99999";
str = "harhar1r4r5r %%&$bhai harika number 89999harry99999";


result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
  console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
  console.log(
    `The string ${str} does not match the expression ${regex.source}`
  );
}





// ITERATORS IN JS
console.log("The file is tutorial 51");
// Iterators

function fruitsIterator(values) {
  let nextIndex = 0;
  // we will return an object
  return {
    next: function () {
      if (nextIndex < values.length) {
        // We will return below object
        return {
          value: values[nextIndex++],
          done: false,
        };
      } else {
        // We will return below object with only done
        return {
          done: true,
        }; 
      }
    },
  };
}

const myArray = ["Apples", "Grapes", "Oranges", "Bhindi"];
console.log("My array is ", myArray);

// Using the iterator
const fruits = fruitsIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);




// GENERTORS IN JS
console.log("this is tutorial 53");
// Generators in JavaScript
// 1 - 1B

function* numbersGen() {
  let i = 0;

  // yield 1;
  // yield 2;
  // yield 3;
  // yield 4;
  while (true) {
    yield i++;
    // yield (i++).toString();
  }
}

const gen = numbersGen();
console.log(gen.next().value);
console.log(gen.next().value);




// ALARM PROJECT
// console.log("This is tutorial 54");
// const alarmSubmit = document.getElementById("alarmSubmit");

// // Add an event listener to the submit button
// // alarmSubmit.addEventListener("click", setAlarm);

// var audio = new Audio(
//   "https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
// );

// // function to play the alarm ring tone
// function ringBell() {
//   audio.play();
// }

// // This function will run whenever alarm is set from the UI
// function setAlarm(e) {
//   e.preventDefault();
//   const alarm = document.getElementById("alarm");
//   alarmDate = new Date(alarm.value);
//   console.log(`Setting Alarm for ${alarmDate}...`);
//   now = new Date();

//   let timeToAlarm = alarmDate - now;
//   console.log(timeToAlarm);
//   if (timeToAlarm >= 0) {
//     setTimeout(() => {
//       console.log("Ringing now");
//       ringBell();
//     }, timeToAlarm);
//   }
// }

console.clear();




// For-in & For-of LOOP 

console.log("This is tutorial 56 on for-in and for-of loops");

let people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];

// **********For in loop*******

// Traditional for loop:
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);
// }

// 1. ITERATING AN OBJECT
let obj = {
  name: "Harry",
  language: "JavaScript",
  hobbies: "Android app development",
};
// console.log(obj);
// 1.1 Iterating an object using Traditional for loop:
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }

// 1.2 Iterating an object using for-in loop:
for (let key in obj) {
  console.log(obj[key]);
}

// 2. ITERATING A STRING
// We can use for in with strings to loop through all the characters
myString = "This is my string";
for (let char in myString) {
  console.log(myString[char]);
}

// Quiz: Use traditional for loop to iterate through the same string

// **********For of loop***********
console.log("*****************For of loop starts here**************");
people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];

for (let name of people) {
  console.log(name);
}

for (let name of myString) {
  console.log(name);
}
console.clear();









// MAPS IN JS

// Maps in JavaScript : We can use any type of key or value
const myMap= new Map();
console.log(myMap);

let key1='myStr',
    key2={},
    key3=function(){};

// Setting map values
myMap.set(key1 , "This is a string");
myMap.set(key2 , "This is a blank obj");
myMap.set(key3 , "This is an empty function");

console.log(myMap);

// Getting the values from a Map
let value1= myMap.get(key1);
console.log(value1);

// Get the size of the map
console.log(myMap.size);

console.log('\n');

// We can loop using for-of to get keys and values
for(let [key,value] of myMap){
  console.log(key,value);
}
console.log("\n");

// Get only keys
for(let key of myMap.keys()){
  console.log(key);
}

// Get only values
for(let value of myMap.values()){
  console.log(value);
}

// We can loop through a map using for each loop
myMap.forEach((value,key) => {
  console.log('Key is ',key);
  console.log('Value is ',value);
});



// Converting map to an array
let myArray1 = Array.from(myMap);
console.log('Map to array is ',myArray1);


// Converting map keys to an array
let myKeysArray = Array.from(myMap.keys());
console.log('Map to array is ',myKeysArray);


// Converting map values to an array
let myValuesArray = Array.from(myMap.values());
console.log('Map to array is ',myValuesArray);

console.clear();




// SETS IN JAVASCRIPT
// Set stores unique values

const mySet=new Set();      //Initialize an empty set
console.log('The set looks like : ',mySet);

// Addign values to this set
mySet.add('This');
mySet.add('My Name');
mySet.add('This');
mySet.add('That');
mySet.add(345);
mySet.add(true);
mySet.add(false);
console.log('The set looks like this now: ',mySet);

// Use a constructor to initialize the set
let mySet2 = new Set([1,45,'this',false,{a:5,b:9},'this']);
console.log('New Set: ',mySet2);

// Get the size of Set
console.log(mySet.size);

// Check whether set has 346 or not 
console.log(mySet.has(34));
console.log(mySet.has(346));
console.log(mySet.has('This'));

console.log('Before removal ',mySet);
// Remove an element from the set
mySet.delete('This');
console.log('Ater removal ',mySet);


// Iterating a set
for(let item of mySet){
  console.log('Item is : ',item);
}

mySet.forEach((item)=>{
  console.log('Item is : ',item);
})


let mySet3= Array.from(mySet);
console.log(mySet3);

console.clear();






// SYMBOLS IN JAVASCRIPT
let sym1= Symbol();
console.log(sym1);
console.log(typeof sym1);

sym1 = Symbol('My Identifer');
let sym2 = Symbol('My Identifer');
console.log(sym1===sym2);

const a1 = "This is ";
const b1 = "This is ";

console.log(a1===b1);
console.log(null===null);
console.log(undefined===undefined);

const k1 = Symbol();
const k2 = Symbol();

let myobj ={};
myobj[k1]="Harry";
myobj[k2]="Rohan";
myobj['name']="Good boy"
myobj[4]="Good int"

console.log(myobj);
console.log(myobj[k1]);
console.log(myobj[k2]);

// console.log(myobj.k2);    
// !! Alert !! : cannot do this to get Rohan because it is same as myobj["k2"];

// Symbols are ignored in for-in loop
// for(let key in myobj){
//   console.log(key, myobj[key]);
// }

console.log('\n');
console.log(JSON.stringify(myobj));
console.clear();







// DESTRUCTURING IN JAVASCRIPT
let m,n;
[m,n]=[34,56];
console.log(m,n);

[g, h, j, ...k]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

console.log(g);
console.log(h);
console.log(j);
console.log(k);

// Array Distructuring
({z, x, c, ...v}={z:23, x:345, c:89, v:213, b:65 })
console.log(z,x , c, v);

const fruits1 = ['Apple' , 'Bananas' , 'Mangoes'];
[z,x,c] = fruits1;
console.log(z,x , c);


// Object Distructuring
const laptop ={
  model: 'HP Pavilion',
  age: '24 days',
  gender:'Male',
  net: 1233,
  start: function(){
    console.log('Started');
  }
}

let {model, age, gender, net, start} = laptop;
console.log(model, age, gender, net, start);
start();
console.clear();