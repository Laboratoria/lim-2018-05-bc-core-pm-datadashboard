// window.computeUsersStats = (users, progress, courses) => {
//     let usersWithStats = [];
    
//     users.map(
//       user => {
//         let stats = {
//           percent: 0,
//           total: 0,
//           exercises: {
//             total: 0,
//             completed: 0,
//             percent: 0
//           },
//           quizzes: {
//             total: 0,
//             completed: 0,
//             percent: 0,
//             scoreSum: 0,
//             scoreAvg: 0
//           },
//           reads: {
//             total: 0,
//             completed: 0,
//             percent: 0
//           }
//         }
  
//         courses.map(course => {
//           let userID = user.id;
//           let progressUser = progress[userID];
  
//           if (progressUser && progressUser[course]) {
//             stats.percent += progressUser[course].percent;
//             stats.total++;
  
//             let units = progressUser[course].units
//             for (unit in units) {
//               let parts = units[unit].parts
//               for (part in parts) {
  
//                 if (parts[part].type === 'practice') {
//                   stats.exercises.total++;
//                   if (parts[part].completed === 1) {
//                     stats.exercises.completed++;
//                   }
//                 }
  
//                 if (parts[part].type === 'quiz') {
//                   stats.quizzes.total++;
//                   if (parts[part].completed === 1 && parts[part].hasOwnProperty('score')) {
//                     stats.quizzes.scoreSum += stats.quizzes.scoreSum + parts[part].score;
//                     stats.quizzes.completed++;
//                   }
//                 }
  
//                 if (parts[part].type === 'read') {
//                   stats.reads.total++;
//                   if (parts[part].completed === 1) {
//                     stats.reads.completed++;
//                   }
//                 }
//               }
  
//               // Se calculan los promedios basados en los totales y acumuladores
//               if (stats.exercises.total > 0) {
//                 stats.exercises.percent = Math.round((stats.exercises.completed / stats.exercises.total) * 100);
//               }
//               else {
//                 stats.exercises.percent = 0;
//               }
  
//               if (stats.quizzes.total > 0) {
//                 stats.quizzes.percent = Math.round((stats.quizzes.completed / stats.quizzes.total) * 100);
//               }
//               else {
//                 stats.quizzes.percent = 0;
//               }
  
//               if (stats.quizzes.completed > 0) {
//                 stats.quizzes.scoreAvg = Math.round(stats.quizzes.scoreSum / stats.quizzes.completed);
//               }
//               else {
//                 stats.quizzes.scoreAvg = 0;
//               }
  
//               if (stats.reads.total > 0) {
//                 stats.reads.percent = Math.round((stats.reads.completed / stats.reads.total) * 100);
//               }
//               else {
//                 stats.reads.percent = 0;
//               }
  
//             }
//           }
  
//           if (stats.total > 0) {
//             stats.percent = Math.round(stats.percent / stats.total);
//           }
//           else {
//             stats.percent = 0
//           }
//           user.stats = stats;
//         })
//         usersWithStats.push(stats);
//       })
//       return usersWithStats;
//   };
  
//   //Creando la funcion sortUsers
//   window.sortUsers = (users, orderBy, orderDirection) => {
//     let sorted = users;
  
//     if (orderBy === 'Nombre') {
//       if (orderDirection === 'ASC') {
//         sorted = users.sort((a, b) => {
//           a.name.localeCompare(b.name)
//         })
//       }
//       if (orderDirection === 'DESC') {
//         sorted = users.sort((a, b) => {
//           a.name.localeCompare(b.name) * -1
//         })
//       }
//     }
  
//     if (orderBy === 'Porcentaje de completitud total') {
//       if (orderDirection === 'ASC') {
//         sorted = users.sort((a, b) => {
//           a.stats.percent - b.stats.percent
//         })
//       }
//       if (orderDirection === 'DESC') {
//         sorted = users.sort((a, b) => {
//           a.stats.percent - b.stats.percent
//         }).reverse();
//       }
//     }
  
//     if (orderBy === 'Porcentaje de Ejercicios completados') {
//       if (orderDirection === 'ASC') {
//         sorted = users.sort((a, b) => {
//           a.stats.exercises.percent - b.stats.exercises.percent
//         })
//       }
//       if (orderDirection === 'DESC') {
//         sorted = users.sort((a, b) => {
//           a.stats.exercises.percent - b.stats.exercises.percent
//         }).reverse();
//       }
//     }
  
//     if (orderBy === 'Porcentaje de Quizzes completados') {
//       if (orderDirection === 'ASC') {
//         sorted = users.sort((a, b) => {
//           a.stats.quizzes.percent - b.stats.quizzes.percent
//         })
//       }
//       if (orderDirection === 'DESC') {
//         sorted = users.sort((a, b) => {
//           a.stats.quizzes.percent - b.stats.quizzes.percent
//         }).reverse();
//       }
//     }
  
//     if (orderBy === 'Puntuacion Promedio de Quizzes completados') {
//       if (orderDirection === 'ASC') {
//         sorted = users.sort((a, b) => {
//           a.stats.quizzes.scoreAvg - b.stats.quizzes.scoreAvg
//         })
//       }
//       if (orderDirection === 'DESC') {
//         sorted = users.sort((a, b) => {
//           a.stats.quizzes.scoreAvg - b.stats.quizzes.scoreAvg
//         }).reverse();
//       }
//     }
  
//     if (orderBy === 'Porcentaje de lecturas completados') {
//       if (orderDirection === 'ASC') {
//         sorted = users.sort((a, b) => {
//           a.stats.reads.percent - b.stats.reads.percent
//         })
//       }
//       if (orderDirection === 'DESC') {
//         sorted = users.sort((a, b) => {
//           a.stats.reads.percent - b.stats.reads.percent
//         }).reverse();
//       }
//     }
//     return sorted;
//   };
  
//   //Creando la funcion filterUsers
//   window.filterUsers = (users, search) => {
//     return users.filter(user => {
//       return user.name.toLowerCase().indexOf(search.toLowerCase()) >= -1
//     })
//   };
  
//   //Creando la funcion processCohortData
//   window.processCohortData = (options) => {
//     // let courses = [];
//     // for (course in options.cohort.coursesIndex) {
//     //   courses.push(course);
//     // }
  
//     usersWithStats = computeUsersStats(
//       options.cohortData.users,
//       options.cohortData.progress,
//       options.cohort
//     )
  
//   sortUsers(usersWithStats, options.orderBy, options.orderDirection);
//   filterUsers(usersWithStats, options.search);
//     return usersWithStats
//   };
