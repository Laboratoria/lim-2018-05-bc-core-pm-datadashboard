/*let computeUsersStats = (users, progress, courses);
let ortUsers = (users, orderBy, orderDirection)
let filterUsers = (users, search);
let processCohortData = (options);*/



let users = () =>{
    fetch('http://127.0.0.1:5500/data/cohorts/lim-2018-03-pre-core-pw/users.json')
    .then( res => res.json() )
    .then(value=(data)=>{
        for(value of data){
            tabledata.innerHTML += `<option value=${element} id=${options}>${element}</option>`;

            /*tabledata.innerHTML += `<tr>
            <td>${value.name.toUpperCase()}</td>
        </tr>`
        }*/
    }
})
}
