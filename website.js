console.log("We are here");
let a = document;
console.log(a);

a = document.all;
// a.forEach(function(element){
//     console.log(element);
// })    /* Through an error, does not work */
Array.from(a).forEach(function (element) {
  console.log(element);
});
console.log(a);

a = document.body;
a = document.forms;
a = document.forms[0];
a = document.links;
a = document.links[0];
a = document.links[0].href;
console.log(a);

a = document.images;
a = document.scripts;
console.log(a);
console.clear();

// DOM ELEMENT SELECTORS
/*
1. Single element selector
2. Multiple element Selector
*/

// 1. Single element selector
// 1. Single element selector
let element = document.getElementById("myfirst");
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = "red";
element.innerText = "Harry is a good boy";
element.innerHTML = "<b>Harry is a good boy</b>";
// console.log(element.innerText);

let sel = document.querySelector("#myfirst");
sel = document.querySelector(".child");
sel = document.querySelector("div");
sel.style.color = "green";
console.log(sel);

// 2. Multi element selector
let elems = document.getElementsByClassName("child");
elems = document.getElementsByClassName("container");
elems = document.getElementsByTagName("div");
console.log(elems);

for (let index = 0; index < elems.length; index++) {
  const element = elems[index];
  console.log(element);
  element.style.color = "blue";
}
// Array.from(elems).forEach(element => {
//     console.log(element);
//    element.style.color = 'blue';
// });
// console.log(elems[0].getElementsByClassName('child'))
console.clear();

// CHILDREN, PARENT & TRAVERSING THE DOM
let cont = document.querySelector(".no");
cont = document.querySelector(".container");
// cont = cont.childNodes;   /*Involves everything like text comment*/

// cont=cont.children;        /*inloves main things*/
console.log(cont);

let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
console.log(nodeName);
console.log(nodeType);

//Node Types:
/*
1. Element
2. Attribute
3. Text Node
8. Comment
9. document
10. docType
*/

let container = document.querySelector("div.container");
console.log(container.children[1].children[0].children);

console.log(container.firstChild);
console.log(container.firstElementChild);

console.log(container.lastChild);
console.log(container.lastElementChild);

console.log(container.children);
console.log(container.childElementCount);
/*Count of child elements*/

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);

console.clear();

// CREATING , REMOVING AND REPLACING ELEMENTS
/*
console.log('this is tut 16');
let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text)

// Add a class name to the li element
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');
// element.innerText = '<b>Hello this is created by harry</b>';
// element.innerHTML = '<b>Hello this is created by harry</b>';

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul)
// console.log(element)

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr = elem2.hasAttribute('href');
elem2.removeAttribute('id');
elem2.setAttribute('title', 'myelem2title');
console.log(elem2, pr);

*/

// quick quiz
// create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href = "https://www.codewithharry.com"

// EVENTS & EVENTS OBJECT

document.getElementById("heading").addEventListener("click", function (e) {
  let variable;
  console.log("You have clicked the heading");
  variable = e.target;
  variable = e.target.className;
  variable = Array.from(e.target.classList);

  variable = e.target.id;
  variable = e.offsetX;
  variable = e.offsetY;
  variable = e.clientX;
  variable = e.clientY;
  console.log(variable);
  // location.href = '//codewithharry.com'
});
console.clear();

// MORE ON JS EVENTS

let btn = document.getElementById("btn");
btn.addEventListener("click", func1);
btn.addEventListener("dblclick", func2);
btn.addEventListener("mousedown", func3);

function func1(e) {
  console.log("Thanks", e);
}

function func2(e) {
  console.log("Thanks for double click", e);
}

function func3(e) {
  console.log("Thanks for mousedown click", e);
}

document.querySelector(".no").addEventListener("mouseenter", function () {
  console.log("You entered no");
});

document.querySelector(".no").addEventListener("mouseleave", function () {
  console.log("You exited no");
});

document
  .querySelector(".container")
  .addEventListener("mousemove", function (e) {
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${
      e.offsetX + e.offsetY
    })`;
  });

console.clear();
