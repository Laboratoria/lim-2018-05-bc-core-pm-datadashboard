//creacion de elemenntos htmla traves del dom
//seleccion delm nodo padre
/* const menuElement=document.getElementById('menu');
//creo select
const createSelectElement= document.createElement('select');
//al padre le doy un hijo
menuElement.appendChild(createSelectElement);
// aqui doy al hijo  un atributo id
createSelectElement.id="data"

// llamar al select creado
const selectElement= document.getElementById('data');

for(let i=0; i< data.lenght ; i ++){
    //CREO EL ELEMENTO OPTION POR CADA SEDE O COHORTS
    const optionsElements =document.createElement('option')
    //a la etiqueta padre le doy su hijo
    selectElement.appendChild(optionsElements);
    //creo el texto (nodo  de texto)
    const optionContent = document.createTextNode(data[i].id);
    optionsElements.appendChild(optionContent);
    optionsElements.setAttribute('value',data[i].id)
    //al elemento select le voy a colocar un evento
    selectElement.addEventListener('change',(e)=>{
        console.log(e.target.value);
        //console.log(selectElement.value);
        if(e.target.value ==="lim-2018-03-pre-core-pw"){
            menuElement.innerHTML= '<p>bienvenida a lim </p>'
        }
    })
 */