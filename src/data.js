<<<<<<< HEAD










































/* const getData = (url, callback) => {
    fetch(url)
        .then((response) =>
            response.json()
        )
        .then((students) => {
            showInTable(students);
        })
        .catch((err) => {
            console.log(err);
        });
};
getData(url); */
=======
const extraerJSON=(url, callback)=>{
  const xhr = new XMLHttpRequest();
  xhr.onload = ()=> {
    if (xhr.readyState === 4){
      if (xhr.status !== 200 ) {// Success!
        return callback(new Error(`HTTP error: ${xhr.status}`));
      }
      try{
        callback(null,JSON.parse(xhr.responseText));
      } catch(err) {// We reached our target server, but it returned an error
        callback(err);
      }}};
      xhr.open("GET", url);
      xhr.send();
    };



/*let extractJSON= (url) => {
  fetch (url)
  .then((res)=> {
    return res.json() })
  .then((data) => {
    for (c of data){
        console.log (c);}
return data;
})}*/
>>>>>>> ce3ec2aef2a3012047eb95d0e642e1c8df8049ec
