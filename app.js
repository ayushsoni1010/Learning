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

