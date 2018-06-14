/* console.log(sedes.length);
console.log(sedes[0].id);
console.log(sedes[0].coursesIndex); */

// Creacion de elementos de HTML  a través del DOM
// seleccione al nodo padre --> html 
const menuElement = document.getElementById('menu');
// cree el elemento select
const createSelectElement = document.createElement('select');
//al padre le doy a su hijo
menuElement.appendChild(createSelectElement);

// Aqui al hijo le doy un atributo id
createSelectElement.id = "sedes";

//LLamar al elemento select creado 
const selectElement = document.getElementById('sedes');

for (var i = 0; i < sedes.length; i ++) {
    //console.log(sedes[i].id);
    //creo el elemento option por cada uno de las sedes
    const optionsElements = document.createElement('option');
    //a la etiqueta padre  le doy sy hijo
    selectElement.appendChild(optionsElements);
    //creo el contenido textual (nodo de texto)
    const optionsContent = document.createTextNode(sedes[i].id);
    optionsElements.appendChild(optionsContent);
    optionsElements.setAttribute('value',sedes[i].id)

} 



// Al elemento select le voy a colocar un evento


selectElement.addEventListener('change', (e)=>{
    console.log(e.target.value);
 //console.log(selectElement.value);
    if (e.target.value === "lim-2018-03-pre-core-pw"){
        menuElement.innerHTML = '<p>Bienvenido al cohort de lim......</p>'
    }

})