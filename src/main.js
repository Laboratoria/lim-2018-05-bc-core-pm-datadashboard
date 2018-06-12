fetch("http://127.0.0.1:5500/dataDashboard/lim-2018-05-bc-core-pm-datadashboard/data/cohorts.json")
    .then(function(cohorts){
        return cohorts.json();
    })
    .then(function(cohorts){
    })



fetch("http://127.0.0.1:5500/dataDashboard/lim-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/progress.json")
    .then(function(progress){
        return progress.json();
    })
    .then(function(progress){  
    })

fetch("http://127.0.0.1:5500/dataDashboard/lim-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json")
    .then(function(users){
        return users.json();
    })
    .then(function(users){

    })
