
/*const extraerJSON=(url, callback)=>{
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
*/

const extractJSON = (url,callback) => {
  fetch (url)
  .then((res) => res.json())
  .then((data) => {
    callback(data)
    console.log (data)}
  )
}
 
 function computeUsersStats(users, progress, courses){
   return usersWithStats;
 }
 
 function sortUsers(users, orderBy, orderDirection){
   return orderUsers;
 }

 function filterUsers(users, search){
   return 0
 }

 function processCohortData(options){
   return 0
 }

 /*let extractJSON= (url) => {
  fetch (url)
  .then((res)=> {
    return res.json() })
  .then((data) => {
    for (c of data){
        console.log (c);}
 return data;
 })}*/