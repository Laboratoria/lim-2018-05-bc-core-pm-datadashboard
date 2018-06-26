const selectElement = document.getElementById("Cohorts");
extraerJSON("../data/cohorts.json", (err, json) => {
 if (err) {
   // algo salio mal...
   return console.log(); (err);
 }
 const sedes = json;
 console.log(sedes);
 
  for(let i =0; i< sedes.length; i++){
   
   
   const liElemnts=document.createElement("li");
   liElements.textContent= sedes[i].id;
   selectElement.appendChild(liElemnts);
  }

 const selectElementU = document.getElementById("users");
 extraerJSON("../data/cohorts/lim-2018-03-pre-core-pw/users.json", (err, json) => {
   if (err) {
     // algo salio mal...
     return console.log(); (err);
   }
   const users = json;
   console.log(users);
      for(let i =0; i< users.length; i++){
       const optionsElemntsU=document.createElement("option");
       const contenidoOptionsU= document.createTextNode(users[i].name);
       optionsElemntsU.appendChild(contenidoOptionsU);
       selectElementU.appendChild(optionsElemntsU);
         
         }

   const selectElementP = document.getElementById("progress");
   extraerJSON("../data/cohorts/lim-2018-03-pre-core-pw/progress.json", (err, jsonP) => {
     if (err) {
       // algo salio mal...
       // return console.error(err);
     }
     const progress = jsonP;
     console.log(progress);
     console.log(progress.length);



     for (let i = 0; i < 5; i++) {

/*         const optionsElemntsP=document.createElement("li");
       const contenidoOptionsP= document.createTextNode(progress[[i].id].intro.units.parts[6].exercises.completed);
       optionsElemntsP.appendChild(contenidoOptionsP);
       selectElementP.appendChild(optionsElemntsP);
       console.log(progress[i].id.intro.units.parts.exercises.completed); */
       console.log(progress[users[i].id].intro.units["02-variables-and-data-types"].parts["04-guided-exercises"].completed);
       


     }
   })

 })

})








/*extractJSON("../data/cohorts.json")

extractJSON("../data/cohorts/lim-2018-03-pre-core-pw/users.json")

extractJSON("../data/cohorts/lim-2018-03-pre-core-pw/progress.json")
const sedes= json;

const optionsElemnts=document.createElement("option");
const contenidoOptions= document.createTextNode(sedes[i].id);
optionsElemnts.appendChild(contenidoOptions);
selectElement.appendChild(optionsElemnts);
console.log(sedes[i].id);
document.getElementById("sedes").appendChild(optionsElemnts);
*/