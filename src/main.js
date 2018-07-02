const resultCohortElement = document.getElementById('resultado');
const resultUserElement = document.getElementById('tabla');
const buttonElement = document.getElementById('boton');
const buttonElementFiltro = document.getElementById('filtro');
const inputElement = document.getElementById('input');
const buttonElementOrdenar = document.getElementById('sort');

let orderBy = '';
let orderDirection = '';
let search = '';
let idCohort = '';


const showProcessedData = (resultProcessedData) => {


 for (objetUser of resultProcessedData) {
 const tabla = document.createElement("table");
 const tblBody = document.createElement("tbody");

 if (objetUser.role === 'student') {


 const fila = document.createElement('tr');

 const celda1 = document.createElement("td");
 const celda2 = document.createElement("td");
 const celda3 = document.createElement("td");
 const celda4 = document.createElement("td");
 const celda5 = document.createElement("td");


 const textoCelda1 = document.createTextNode(objetUser.name);
 celda1.appendChild(textoCelda1);

 const textoCelda2 = document.createTextNode(objetUser.stats.exercises.percent);
 celda2.appendChild(textoCelda2);

 const textoCelda3 = document.createTextNode(objetUser.stats.reads.percent);
 celda3.appendChild(textoCelda3);

 const textoCelda4 = document.createTextNode(objetUser.stats.quizzes.percent);
 celda4.appendChild(textoCelda4);

 const textoCelda5 = document.createTextNode(objetUser.stats.percent);
 celda5.appendChild(textoCelda5);


 tblBody.appendChild(celda1);
 tblBody.appendChild(celda2);
 tblBody.appendChild(celda3);
 tblBody.appendChild(celda4);
 tblBody.appendChild(celda5);
 tblBody.appendChild(fila);

 // fila.className('fileClass');
 }

 tabla.appendChild(tblBody);

 resultUserElement.appendChild(tabla);

 tabla.setAttribute("border", "1");
 }

};


const data = (idCohort, orderBy, orderDirection, search) => {

 fetch('https://api.laboratoria.la/cohorts/').then(responseCohort => {

 fetch('https://api.laboratoria.la/cohorts/' + idCohort + '/users').then(responseUser => {

 fetch('https://api.laboratoria.la/cohorts/' + idCohort + '/progress').then(responseProgress => {

 Promise.all([responseCohort.json(), responseUser.json(), responseProgress.json()])
 .then(value => {
 const responseCohortValue = value[0];
 const responseUserValue = value[1];
 const responseProgressValue = value[2];


 console.log(responseCohortValue);
 console.log(responseUserValue);
 console.log(responseProgressValue);

 const dataCohortSelected = responseCohortValue.filter(cohort => cohort.id == idCohort)[0];
 console.log(dataCohortSelected)

 const options = {
 cohort: dataCohortSelected,
 cohortData: {
 users: responseUserValue,
 progress: responseProgressValue
 },
 orderBy: orderBy,
 orderDirection: orderDirection,
 search: search
 };

 const resultProcessedData = processCohortData(options);

 console.log(resultProcessedData)

 showProcessedData(resultProcessedData)

 /*
 const userStudent = user.filter(value => {
 return value.role == 'student'
 })
 
 
 }*/


 })

 })
 })
 })
};


const dataCohort = () => {
 fetch('https://api.laboratoria.la/cohorts/')
 .then(response => {
 return response.json();
 })
 .then(json => {

 const cohortJson = json;

 for (let i = 0; i < cohortJson.length; i++) {

 const cohortContent = document.createElement('div');
 const paragraphContent = document.createElement('div');
 const buttonContent = document.createElement('div');
 const paragraph = document.createElement('p');
 const button = document.createElement('button');
 const paragraphText = document.createTextNode(cohortJson[i].id);
 const buttonText = document.createTextNode('Ingresar')

 paragraph.appendChild(paragraphText);
 paragraphContent.appendChild(paragraph);
 cohortContent.appendChild(paragraphContent);

 button.appendChild(buttonText);
 buttonContent.appendChild(button);
 cohortContent.appendChild(buttonContent);

 resultCohortElement.appendChild(cohortContent);
 button.id = cohortJson[i].id;
 }
 })
}


buttonElement.addEventListener('click', () => { dataCohort(); });

resultCohortElement.addEventListener('click', (event) => {

 if (event.target.nodeName === "BUTTON") {
 console.log(event);

 idCohort = event.target.id;

 console.log(event.target.id);
 resultCohortElement.style.display = 'none'

 orderBy = 'name';
 orderDirection = 'ASC'

 data(idCohort, orderBy, orderDirection, search);
 }
});

buttonElementFiltro.addEventListener('click', () => {

 
 
 orderBy = 'name';
 orderDirection = 'ASC';
 search = inputElement.value;
 resultUserElement.innerHTML = '';


 data(idCohort, orderBy, orderDirection, search);
});

buttonElementOrdenar.addEventListener('click', () => {

 orderBy = 'percent';
 orderDirection = 'DESC';
 search = inputElement.value;
 resultUserElement.innerHTML = '';

 data(idCohort, orderBy, orderDirection, search);
});
