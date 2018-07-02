
window.computeUsersStats = (users, progress, courses) => {
  let stats;
  let statsPercent = 0;
  let statsTotal = 0;
  let exercisesTotal = 0;
  let exercisesComplete = 0;
  let quizzesTotal = 0;
  let quizzesComplete = 0;
  let scoreSum = 0;
  let readsTotal = 0;
  let readsComplete = 0;

  let usersWithStats = users.map(
    user => {
      stats = {
        percent: 0,
        total: 0,
        exercises: {
          total: 0,
          completed: 0,
          percent: 0
        },
        quizzes: {
          total: 0,
          completed: 0,
          percent: 0,
          scoreSum: 0,
          scoreAvg: 0
        },
        reads: {
          total: 0,
          completed: 0,
          percent: 0
        }
      }
      let userID = user.id;
      let progressUser = progress[userID];
      
      courses.forEach(course => {

        if (progressUser && progressUser[course]) {
          statsPercent += statsPercent + progressUser[course].percent;
          statsTotal++;

          let units = progressUser[course].units
          for (unit in units) {
            let parts = units[unit].parts
            for (part in parts) {
              let exercises = parts[part].exercises;

              for (exercise in exercises) {
                exercisesTotal++;
                if (exercises[exercise].completed === 1) {
                  exercisesComplete++
                }
              }

              if (parts[part].type === 'quiz') {
                quizzesTotal++;
                if (parts[part].completed === 1 && parts[part].hasOwnProperty('score')) {
                  scoreSum += scoreSum + parts[part].score;
                  quizzesComplete++;
                }
              }

              if (parts[part].type === 'read') {
                readsTotal++;
                if (parts[part].completed === 1) {
                  readsComplete++;
                }
              }
            }

            // Se calculan los promedios basados en los totales y acumuladores
            if (exercisesTotal > 0) {
              stats.exercises.percent = Math.round((exercisesComplete / exercisesTotal) * 100);
            }
            else {
              stats.exercises.percent = 0;
            }

            if (quizzesTotal > 0) {
              stats.quizzes.percent = Math.round((quizzesComplete / quizzesTotal) * 100);
            }
            else {
              stats.quizzes.percent = 0;
            }

            if (quizzesComplete > 0) {
              stats.quizzes.scoreAvg = Math.round(scoreSum / quizzesComplete);
            }
            else {
              stats.quizzes.scoreAvg = 0;
            }

            if (readsTotal > 0) {
              stats.reads.percent = Math.round((readsComplete / readsTotal) * 100);
            }
            else {
              stats.reads.percent = 0;
            }

          }
        }

        if (statsTotal > 0) {
          statsPercent = Math.round(statsPercent / statsTotal);
        }
        else {
          statsPercent = 0
        }
        user.stats = stats;
        return user
      })
      return usersWithStats;
    })

};

//Creando la funcion sortUsers
window.sortUsers = (users, orderBy, orderDirection) => {
  let sorted = users;

  if (orderBy === 'Nombre') {
    if (orderDirection === 'ASC') {
      sorted = users.sort((a, b) => {
        a.name.localeCompare(b.name)
      })
    }
    if (orderDirection === 'DESC') {
      sorted = users.sort((a, b) => {
        a.name.localeCompare(b.name) * -1
      })
    }
  }

  if (orderBy === 'Porcentaje de completitud total') {
    if (orderDirection === 'ASC') {
      sorted = users.sort((a, b) => {
        a.stats.percent - b.stats.percent
      })
    }
    if (orderDirection === 'DESC') {
      sorted = users.sort((a, b) => {
        a.stats.percent - b.stats.percent
      }).reverse();
    }
  }

  if (orderBy === 'Porcentaje de Ejercicios completados') {
    if (orderDirection === 'ASC') {
      sorted = users.sort((a, b) => {
        a.stats.exercises.percent - b.stats.exercises.percent
      })
    }
    if (orderDirection === 'DESC') {
      sorted = users.sort((a, b) => {
        a.stats.exercises.percent - b.stats.exercises.percent
      }).reverse();
    }
  }



  if (orderBy === 'Porcentaje de lecturas completados') {
    if (orderDirection === 'ASC') {
      sorted = users.sort((a, b) => {
        a.stats.reads.percent - b.stats.reads.percent
      })
    }
    if (orderDirection === 'DESC') {
      sorted = users.sort((a, b) => {
        a.stats.reads.percent - b.stats.reads.percent
      }).reverse();
    }
  }
  return sorted;
};

//Creando la funcion filterUsers
window.filterUsers = (users, search) => {
  return users.filter(user => {
    return user.name.toLowerCase().indexOf(search.toLowerCase()) >= -1
  })
};

//Creando la funcion processCohortData
window.processCohortData = (options) => {
  let courses = [];
  for (course in options.cohort.coursesIndex) {
    courses.push(course);
  }
  computeUser = computeUsersStats(options.cohortData.users, options.cohortData.progress, courses);
  sortUser = sortUsers(computeUser, options.orderBy, options.orderDirection);
  filterUser = filterUsers(sortUser, options.search);
  return filterUser;
};