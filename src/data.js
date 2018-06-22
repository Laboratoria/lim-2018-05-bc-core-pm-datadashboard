//Subiendo la data a arraysData
const arraysData = [];
arrayData.push(fetch('../data/cohorts.json'));
arrayData.push(fetch('../data/cohorts/lim-2018-03-pre-core-pw/progress.json'));
arraysData.push(fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json'));
                                                           
Promise.all(arraysData).then((responses)=>{
    return responses.map(response => response.json());
})
.then((jsonResponses)=>{
    
})
.catch((error)=>{
    
});

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


