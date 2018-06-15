fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
// fetch('http://http://127.0.0.1:5500/data/cohorts.json')
/* .then(function(response){
    return response.json() ;
})
.then(function(myJson){
    console.log(myJson)
});
 */
.then(response => response.json())
.then(json => {
    const idAndNames = json;

    console.log(idAndNames);
     for(let i=0; i < idAndNames.length; i++){
         const pruebaRecepcion = document.getElementById("pruebaRecepcion");
         const nameList = document.getElementById("nameList");
/*         const names = document.createTextNode(idAndNames[i].id); */ 
        const show= idAndNames[i].name;
        
        pruebaRecepcion.addEventListener("click", () => {
            nameList.innerHTML += show;
        } )

    }
    
});


