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
const infoAlumnas = document.getElementById('listStudents');
const cargar = document.getElementById('cargar');
const selectUsers = document.getElementById('users');

cargar.addEventListener('click', () => {
    loadStudents();
});



