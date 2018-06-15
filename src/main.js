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
