const infoAlumnas = document.getElementById('listStudents');
const cargar = document.getElementById('cargar');
const selectUsers = document.getElementById('users');

cargar.addEventListener('click', () => {
    loadStudents();
});

