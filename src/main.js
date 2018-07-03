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

menuCourses.addEventListener('click', showCourses);

// -----SQUADS-----

const showSquads = () => {
    console.log('Aquí irían los squads');
}

menuSquads.addEventListener('click', showSquads);