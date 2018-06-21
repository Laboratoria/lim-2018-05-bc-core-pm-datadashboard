//llamamos a los elementos

let signIn = document.getElementById('signIn');
let signUp = document.getElementById('signUp');
let pageOne =document.getElementById('pageOne');
//mostrando y ocultando secciones
signIn.style.display='block';
signUp.style.display='none';
pageOne.style.display='none';

let elementosTab = document.getElementsByClassName('tab');
for(let i = 0; i < elementosTab.length;i++){
  elementosTab[i].addEventListener('click',show);
}

//tab iniciar sesion y registrarse
function show(e){
  let tabSeleccionado = e.target.dataset.tabSeleccionado;
  
  if (tabSeleccionado === 'tabLogin'){
    signUp.style.display='none';
    signIn.style.display='block';
  }else if ( tabSeleccionado === 'tabRegister'){
    signIn.style.display='none';
    signUp.style.display='block';
    
  
  }
}
//click de botones
let button=document.getElementById('button');
button.addEventListener('click', login);
function login() {
 let username=document.getElementById("username").value;
 let password=document.getElementById("password").value;
 let content=document.getElementById('content');
 content.style.display='none';

 if(username==='Bea'&& password==='lab'){
    pageOne.style.display='block';
  }else if(username==='Ale'&& password==='lab'){
    pageOne.style.display='block';
  }else{
   pageOne.style.display='none';
   signIn.style.display='block';
  }
}
let btn=document.getElementById('btn');
btn.addEventListener('click', register);
function register(){
 signIn.style.display='block';
 signUp.style.display='none';

}


//page one

/*const selectElement = document.getElementById('cohorts');
var option = "";
fetch('http://127.0.0.1:5500/data/cohorts.json').then((response) => {
  if(response.status == 200){
    return response.json();
  }else{
    throw new Error("la llamada a la API falló");
  }
}).then ((data) => {

  for(let i=0;i<data.length; i++){
  
  option = document.createElement('option');
  option.text = data[i].id;
  lista2.add(option);
    
  }
 
}); */

let selection = document.getElementById('cohorts');
let listauser = document.getElementById('lista');

fetch('https://api.laboratoria.la/cohorts')
.then(response => response.json())
.then(json => {
  const cohorts = json;
  for (let i = 0; i < cohorts.length; i++) {
    const optionElements = document.createElement('option');
    const contenidoOption = document.createTextNode(cohorts[i].id);
    optionElements.appendChild(contenidoOption);
    optionElements.setAttribute('value',cohorts[i].id);
    selection.appendChild(optionElements);
  }

})
.catch((err) => {
  console.error(err);
});




fetch('https://api.laboratoria.la/cohorts/lim-2018-03-pre-core-pw/users')
.then(response => response.json())
.then(json => {
  const users = json;
  
  for(let i=0; i< users.length; i++){
    listausuarios=(users[i].signupCohort);
    
    selection.addEventListener('change', carga);
    function carga(){
     if(selection.value === listausuarios){
       const optionlist=document.createElement('li');
       const contenidolista=document.createTextNode(users[i].name);
       optionlist.appendChild(contenidolista)
       listauser.appendChild(optionlist);
      }
    }
 }
 
     
     
})
.catch((err) => {
 console.error(err);
});
 
  














/*var lista = document.getElementById('lista');
var Uno = "";

fetch('http://127.0.0.1:5500/data/cohorts.json').then((response) => {
  if(response.status == 200){
    return response.json();
  }else{
    throw new Error("la llamada a la API falló");
  }
}).then ((data) => {

  for(let i=0;i<data.length; i++){
  var uno = data[i].id;
  console.log(data[i].id);
  lista.innerHTML += data[i].id+"<p>";
  
    
  }
 
});*/


/*-------------------------------------------------------------------------
const llamadas = [];
llamadas.push(fetch('http://127.0.0.1:5500/data/cohorts.json'));
//llamadas.push(fetch(url2));
//llamadas.push(fetch(url3));

Promise.all(llamadas).then((responses)=>{
    return responses.map(response => response.json()); 
    //En caso de que sean llamadas a api
}).then((jsonResponses)=>{
    //Código que maneja las múltiples llamdas y sus respuestas en JSON
}).catch((error)=>{
    //Código que maneja errores
});*/
