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


            for (let course of courses) {

                percent += progress[userID][course].percent

                const unitsArray = Object.keys(progress[userID][course].units);

                for (unit of unitsArray) {

                    const partsArray = Object.keys(progress[userID][course].units[unit].parts);;

                    for (part of partsArray) {

                        const partObjet = progress[userID][course].units[unit].parts[part];

                        if (partObjet.hasOwnProperty('exercises')) {
                            const exercisesArray = Object.keys(partObjet.exercises);

                            for (exercise of exercisesArray) {

                                exercisesTotal += 1;

                                if (partObjet.exercises[exercise].hasOwnProperty('completed')) {
                                    exercisesCompleted += partObjet.exercises[exercise].completed;
                                }
                                else {
                                    exercisesCompleted = 0;
                                }

                            }
                        }

                        else if (partObjet.type == 'read') {

                            readTotal += 1;
                            readCompleted += partObjet.completed;
                        }
                        else if (partObjet.type == 'quiz') {

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

            if (courses.length !== 0) { percent = Math.round(percent / (courses.length)) };
            if (exercisesTotal !== 0) { exercisesPercent = Math.round(exercisesCompleted / exercisesTotal * 100); }
            if (quizzesTotal !== 0) { quizzesPercent = Math.round(quizzesCompleted / quizzesTotal * 100); }
            if (readTotal !== 0) { readPercent = Math.round(readCompleted / readTotal * 100); }
            if (quizzesCompleted !== 0) { quizzesScoreAvg = Math.round(quizzesScoreSum / quizzesCompleted); }

            /*console.log('total ' + exercisesTotal);
            console.log('completed ' + exercisesCompleted)
            console.log('percent ' + exercisesPercent);

            console.log('total ' + quizzesTotal);
            console.log('completed ' + quizzesCompleted)
            console.log('percent ' + quizzesPercent);
            console.log('scoreSum ' + quizzesScoreSum);
            console.log('scoreAvg ' + quizzesScoreAvg);

            console.log('total ' + readTotal);
            console.log('completed ' + readCompleted)
            console.log('percent ' + readPercent);*/

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
}

window.sortUsers = (users, orderBy, orderDirection) => {

    let compare;


    if (orderBy === 'name') {

        if (orderDirection === 'ASC') {
            compare = ((a, b) => {
                if (a[orderBy] > b[orderBy]) { return 1; }
                if (a[orderBy] < b[orderBy]) { return -1; }
                return 0;
            });
        }
        else if (orderDirection === 'DESC') {
            compare = ((a, b) => {
                if (a[orderBy] < b[orderBy]) { return 1; }
                if (a[orderBy] > b[orderBy]) { return -1; }
                return 0;
            });
        }
    }
    else {

        if (orderDirection === 'ASC') {

            compare = ((a, b) => {

                if (a.stats[orderBy] > b.stats[orderBy]) { return 1; }
                if (a.stats[orderBy] < b.stats[orderBy]) { return -1; }
                return 0;
            });
        }
        else if (orderDirection === 'DESC') {
            compare = ((a, b) => {
                if (a.stats[orderBy] < b.stats[orderBy]) { return 1; }
                if (a.stats[orderBy] > b.stats[orderBy]) { return -1; }
                return 0;
            });
        }
    }

    sortUsersArray = users.sort(compare);

    return sortUsersArray;


}

window.filterUsers = (users, search) => {
    if (search !== '') {

        const filterUsersArray = users.filter(user => {

            return user.name.toUpperCase().indexOf(search.toUpperCase()) !== -1
        })
        return filterUsersArray;
    } else {
        return users;
    }


}


window.processCohortData = (options) => {

    const user = options.cohortData.users;
    const progress = options.cohortData.progress;
    const courses = Object.keys(options.cohort.coursesIndex);
    const orderBy = options.orderBy;
    const orderDirection = options.orderDirection;
    const search = options.search;

    console.log(orderBy);
    console.log(orderDirection);
    console.log(search);

    const computedUser = computeUsersStats(user, progress, courses);
    const sortResulted = sortUsers(computedUser, orderBy, orderDirection);
    const filterResulted = filterUsers(sortResulted, search);

    return filterResulted;

}