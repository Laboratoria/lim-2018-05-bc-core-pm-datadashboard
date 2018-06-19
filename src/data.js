//Guardamos las etiquetas en constantes porsiacaso cambian
const urlJsonUsers = '../data/cohorts/lim-2018-03-pre-core-pw/users.json'
const urlJsonProgess = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'
const urlJsonCohorts = '../data/cohorts.json'

//Creamos variables como arrays vacíos
let userArray = []
let usersWithStats = []

let progress = new Object;
let percentObject

//Creamos constantes para traer objetos Json
const dataBase = () => {
  fetch(urlJsonUsers)
    .then(response => response.json())
    .then(response => {
      for (i = 0; i < response.length; i++) {
        userArray.push(response[i]);
      }

    })

}
dataBase();

const dataProgress = () => {
  fetch(urlJsonProgess)
    .then(response => response.json())
    .then(response => {
      percentObject = response
    })
}
dataProgress();

let computeProgress = () => {
  for (var key in percentObject) {
    if (percentObject.hasOwnProperty(key)) {
      getPercent = percentObject[key].intro.percent;
      progress[key] = getPercent;
    }
  }

}

let computeUsersStats = (users, progress, courses) => {
  usersWithStats.stats;

}

computeUsersStats();
