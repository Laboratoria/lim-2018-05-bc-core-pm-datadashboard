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
        let completed = 0;
        let scoreSum = 0;
        let scoreAvg = 0;
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
                        case "practice":
                           const lessonsExercise=partsOfUnits.filter(objLesson=>objLesson.type==="practice" && objLesson.hasOwnProperty("exercises"));
                           //console.log(lessonsExercise);
                           lessonsExercise.forEach((objExercise)=>{
                              //console.log(objExercise.completed);
                              completed+=objExercise.completed;
                              
                            });
                            total+=lessonsExercise.length;
                           break;//rompe el ciclo que esta ocurriendo
                        case "read":
                           const lessonsRead=partsOfUnits.filter(objLesson=>objLesson.type==="read");
                           //console.log(lessonsRead);
                           lessonsRead.forEach((objRead)=>{
                              //console.log(objRead.completed);
                              completed+=objRead.completed;
                            });
                           total+=lessonsRead.length;
                           break;
                        case "quiz":
                            const lessonsQuizzes=partsOfUnits.filter(objLesson=>objLesson.type==="quiz");
                            //console.log(lessonsQuizzes);
                            lessonsQuizzes.forEach((objQuiz)=>{
                              completed+=objQuiz.completed;
                              if(objQuiz.hasOwnProperty('score')){
                                scoreSum+=objQuiz.score;
                              }
                            })
                            total+=lessonsQuizzes.length;
                            
                           break;
                        default:
                            
                          break;
                    }
                        
                })


                
            }
        });
        
        let answer= {};
        if(completed!=0){
            answer.total=total;
            answer.completed=completed;
            answer.percent=Math.round(completed*100/total);
        }else{
            
            answer.completed=0;
            answer.percent=0;
        }
            
        if(type==="quiz"){
            if(completed!=0){
             answer.scoreSum=scoreSum;
             answer.scoreAvg=Math.round(scoreSum/completed);
            }else{
             answer.scoreAvg=0;
            }
        }
        return answer;


    };

    let studentsWithStats=students.map(objStudent=>{
       let usersWithStats={
            name:objStudent.name,
            stats:{
                percent:calculatePercent(objStudent),
                exercises:calculate(objStudent,"practice"),
                reads:calculate(objStudent,"read"),
                quizzes:calculate(objStudent,"quiz")
            }
        
        }
        return usersWithStats
    });
    return studentsWithStats;
};
window.sortUsers = (users, orderBy, orderDirection) => {
    //Orderby y orderDirection por nombre:
    if(orderBy === "name")
    {
     if(orderDirection === "asc")
     {
        users.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) 
            return -1 
        if (a.name.toLowerCase() > b.name.toLowerCase())
            return 1
        return 0 
        })
     }
     if(orderDirection === "desc")
     {
        users.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) 
            return 1
        if (a.name.toLowerCase() > b.name.toLowerCase())
            return -1
        return 0 
        })
     }  
    } 
    //Orderby y orderDirection por total:
    if(orderBy === "total")
    {
      if(orderDirection === "asc")
      {
        users.sort((a, b) => {
        return a.stats.percent - b.stats.percent 
        })
      }
      if(orderDirection === "desc")
      {
        users.sort((a, b) => {
        return b.stats.percent - a.stats.percent 
        })
      }
    }   
    //Orderby y orderDirection por Ejercicios:
    if(orderBy === "exercise")
    {
      if(orderDirection === "asc")
      {
        users.sort((a, b) => {
        return a.stats.exercises.completed - b.stats.exercises.completed; 
        })
      }
      if(orderDirection === "desc")
      {
        users.sort((a, b) => {
        return b.stats.exercises.completed - a.stats.exercises.completed
        })
      }
    }   
    if(orderBy === "quizzes")
    {
      if(orderDirection === "asc")
      {
        users.sort((a, b) => {
        return a.stats.quizzes.completed - b.stats.quizzes.completed; 
        })
      }
      if(orderDirection === "desc")
      {
        users.sort((a, b) => {    
        return b.stats.quizzes.completed - a.stats.quizzes.completed 
        })
      }
    } 
    if(orderBy === "quizpoints")
    {
      if(orderDirection === "asc")
      {
        users.sort((a, b) => {
        return a.stats.quizzes.scoreAvg - b.stats.quizzes.scoreAvg; 
        })
      }
      if(orderDirection === "desc")
      {
        users.sort((a, b) => {    
        return b.stats.quizzes.scoreAvg - a.stats.quizzes.scoreAvg 
        })
      }
    }   
    //Orderby y orderDirection por Lecturas:
    if(orderBy === "reads")
    {
      if(orderDirection === "asc")
      {
        users.sort((a, b) => {
        return a.stats.reads.completed - b.stats.reads.completed; 
        })
      }
      if(orderDirection === "desc")
      {
        users.sort((a, b) => {    
        return b.stats.reads.completed - a.stats.reads.completed 
        })
      }
    } 
    return users;
};
window.filterUsers=(users,search)=>{
    let searchingName = users.filter(user => user.name.toUpperCase().indexOf(search.toUpperCase()) > -1);
    return searchingName;
};
window.processCohortData=(options)=>{
    let courses=Object.keys(options.cohort.coursesIndex);
    
 
    let studentWithStats=computeUsersStats(options.cohortData.users,options.cohortData.progress,courses);
    let sortStu=sortUsers(studentWithStats,options.orderBy,options.orderDirection);
    let filterStu=filterUsers(sortStu,options.search);
    
    

    return filterStu;
}