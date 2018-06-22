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
