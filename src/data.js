window.computeUsersStats = (users, progress, courses) => {

    const usersWithStats = users.map(user => {
        
        const userID = user.id;

        let percent = 0;
        let exercisesTotal = 0;
        let exercisesCompleted = 0;
        let exercisesPercent = 0;
        let readTotal = 0;
        let readCompleted = 0;
        let readPercent = 0;
        let quizzesTotal = 0;
        let quizzesCompleted = 0;
        let quizzesPercent = 0;
        let quizzesScoreSum = 0;
        let quizzesScoreAvg = 0;

        if (user.role === 'student' && JSON.stringify(progress[userID]) !== '{}') {

            for (let course of courses) {//recorrido por curso

                if (progress[userID].hasOwnProperty(course)) {

                    percent += progress[userID][course].percent;

                    const unitsArray = Object.keys(progress[userID][course].units);

                    for (unit of unitsArray) {//recorrido por unidades

                        const partsArray = Object.keys(progress[userID][course].units[unit].parts);;

                        for (part of partsArray) {//recorrido por partes

                            const partObjet = progress[userID][course].units[unit].parts[part];

                            if (partObjet.hasOwnProperty('exercises')) {//ejercicios

                                const exercisesArray = Object.keys(partObjet.exercises);

                                for (exercise of exercisesArray) {

                                    exercisesTotal += 1;

                                    if (partObjet.exercises[exercise].hasOwnProperty('completed')) {

                                        exercisesCompleted += partObjet.exercises[exercise].completed;
                                    }
                                    else {
                                        exercisesCompleted += 0;
                                    }
                                }
                            }
                            else if (partObjet.type == 'read') {//lecturas

                                readTotal += 1;
                                readCompleted += partObjet.completed;
                            }
                            else if (partObjet.type == 'quiz') {//questionarios

                                quizzesTotal += 1;
                                quizzesCompleted += partObjet.completed;

                                if (partObjet.hasOwnProperty('score')) {
                                    quizzesScoreSum += partObjet.score;
                                } else {
                                    quizzesScoreSum += 0;
                                }
                            }
                        }
                    }
                }
            }
            //Calculando los porcentajes - Valida que la división no sea entre cero
            if (courses.length !== 0) { percent = Math.round(percent / (courses.length)) };
            if (exercisesTotal !== 0) { exercisesPercent = Math.round(exercisesCompleted / exercisesTotal * 100); }
            if (quizzesTotal !== 0) { quizzesPercent = Math.round(quizzesCompleted / quizzesTotal * 100); }
            if (readTotal !== 0) { readPercent = Math.round(readCompleted / readTotal * 100); }
            if (quizzesCompleted !== 0) { quizzesScoreAvg = Math.round(quizzesScoreSum / quizzesCompleted); }
        }
        let stats = {
            percent: percent,
            exercises: {
                total: exercisesTotal,
                completed: exercisesCompleted,
                percent: exercisesPercent,
            },
            reads: {
                total: readTotal,
                completed: readCompleted,
                percent: readPercent,
            },
            quizzes: {
                total: quizzesTotal,
                completed: quizzesCompleted,
                percent: quizzesPercent,
                scoreSum: quizzesScoreSum,
                scoreAvg: quizzesScoreAvg
            }
        }

        user.stats = stats;

        return user;

    })

    return usersWithStats;
};

window.sortUsers = (users, orderBy, orderDirection) => {

    const capitalizedUser = users.map(user => {

        if (user.name === '') { user.name = 'Estudiante no registró nombre' };//Si el estudiando no tiene nombre

        user.name = user.name.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());//Convertir a minúscula y luego capitalizar

        return user;
    });

    
    let compare;

    const orderByArray = orderBy.split(' ');

    if (orderByArray.length == 1) {

        if (orderByArray[0] === 'name') {//'name' --> para nombre estudiante
            if (orderDirection === 'ASC') {
                compare = ((a, b) => {
                    if (a[orderBy] > b[orderBy]) { return 1; }
                    else if (a[orderBy] < b[orderBy]) { return -1; }
                    else return 0;
                });
            }
            else if (orderDirection === 'DESC') {
                compare = ((a, b) => {
                    if (a[orderBy] < b[orderBy]) { return 1; }
                    else if (a[orderBy] > b[orderBy]) { return -1; }
                    else return 0;
                });
            }
        }
        else {//'percent' --> para porcentaje general
            if (orderDirection === 'ASC') {
                compare = ((a, b) => {
                    if (a.stats[orderBy] > b.stats[orderBy]) { return 1; }
                    else if (a.stats[orderBy] < b.stats[orderBy]) { return -1; }
                    else return 0;
                });
            }
            else if (orderDirection === 'DESC') {
                compare = ((a, b) => {
                    if (a.stats[orderBy] < b.stats[orderBy]) { return 1; }
                    else if (a.stats[orderBy] > b.stats[orderBy]) { return -1; }
                    else return 0;
                });
            }
        }
    }
    //'exercises percent', 'exercises completed', 'exercises total' --> para exercises
    //'reads percent', 'reads completed', 'reads total' --> para reads
    //'quizzes percent', 'quizzes completed', 'quizzes total', 'quizzes scoreSum', 'quizzes scoreAvg' --> para quizzes
    else {
        if (orderDirection === 'ASC') {
            compare = ((a, b) => {
                if (a.stats[orderByArray[0]][orderByArray[1]] > b.stats[orderByArray[0]][orderByArray[1]]) { return 1; }
                else if (a.stats[orderByArray[0]][orderByArray[1]] < b.stats[orderByArray[0]][orderByArray[1]]) { return -1; }
                else return 0;
            });
        }
        else if (orderDirection === 'DESC') {
            compare = ((a, b) => {
                if (a.stats[orderByArray[0]][orderByArray[1]] < b.stats[orderByArray[0]][orderByArray[1]]) { return 1; }
                else if (a.stats[orderByArray[0]][orderByArray[1]] > b.stats[orderByArray[0]][orderByArray[1]]) { return -1; }
                else return 0;
            });
        }
    }

    const sortUsersArray = capitalizedUser.sort(compare);

    return sortUsersArray;
};

window.filterUsers = (users, search) => {
    if (search !== '') {

        const filterUsersArray = users.filter(user => {

            return user.name.toUpperCase().indexOf(search.toUpperCase()) !== -1;//Filtrar (case insensitive)
        })
        return filterUsersArray;

    } else {
        return users;
    }
};

window.processCohortData = (options) => {

    const user = options.cohortData.users;
    const progress = options.cohortData.progress;
    const courses = Object.keys(options.cohort.coursesIndex);
    const orderBy = options.orderBy;
    const orderDirection = options.orderDirection;
    const search = options.search;

    const computedUser = computeUsersStats(user, progress, courses);

    const sortResulted = sortUsers(computedUser, orderBy, orderDirection);

    const filterResulted = filterUsers(sortResulted, search);

    return filterResulted;
};
