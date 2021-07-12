console.log('Learning Ajax ');

let fetchBtn=document.getElementById('fetchBtn');

fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){
    console.log('you have clicked the fetchBtn');

    const xhr= new XMLHttpRequest();

    xhr.open('GET','harry.txt', true);
}