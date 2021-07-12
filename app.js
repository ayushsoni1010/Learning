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

class Employee1{
    constructor(givenName,givenExperience,givenDivision){
        this.name=givenName;
        this.experience=givenExperience;
        this.division=givenDivision;
    }
    slogan(){
        return `I am ${this.name} and this company is the best`;
    }
    joiningYear(){
        return 2020-this.experience;
    }
    static add(a,b){
        return a+b;
    }
}

let ayu= new Employee1("Ayush",56,"Division");
console.log(ayu);
console.log(ayu.slogan());
console.log(ayu.joiningYear());
console.log(Employee1.add(34,5));




class Programmer1 extends Employee1{
    constructor(givenName,givenExperience,givenDivision ,givenLanguage,givenGithub){
        super(givenName,givenExperience,givenDivision);
        this.language=givenLanguage;
        this.github=givenGithub;
    }

    favouriteLanguage(){
        if(this.language=='Python'){
            return 'Python';
        }
        else{
            return 'JavaScript';
        }
    }

    static multiply(a,b){
        return a*b;
    }
}


ayu=new Programmer1('Ayu',34,'Division','JavaScript','ayushsoni1010');

console.log(ayu);
console.log(ayu.favouriteLanguage());
console.log(Programmer1.multiply(5,7));


class Library{
    constructor(){

    }
    getBookList(){}
    issueBook(username,user){

    }
    returnBook(bookName){
        
    }
}