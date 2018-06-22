const selectElement= document.getElementById("sedes");
getJSON("../data/cohorts.json", (err, json)=> {
  if(err){
    // algo salio mal...
    return console.error(err);
  }
  const sedes= json;
  console.log(sedes);
  console.log(sedes.length);

  for(let i =0; i< sedes.length; i++){
    const optionsElemnts=document.createElement("option");
    const contenidoOptions= document.createTextNode(sedes[i].id);
    optionsElemnts.appendChild(contenidoOptions);
    selectElement.appendChild(optionsElemnts);
    console.log(sedes[i].id);
  }
})

const selectElement2= document.getElementById("alumn");
get2JSON("../data/cohorts.lim-2018-03-pre-core-pw.users.json", (err, json)=> {
  if(err){
    // algo salio mal...
    return console.log(err);
  }
  const users= json;
  console.log(users);
  console.log(users.length);

  for(let i =0; i< users.length; i++){
    const optionsElemnts2=document.createElement("option");
    const contenidoOptions2= document.createTextNode(users[i].name);
    optionsElemnts.appendChild(contenidoOptions2);
    selectElement.appendChild(optionsElemnts2);
    console.log(users[i].name);
  }
})