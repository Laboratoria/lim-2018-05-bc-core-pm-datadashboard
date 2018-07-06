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







////////////////////////////////////////////////////////////////////////////
//'https://api.laboratoria.la/campuses'
//'https://api.laboratoria.la/cohorts'
//'https://api.laboratoria.la/cohorts/lim-2018-03-pre-core-pw/users'
//'https://api.laboratoria.la/cohorts/lim-2018-03-pre-core-pw/progress'


let options={
  //global por los distintos eventos
  cohort:null,
  cohortData:{
     users:null,
     progress:null,
  },
  orderBy:'name',
  orderDirection:'ASC',
  search:''
};


const getData = (str,url,callback) => {
  fetch(url)
  .then (res=>res.json())
  .then(res =>{
    callback(str,res);
  })
}

let selectCampuses = document.getElementById('selectCampuses');
let selectCohort = document.getElementById('cohorts');
let sectionMain = document.getElementById('sectionMain');
let searchInput=document.getElementById('searchInput');



const showCohorts=(valueCampus, dataCohorts)=>{
  const cohortsOfCampus = dataCohorts.filter(cohort=>{
    return cohort.id.indexOf(valueCampus) !== -1;//lim aqp
  });
  
  let contentOfSelect = '';//string vacio (al usar template)contador string;
  cohortsOfCampus.forEach(cohort => {
    contentOfSelect += `<option id='${cohort.id}' value='${cohort.id}'>${cohort.id}</option>` ;
      
  });
  selectCohort.innerHTML = contentOfSelect;
}

const showAll=(studentsWithStats)=>{
  let template='';
  studentsWithStats.forEach((objStudentWithStats)=>{
    template+=
    `<div>
      <p><span style= "font-weight:bold;">${objStudentWithStats.name}</span>
 
        </br>
        <span> %completitud total : ${Math.floor(objStudentWithStats.stats.percent)}</span>
        <span> % de ejercicios autocorregidos completados : </span>
        <span> % de quizzes completados : </span>
        <span> puntuación promedio en quizzes completados : </span>
        <span> % de lecturas completadas : </span>
        
       </p>
        
    </div>`
  });
  sectionMain.innerHTML=template;
 
 
}



const cohortSelected=(valueCohort,dataCohorts)=>{
  dataCohorts.forEach(objCohort=>{
    if(objCohort.id===valueCohort){
      options.cohort=objCohort;
    }
  })
}

const progressOfCohortSelected=(valueCohort,objProgress)=>{
  options.cohortData.progress=objProgress;
  let studentsWithStats = processCohortData(options);
  showAll(studentsWithStats)
 }

const usersOfCohortSelected=(valueCohort,arrUsers)=>{
  options.cohortData.users=arrUsers;
  
 getData(valueCohort,`https://api.laboratoria.la/cohorts/${valueCohort}/progress`,progressOfCohortSelected);
}




selectCampuses.addEventListener('change',event=>{
  const valueCampus= event.target.value//text.content
  getData(valueCampus,'https://api.laboratoria.la/cohorts',showCohorts )
 
})

selectCohort.addEventListener('change', e => {
  const valueCohort=e.target.value;
  //console.log(valueCohort);
  getData(valueCohort,`https://api.laboratoria.la/cohorts`,cohortSelected);
  getData(valueCohort,`https://api.laboratoria.la/cohorts/${valueCohort}/users`,usersOfCohortSelected);
})

searchInput.addEventListener('keyup',e=>{
  const valueInput=e.target.value;
  options.search = valueInput;
  
  const userfilter = processCohortData(options);
  showAll(userfilter);

})



let order=document.getElementById('order');
let direction=document.getElementById('direction');
let btnOrder=document.getElementById('btnOrder');



 

/*seleccionecohort.addEventListener('change',(event)=>{

  getData((data)=>{
    const cohortsGeneral=data[0];
    const usersGeneral=data[1];
    const progressGeneral=data[2];

    let cohortSelected=cohortsGeneral.filter(function( cohort ) {
      return cohort.id == event.target.value;
    });
  
    let usersOfCohortSelected=usersGeneral.filter(function( users ) {
      return users.signupCohort == event.target.value;
    });

    let studentSelected=usersOfCohortSelected.filter(function( user ) {
      return user.role === 'student';

    });
    let studentSelectedId=studentSelected.filter(function( user ) {
      return user.id ;

    });
    console.log(studentSelectedId);
    let progressSelected=Object.keys(progressGeneral[user.id]).forEach((ele)=>{
      if(progress[user.id].intro.hasOwnProperty('percent')){
        let answer=progress[user.id].intro;
        
        
      }
         
       
       
     
   
    //console.log(usersGeneral);
    //console.log(usersOfCohortSelected);
    //console.log(studentOfcohortSelected);
    const options={
      cohort:cohortSelected,
      cohortData:{
        users:studentSelected,
        progress:progressSelected
      },
      orderBy:'',
      orrderDirection:'',
      search:''

    }

    
    let studentOfCohortSelected=Object.keys(progressGeneral);function( progress ) {
      return progress.role == 'student';
    });
    console.log(studentOfCohortSelected);
    

    
    
    
  })
  
});
*/




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
