const cohortJSON=(url, callback)=>{
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


    const usersJSON =(url, callback)=>{
      const xhrU = new XMLHttpRequest();
      xhrU.onload = ()=> {
        if (xhrU.readyState === 4){
          if (xhrU.status !== 200 ) {// Success!
            return callback(new Error(`HTTP error: ${xhrU.status}`));
          }
          try{
            callback(null,JSON.parse(xhrU.responseText));
          } catch(err) {// We reached our target server, but it returned an error
            callback(err);
          }}};
          xhrU.open("GET", url);
          xhrU.send();
        };

        const progressJSON=(url, callback)=>{
          const xhrP = new XMLHttpRequest();
          xhrP.onload = ()=> {
            if (xhrP.readyState === 4){
              if (xhrP.status !== 200 ) {// Success!
                return callback(new Error(`HTTP error: ${xhrP.status}`));
              }
              try{
                callback(null,JSON.parse(xhrP.responseText));
              } catch(err) {// We reached our target server, but it returned an error
                callback(err);
              }}};
              xhrP.open("GET", url);
              xhrP.send();
            };






/*let cohortJSON= (url) => {
  fetch (url)
  .then((res)=> {
    return res.json() })
  .then((data) => {
    for (c of data){
        console.log (c);}
return data;
})}*/
