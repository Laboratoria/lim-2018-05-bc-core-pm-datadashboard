// -----MENU DESPLEGABLE-----
let menuButton = document.getElementById('btn-menu'),
    menuGeneral = document.getElementById('btn-gral'),
    menuStudents = document.getElementById('btn-students'),
    menuCourses = document.getElementById('btn-couses'),
    menuSquads = document.getElementById('btn-squads');

const showMenu = () => {
    let menu = document.getElementById('menu');
    if(menu.classList.contains('hidden-menu')){
        // console.log('aquí estoy');
        menu.classList.remove('hidden-menu');
        menu.classList.add('show-menu');
    }
    else{
        // console.log('NO toy');
        menu.classList.remove('show-menu');
        menu.classList.add('hidden-menu');
    }    
}
menuButton.addEventListener('click', showMenu); 

// -----GENERAL-----

const showGeneral = () => {
    console.log('Muestra general');
}

menuGeneral.addEventListener('click', showGeneral);

// -----ESTUDIANTES-----
const showStudents = () => {
    console.log('Aquí alumnas');
}

menuStudents.addEventListener('click', showStudents);

// -----CURSOS-----

const showCourses = () => {
    console.log('Los cursos van aquí');
}

<<<<<<< HEAD
const showStudent = (users) => {
      users = users.filter(users => users.role === 'student')
      for (user of users) {
            let containerStudent = document.createElement('article');
            let photoStudent = document.createElement('img');
            let nameStudent = document.createElement('h6');
            let img = 'img/girl.png';
            photoStudent.setAttribute('src', img);;
            nameUser = user.name;
            nameStudent.textContent = nameUser;
            infoStudent.textContent = 'Ver Informe';
            containerStudent.appendChild(photoStudent);
            containerStudent.appendChild(nameStudent);
            containerStudent.appendChild(infoStudent);
            studentContainer.appendChild(containerStudent);
      }
}
=======
menuCourses.addEventListener('click', showCourses);
>>>>>>> d0d28981b7c80f080d4bdff62c90c55015ed6a96

// -----SQUADS-----

const showSquads = () => {
    console.log('Aquí irían los squads');
}

<<<<<<< HEAD
btnProgress.addEventListener('click', () => {
      menuStudent.style.display = 'none';
      menuGeneral.style.display = 'none';
      menuProgress.style.display = 'block';
})
=======
menuSquads.addEventListener('click', showSquads);
>>>>>>> d0d28981b7c80f080d4bdff62c90c55015ed6a96
