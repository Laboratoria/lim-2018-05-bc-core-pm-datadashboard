window.computeUserStats = (users, progress, courses) => {
    
    const exercisesTotal = 0;
    const exercisesCompleted = 0;
    const exercisesPercent = 0;
    const exercisesReads = 0

    
    
    
        let stats = {
           /* percent: '',*/
            exercises: {
                total: 0,
                completed: 0,
                percent: 0,
                reads: 0,
            }/*,
            reads: {
                total: '',
                completed: '',
                percent: '',
                reads: '',
            },
            quizzes: {
                total: '',
                completed: '',
                percent: '',
                reads: '',  
                scoreSum: '',
                scoreAvg: ''
            }*/
        
        

    }
    user[i].stats = stats;

    
}

window.sortUsers = (users, orderBy, orderDirection) => {

}

window.filterUsers = (users, search) => {

}


window.processCohortData = (options) => {

const user = options.cohortData.users;
const progress = options.cohortData.progress;
const courses = options.cohortData.coursesIndex;

 const computedUser = computeUserStats(user,progress,courses);

 sortUsers(computedUser,);
 filterUsers(computedUser,);

}
