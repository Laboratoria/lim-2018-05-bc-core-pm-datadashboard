const fileCohort = '../data/cohorts.json';
const fileProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const fileUsers = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

const urls = [fileCohort, fileProgress, fileUsers];
let cohorts = [];
let progress = [];
let users = [];

const loadStudents = () => {
    //Promise.all espera que todos los fetch terminen
    Promise.all(
        urls.map(
            url => fetch(url)
        )
    )
    .then(
        //Convertir la data recibida de los tres fetch a texto
        response => Promise.all(
            response.map(
                data => data.text()
            )
        )
    )
    .then(
        //Utilizamos la data de la forma deseada
        response => {
            cohorts = JSON.parse(response[0]); //convierte de texto a objecto JSON
            progress = JSON.parse(response[1]);
            users = JSON.parse(response[2]);

            let students = users.filter(
                //user => user.role == 'student'
                user => user.role == selectUsers.value
            );
            /* console.log(users);
            console.log(students);
            console.log(progress['DH6NiODCdYM9ick0YQLf54cfHMv2']); */
            infoAlumnas.innerHTML = '';
            students.map(
                student => {
                    const row = document.createElement('tr');
                    const cellId = document.createElement('td');
                    const cellName = document.createElement('td');

                    const id = document.createTextNode(student.id);
                    const name = document.createTextNode(student.name);
        
                    cellId.appendChild(id);
                    cellName.appendChild(name);

                    row.appendChild(cellId);
                    row.appendChild(cellName);

                    listStudents.appendChild(row);
                }
            );
        }
    );
}

const loadStats = () => {
    //Promise.all espera que todos los fetch terminen
    Promise.all(
        urls.map(
            url => fetch(url)
        )
    )
    .then(
        //Convertir la data recibida de los tres fetch a texto
        response => Promise.all(
            response.map(
                data => data.text()
            )
        )
    )
    .then(
        //Utilizamos la data de la forma deseada
        response => {
            cohorts = JSON.parse(response[0]);
            progress = JSON.parse(response[1]);
            users = JSON.parse(response[2]);

            let courses = [];
            cohorts.map(
                cohort => {
                    if(cohort.id == 'lim-2018-03-pre-core-pw'){
                        courses.push(cohort.coursesIndex);
                    }
                }
            );
            console.log(courses);
            computeUsersStats(users, progress, courses);
        }
    )
    .catch((err) => {
        // algo salió mal...
        console.error(err);
      });
}

const computeUsersStats = (users, progress, courses) => {
    let usersWithStats = {};
    users.map(
        user => {
            let id = user.id;
            let courseName = courses
            //Primero declarar el objeto stats y luego trabajar con sus valores
            let stats = {
                percent: progress[id].intro.percent
            };
            
        }
    );
}

