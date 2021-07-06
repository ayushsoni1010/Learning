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
