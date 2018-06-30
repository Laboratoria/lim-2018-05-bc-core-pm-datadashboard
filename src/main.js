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








const getData = (process) => {
  fetch ('https://api.laboratoria.la/cohorts')
  .then (resCohorts=>
    fetch ('https://api.laboratoria.la/cohorts/lim-2018-03-pre-core-pw/users')
    .then (resUsers=> 
      fetch ('https://api.laboratoria.la/cohorts/lim-2018-03-pre-core-pw/users')
      .then (resProgress=>
        Promise.all([ resCohorts.json(), resUsers.json(), resProgress.json()])
        .then(data =>process(data))
      )
    )
  )
}
let selection = document.getElementById('cohorts');
let listauser = document.getElementById('lista');
getData( (data) =>{
  //arreglo de objetos del archivo cohorts 
 const dataCohorts=data[0];
 //arreglo de objetos del archivo lim-201-03-pre-core-pw(users)
 const dataUsers=data[1];
 //objeto del archivo lim-201-03-pre-core-pw(progress)
 const dataProgress=data[2];

  //arreglo cohorts
  const cohorts=dataCohorts.map(cohort=>cohort.id);
  //mostrando la lista de cohorts 
  cohorts.forEach(cohort=>{
    selection.innerHTML+=`<option value=${cohort}>${cohort}</option>`
  }); 
  
  selection.addEventListener('change',selected);
  //mostrando lista de estudiantes
  function selected(){
    if(selection.value==='lim-2018-03-pre-core-pw'){
      const users= dataUsers.map(user =>{ user.name
        listauser.innerHTML+=`<li id=${user.name}><a href=${user.name}>${user.name}</a></li>`;
      });
     
    }
  } 
  const users= dataUsers.map(user => user.name);
  console.log(cohorts);
  
 
  
});



/*
const functionfilter=(texto)=>{
  return Array.filter((element)=>element.name.indexOf(texto)!== -1)
};

//
const functionfilter=(texto)=>{
  return Array.filter((element)=>element.name===texto)
};*/

/*selection.addEventListener('click',change);
function change(e){
  if(e.target.value===)

}*/

///////////////////////////////////////////////////////
/*let selection = document.getElementById('cohorts');
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
 */
  














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
