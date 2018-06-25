const selectElement= document.getElementById("Cohorts");
extraerJSON("../data/cohorts.json", (err, json)=> {
  if(err){
    // algo salio mal...
    return console.log();(err);
  }
  const sedes= json;
  console.log(sedes);
  console.log(sedes.length);

  for(let i =0; i< sedes.length; i++){
    if(i>16 && i< 34){
    const optionsElemnts=document.createElement("p");
    const contenidoOptions= document.createTextNode(sedes[i].id);
    optionsElemnts.appendChild(contenidoOptions);
    selectElement.appendChild(optionsElemnts);
    console.log(sedes[i].id);
  }}
})


const selectElementU= document.getElementById("users");
extraerJSON("../data/cohorts/lim-2018-03-pre-core-pw/users.json", (err, json)=> {
  if(err){
    // algo salio mal...
    return console.log();(err);
  }
  const users= json;
  console.log(users);
  console.log(users.length);

  for(let i =0; i< users.length; i++){
    const optionsElemntsU=document.createElement("option");
    const contenidoOptionsU= document.createTextNode(users[i].name);
    optionsElemntsU.appendChild(contenidoOptionsU);
    selectElementU.appendChild(optionsElemntsU);
    console.log(users[i].name);
  }
})


const selectElementP= document.getElementById("progress");
extraerJSON("../data/cohorts/lim-2018-03-pre-core-pw/progress.json", (err, jsonP)=> {
  if(err){
    // algo salio mal...
    return console.error(err);
  }
  const progress= jsonP;
  console.log(progress);
  console.log(progress.length);

  for(let i =0; i< progress.length; i++){
    const optionsElemntsP=document.createElement("option");
    const contenidoOptionsP= document.createTextNode(progress[i].id.intro.units.parts.exercises.completed);
    optionsElemntsP.appendChild(contenidoOptionsP);
    selectElementP.appendChild(optionsElemntsP);
    console.log(progress[i].id.intro.units.parts.exercises.completed);
  }
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
