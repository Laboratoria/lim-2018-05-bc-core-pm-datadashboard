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