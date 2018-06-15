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

const fileUsers = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const infoAlumnas = document.getElementById('infoAlumnas');

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

