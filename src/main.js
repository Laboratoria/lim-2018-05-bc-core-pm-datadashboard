<<<<<<< HEAD
=======
const buttonSiguient = document.getElementById("map");

buttonSiguient.addEventListener("click" , ()=>{
  document.getElementById("map").style.display = "none";
  document.getElementById("lista").style.display = "block";
  document.getElementById("principal").style.display = "block";
  document.getElementById("secundario").style.display = "block";
});

const extractJSON= (url) => {
  fetch (url)
  .then(res => res.json())
  .then(data => {
    listaCohorts(data)
    console.log (data);
 })
 
 const listaCohorts = (data) => {
  for(let i of data){
 console.log (i)
 
 }
 }}
 let result = i
 
 const selectElement = document.getElementById("cohorts");
 selectElement.innerHTML += result.id
 extractJSON("../data/cohorts.json")
 
 const selectElementU = document.getElementById("users");
 extractJSON("../data/cohorts/lim-2018-03-pre-core-pw/users.json")
 selectElementU.innerHTML += result.name

>>>>>>> ce3ec2aef2a3012047eb95d0e642e1c8df8049ec
