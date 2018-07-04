window.computeUsersStats=(users,progress,courses)=>{
    let students=users.filter(objUser=>objUser.role==='student');
    //console.log(students);

    const calculatePercent=(students)=>{
        let percent=0;
        //arrcourses
        courses.forEach(course => {
            const progressOfUsers= progress[students.id];
            //console.log(progressOfUsers);
            if(progressOfUsers.hasOwnProperty(course)) {
                percent +=progressOfUsers[course].percent;
            };           
            //console.log(percent);
        });
        return percent/courses.length;
    };
    const calculate=(students,type)=>{


    };

    let studentsWithStats=students.map(objStudent=>{
        let usersWithStats={
            stats:{
                percent:calculatePercent(objStudent),
                exercises:calculate(objStudent),
                reads:calculate(objStudent),
                quizzes:calculate(objStudent)
            }
        }
    })
}

window.processCohortData=(options)=>{
    let courses=Object.keys(options.cohort.coursesIndex);
    //console.log(courses);
    let usersCohort=options.cohortData.users;
    let progressCohort=options.cohortData.progress;
    let students=computeUsersStats(usersCohort,progressCohort,courses);
}