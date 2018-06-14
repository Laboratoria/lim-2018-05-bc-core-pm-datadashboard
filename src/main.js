// fetch('http://127.0.0.1:5500/data/cohorts.json')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//     console.log(data[0].id)
//   });
const XHR = new XMLHttpRequest();

XHR.onreadystatechange = function(){
    let data;
    if(XHR.readyState == 4 && XHR.status ==200){
        data = JSON.parse(XHR.responseText);
        /* for(let i = 0; i < data.length; i++){
          document.write(data[i].start);
          document.write('<br>');
        } */        
    }
    else{
        console.log('Hay un problema en el servidor');
    }
    return data;
}
XHR.open('GET','http://127.0.0.1:5500/data/cohorts.json');
XHR.send(); 