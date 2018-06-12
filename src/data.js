/*En este espacio van 4 funciones*/
// const XHR = new XMLHttpRequest () ;
// console.log (XHR) ;

// XHR.onreadystatechange = function(){
//     if (XHR.readyState == 4 && XHR. status == 200){
//         console.log(JSON.parse(XHR.responseText)) ;

//         console.log(XHR.res)
//        }else{
//            console.log('Hay un problema en el servidor') ;
//     }
// }
// XHR.open('Get','http://http://127.0.0.1:5500/data/cohot.json') ;
// XHR.send() ;
fetch('/data/cohorts.json')
// fetch('http://http://127.0.0.1:5500/data/cohorts.json')
.then(function(response){
    return response.json() ;
})
.then(function(data){
    console.log(typeof data);
    console.log(data[0].id)
});