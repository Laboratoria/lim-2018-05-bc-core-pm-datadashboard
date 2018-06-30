
/*const buttonSiguient = document.getElementById("map");

buttonSiguient.addEventListener("click" , ()=>{
  document.getElementById("map").style.display = "none";
  document.getElementById("lista").style.display = "block";
  document.getElementById("principal").style.display = "block";
  document.getElementById("secundario").style.display = "block";
}); */

const extractJSON = (url, callback) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => callback(data))
        .catch((err) => console.log(err));
};

const cohortsData = document.getElementById("cohorts");
extractJSON("../data/cohorts.json", (data) => {
        for (let i of data) {
		  console.log(i);
      if(i.id.substr(0,3)=== 'lim'){
     const liElements = document.createElement('li');
     liElements.textContent= i.id;
     cohortsData.appendChild(liElements);
  		}
    }});


const usersData = document.getElementById("users");
extractJSON("../data/cohorts/lim-2018-03-pre-core-pw/users.json", (data) =>{
for (let u of data) {
console.log(u);
const optionsElemntsU=document.createElement('option');
const contenidoOptionsU= document.createTextNode(u.name);
optionsElemntsU.appendChild(contenidoOptionsU);
usersData.appendChild(optionsElemntsU);
}
});

const progressData = document.getElementById('progress')
extractJSON('../data/cohorts/lim-2018-03-pre-core-pw/progress.json', (data) =>{
for (let i of data) {
console.log(i);
const optionsElemntsP=document.createElement('option');
const contenidoOptionsP= document.createTextNode(progress[users[i].id].intro.units['02-variables-and-data-types'].parts['04-guided-exercises'].completed);
optionsElemntsP.appendChild(contenidoOptionsP);
progressData.appendChild(optionsElemntsP);
}
});
