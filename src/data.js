const computeUsersStats= ()=>{//users, progress, courses)=>{
    fetch('../data/cohorts.json')
    .then((response)=>{
       return response.json();
    }).then((jsonData)=>{
		
		var Table = document.getElementById("TableBody");
		Table.innerHTML = "";
		
		for(let i = 0 ; i<jsonData.length;i++){
			
			let anio = jsonData[i].start.substring(0, 4);
			let cohort = jsonData[i].id.substring(0, 3);
			
			if(cohort === cohortsSeleccionado && anio === anioSeleccionado ){
				
				let TableRow="<tr></tr>";
               TableRow = "<td>" + jsonData[i].id + "</td>"+
                          "<td>" + jsonData[i].usersCount+ "</td>"+
                          "<td>" + jsonData[i].start + "</td>";
						  
			   var TrElement = document.createElement("tr");
               TrElement.innerHTML = TableRow;
               document.getElementById("TableBody").appendChild(TrElement);
	
			}
			
			
		}
    
      /*for(let x=0;x<jsonData.length;x++){
             let TableRow="<tr></tr>";
               TableRow = "<td>" + jsonData[x].name + "</td>"+
                          "<td>" + jsonData[x].id+ "</td>"+
                          "<td>" + jsonData[x].role + "</td>";
           
             var TrElement = document.createElement("tr");
               TrElement.innerHTML = TableRow;
               document.getElementById("TableBody").appendChild(TrElement);
    
       console.log(jsonData[0]);
		}	*/
	});
     
    };

/*const data= new XMLHttpRequest();
data.open('GET','http://127.0.0.1:8080/data/cohorts.json',true);
data.onload=add;
data.send();
console.log(data);
}
function add () {
 const datos=JSON.parse(this.responseText);
 console.log(datos);
}*/

const lim=document.getElementById('lim');
lim.addEventListener('click',computeUsersStats);



var grupoAnio = document.getElementById("conjuntoAnio"); /*Obtener el SELECT */
var anioSeleccionado = grupoAnio.options[grupoAnio.selectedIndex].value;

var grupoCohort = document.getElementById("conjuntoBootcamp"); /*Obtener el SELECT */
var cohortsSeleccionado = grupoCohort.options[grupoCohort.selectedIndex].value;

function ShowSelected1()
{
/* Para obtener el valor */
anioSeleccionado= document.getElementById("conjuntoAnio").value;

}

function ShowSelected2()
{
/* Para obtener el valor */
cohortsSeleccionado= document.getElementById("conjuntoBootcamp").value;

}