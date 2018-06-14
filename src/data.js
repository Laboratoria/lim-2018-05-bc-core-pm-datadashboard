fetch('/data/cohorts.json')
// fetch('http://http://127.0.0.1:5500/data/cohorts.json')
.then(function(response){
    return response.json() ;
})
.then(function(myJson){
});