//llamamos a los elementos
let signIn = document.getElementById('signIn');
let signUp = document.getElementById('signUp');
let pageOne =document.getElementById('pageOne');
const header=document.querySelector('header');
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
    header.style.display='none';
    
  }else if(username==='Ale'&& password==='lab'){
    pageOne.style.display='block';
    header.style.display='none';
    
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


const cohortSelected=(valueCohort,dataCohorts)=>{
  dataCohorts.forEach(objCohort=>{
    if(objCohort.id===valueCohort){
      options.cohort=objCohort;
    }
  })
}


const showAll=(studentsWithStats)=>{
  let template='';
  studentsWithStats.forEach((objStudentWithStats)=>{
    template+=
    `<div class="container">
      <img class="student" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvXsKRwlFWrVpXuA2E4RyQozkk76lvCwh5QP5IQEt2D7q-iy7vsQ" alt="Avatar" class="image" >
      <div class="text-block">
        <p style= "font-weight:bold;">${objStudentWithStats.name}</p></br>
      </div>
      <div class="text">
        <ul >
         <li> COMPLETITUD TOTAL : ${(objStudentWithStats.stats.percent)}%</li>
         <li> EJERCICIOS AUTOCORREGIDOS COMPLETADOS : ${(objStudentWithStats.stats.exercises.percent)}%</li>
         <li> QUIZZES COMPLETADOS : ${(objStudentWithStats.stats.quizzes.percent)}%</li>
         <li> PUNTUACIÓN PROMEDIO EN QUIZZES COMPLETADOS : ${(objStudentWithStats.stats.quizzes.scoreAvg)}</li>
         <li> LECTURAS COMPLETADAS : ${(objStudentWithStats.stats.reads.percent)}%</li>
        </ul>
      </div>  
    </div>`
  });
  sectionMain.innerHTML=template;
 
 
}

const progressOfCohortSelected=(valueCohort,objProgress)=>{
  options.cohortData.progress=objProgress;
  let studentsWithStats = processCohortData(options);
  showAll(studentsWithStats);
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
  
  const studentsStatsFilter = processCohortData(options);
  showAll(studentsStatsFilter);

})

let order=document.getElementById('order');
order.addEventListener('change',ev=>{
  const valueOrder=ev.target.value;
  options.orderBy=valueOrder;
});

let direction=document.getElementById('direction');
direction.addEventListener('change', evt=>{
  const valueDirect=evt.target.value;
  options.orderDirection=valueDirect;
});

let btnOrder=document.getElementById('btnOrder');
btnOrder.addEventListener('click',()=>{
  const studentsStatsSort=processCohortData(options);
  showAll(studentsStatsSort); 
})







     
