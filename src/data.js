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
        let total=0;
        let completed=0;
        let percentLesson=0;
        let scoreSum=0;
        let scoreAvg=0;
        courses.forEach((course)=>{
            const progressOfUsers=progress[students.id];
            //console.log(progressOfUsers);
            if(progressOfUsers.hasOwnProperty(course)){
                const units=Object.values(progressOfUsers[course].units);
                //console.log(units);//arrobj
                units.forEach(unit=>{
                    const partsOfUnits=Object.values(unit.parts);
                    //console.log(partsOfUnits);
                    switch (type) {
                        case 'practice':
                           const lessonsExercise=partsOfUnits.filter(objLesson=>objLesson.type==="practice" && objLesson.hasOwnProperty("exercises"));
                           //console.log(lessonsExercise);
                           lessonsExercise.forEach((objExercise)=>{
                              console.log(objExercise.completed);
                              completed+=objExercise.completed
                              total+=lessonsExercise.length;
                            });
                           break;//rompe el ciclo que esta ocurriendo
                        case 'read':
                           const lessonsRead=partsOfUnits.filter(objLesson=>objLesson.type==="read");
                           //console.log(lessonsRead);
                           lessonsRead.forEach((objRead)=>{
                              console.log(objRead.completed);
                              completed+=objRead.completed
                              total+=lessonsRead.length;
                           });
                           break;
                        case 'quiz':
                            const lessonsQuizzes=partsOfUnits.filter(objLesson=>objLesson.type==="quiz"&& objLesson.hasOwnProperty("score"));
                            //console.log(lessonsQuizzes);
                            lessonsQuizzes.forEach((objQuiz)=>{
                            //console.log(objQuiz.completed);
                            //console.log(objQuiz.score);
                              console.log(scoreSum/lessonsQuizzes.length);
                              completed+=objQuiz.completed
                              total+=lessonsQuizzes.length;
                              scoreSum+=objQuiz.score;
                              scoreAvg+=scoreSum/lessonsQuizzes.length;
                              });
                           break;
                        default:
                          break;
                    }
                        
                })


                
            }
        });
        let answer= {
            total:total,
            completed:completed,
            percent:completed*100/total
        };
        if(type==='quiz'){
          answer.scoreSum=scoreSum;
          answer.scoreAvg=scoreAvg;
        }
       return answer;


    };

    let studentsWithStats=students.map(objStudent=>{
       let usersWithStats={
            stats:{
                percent:calculatePercent(objStudent),
                exercises:calculate(objStudent,'practice'),
                reads:calculate(objStudent,'read'),
                quizzes:calculate(objStudent,'quiz')
            }
        
        }
        return usersWithStats
    });
    return studentsWithStats;
}

window.processCohortData=(options)=>{
    let courses=Object.keys(options.cohort.coursesIndex);
    //console.log(courses);
    let usersCohort=options.cohortData.users;
    let progressCohort=options.cohortData.progress;
    let students=computeUsersStats(usersCohort,progressCohort,courses);

    return students;
}