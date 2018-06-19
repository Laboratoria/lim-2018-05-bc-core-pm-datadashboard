const containerList = document.getElementById("caja3");

pruebaRecepcion.addEventListener("click", () => {
  for (let i = 0; i < userArray.length; i++) {
    let name = document.createElement('div')
    name.textContent = userArray[i].name;
    name.className = 'names';
    containerList.appendChild(name);
  }
});
/*
const percentforid = () => {
  console.log("lhsjh");
  for (let i = 0; i < userArray.length; i++) {
    idPos = userArray[i].id;
    console.log(idPos)
    console.log(percentObject[idPos].intro.percent)
  }
}*/