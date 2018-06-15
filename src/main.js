/* const computeUsersStats = (users, progress, courses) => {

    const usersWithStats = {
        stats:{}
    }
} */
//const infoAlumnas = document.getElementById('infoAlumnas');
//const cargar = document.getElementById('cargar');

/*cargar.addEventListener('click', () => {
    let output = '';
    for(let i = 0; i<users.length; i++){
        //if(users[i].role == 'student'){
            output += '<tr><td>'+users[i].name+'</tr></td>';
        //}  
    }
    infoAlumnas.innerHTML = output;
});*/

console.log(user);

const fileUsers = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const infoAlumnas = document.querySelector('#listadoAlumnas');

fetch(fileUsers).then(function(response) {
    return response.json();
})
.then(json => {
    let alumnas = json;
    for(let i = 0; i < alumnas.length; i++){
        if(alumnas[i].role == 'student'){
            const element = document.createElement('p'); //crea un <p>
            const contenidoElement = document.createTextNode(alumnas[i].name); //

            element.appendChild(contenidoElement);
            infoAlumnas.appendChild(element);
        }  
    }
});

const selectElement = document.getElementById('sedes');


fetch('../data/cohorts.json')
 .then(response => response.json())
 .then(json => {
    const sedes = json;
    console.log(sedes.length);
    for(let i = 0; i < sedes.length; i ++) {
        const optionElements = document.createElement('option');
        const contenidoOption = document.createTextNode(sedes[i].id);
        optionElements.appendChild(contenidoOption);
        console.log(sedes[i].id);
        selectElement.appendChild(optionElements);
    }
 })
 .catch((err) => {
   // algo salió mal...
   console.error(err);
 });

