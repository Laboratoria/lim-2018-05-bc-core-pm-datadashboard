const fileCohort = '../data/cohorts.json';
const fileProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
//const fileUsers = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

let courses = [];

const cohorts = fetch(fileCohort).then(function(response) {
    return response.json();
})
.then(function(data){
    for (let i = 0; i < data.length; i++) {
        courses.push(data[i].coursesIndex);   
    }
});

const progress = fetch(fileProgress).then(function(response) {
    return response.json();
});

const users = fetch(fileUsers).then(function(response) {
    return response.json();
});
