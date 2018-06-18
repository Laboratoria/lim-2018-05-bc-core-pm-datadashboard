const sedeCohort = document.getElementById('sede');
fetch('../data/cohorts.json')
  .then(response => response.json())
  .then(json => {
    const sedes = json;
    // console.log(sedes.length);
    for (let i = 0; i < sedes.length; i++) {
      const optionElements = document.createElement('option');
      const contenidoOption = document.createTextNode(sedes[i].id);
      optionElements.appendChild(contenidoOption);
      console.log(sedes[i].id);
      sedeCohort.appendChild(optionElements);
    }
  })
  .catch((err) => {
    console.error(err);
  });

  