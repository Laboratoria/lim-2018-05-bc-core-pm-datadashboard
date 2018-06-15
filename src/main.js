let home=document.getElementById('home');
let pageOne=document.getElementById('pageOne');

pageOne.style.display='none'
let button = document.getElementById('start');
button.addEventListener('click', start);

function start(){
    pageOne.style.display='block';
    home.style.display='none';
}