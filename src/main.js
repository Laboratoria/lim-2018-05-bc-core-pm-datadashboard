const buttonSiguient = document.getElementById("map");
buttonSiguient.addEventListener("click" , ()=>{
  document.getElementById("map").style.display = "none";
  document.getElementById("lista").style.display = "block";
  document.getElementById("principal").style.display = "block";
  document.getElementById("secundario").style.display = "block";
});




tabCohorts = document.getElementById("cohorts");
tabUsers = document.getElementById("users");

const listaCohorts = (data) => {
  for(let i of data){
     console.log (i);
     document.getElementById("cohorts").innerHTML+= "<option>" + i.id + "</option>";
   }
}
extractJSON('../data/cohorts.json',listaCohorts);

const listaUsuarios = (data) => {
  for(let i of data){
     console.log (i);
   }
}
extractJSON('../data/cohorts/lim-2018-03-pre-core-pw/users.json',listaUsuarios);
