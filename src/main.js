const form = document.getElementById("search-form");
const searchField = document.getElementById("search-keyword");
const resultBox = document.getElementById("container");
let searchedForText;

const listStudents = document.querySelector("ul");
var botonDeInicio = document.querySelector('button');


botonDeInicio.onclick = function () {
fetch("../data/cohorts/lim-2018-03-pre-core-pw/users.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for(let i=0; i<data.length; i++){
            let students = document.createElement("li");
            students.innerHTML = data[i].name + " ";
            listStudents.appendChild(students);
        }
        //document.write("1. "+ data[0].name + " ");
        //document.write("2. "+data[1].name);
        })
    ;
    }
    /*  lista completa de los readyStatevalores está documentada en XMLHTTPRequest.readyState y es la siguiente:
0 (sin inicializar) o ( solicitud no inicializada )
1 (carga) o ( conexión al servidor establecida )
2 (cargado) o ( solicitud recibida )
3 (interactivo) o ( solicitud de procesamiento )
4 (completo) o ( solicitud finalizada y la respuesta está lista )
*/ 
fetch ("../data/cohorts/lim-2018-03-pre-core-pw/progress.json" )
        .then(function(progress){
        return progress.json();
        })
        .then(function(progress){
            console.log(progress);
        });

fetch ("../data/cohorts.json")
        .then(function(cohorts){
        return cohorts.json();
        })
        .then(function(cohorts){
        console.log(cohorts);
        });

/*form.addEventListener("submit", function(e){
    e.preventDefault();
    resultBox.innerHTML="";
    searchedForText = searchField.value;
    getNews();
});*/
