fetch('http://127.0.0.1:5500/data/cohorts.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    console.log(data[0].id)
  });