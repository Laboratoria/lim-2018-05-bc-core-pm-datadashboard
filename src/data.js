

/*const selectElement = document.getElementById('cohorts');
fetch('../data/cohorts.json')
.then(response => response.json())
.then(json => {
  const cohorts = json;
  for(let i=0; i< cohorts.length; i++){
    const optionElements = document.createElement('option');
    const contenidoOption = document.createTextNode(cohorts[i].id);
    optionElements.appendChild(contenidoOption);
    selectElement.appendChild(optionElements);
  }
})
.catch((err) => {
  console.error(err);
});*/


window.computeUsersStats=(users, progress, courses)=>{

};

window.sortUsers=(users, orderBy, orderDirection)=>{};

window.filterUsers=(users, search)=>{};

window.processCohortData=(options)=>{}
