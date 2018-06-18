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
      sedeCohort.setAttribute('value', sedes[i].id);
    }
  })
  .catch((err) => {
    console.error(err);
  });

  // sedeCohort.addEventListener("change", (e) => {
  //   if (e.target.value === 'lim-2018-03-pre-core-pw') {
  //     fetch ('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
  //     .then(response => response.json())
  //     .then(json => {
  //       const usersStudents = json;
  //       console.log(usersStudents.length);
  //       for (let i = 0; i < usersStudents.length; i++){
  //         const p = document.createElement('p');
  //         p.innerText = usersStudents[i].name;
  //         listStudent.appendChild(p);
  //       }
  //     })
  //   }
  // })
