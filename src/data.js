// fetch('http://127.0.0.1:5500/data/cohorts.json')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//     console.log(data[0].id)
//   });
const travel = (data) => {
    for(let i = 0; i < data.length; i++){
        return data[i];
    }
}
const loadJson = (file, funcion) => {
    const XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function(){
        let data;
        if(XHR.readyState == 4 && XHR.status ==200){
            data = JSON.parse(XHR.responseText);    
            funcion(data);    
        }
        else{
        console.log('Hay un problema en el servidor');
        }
    }
    XHR.open('GET',file);
    XHR.send(); 
}
const cohort = () => {
    return loadJson('http://127.0.0.1:5500/data/cohorts.json', travel);
}
 
