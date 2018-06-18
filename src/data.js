//Creando el objeto data
window.data = {
  //Creando la funcion computeUserStats
  computeUserStats: (users, progress, courses) => { },
  //Creando la funcion sortUsers
  sortUsers: (users, orderBy, orderDirection) => { },
  //Creando la funcion filterUsers
  filterUsers: (users, search) => { },
  //Creando la funcion processCohortData
  processCohortData: (options) => { }
};

//Users: es el arreglo de usuarios (estudiantes). Un array que contenga todos los objetos (estudiantes).  
//Arreglo de objetos obtenido de la data en bruto.

//progress: es un objeto de progreso en bruto (o sea los datos de progreso de cada uno de los estudiantes) 
// objeto progress debe tener los siguientes atributos: uid (el id de cada alumno). Asi se relaciona el alumno
// con todo el proceso (de todos los cursos)

//courses: arreglo de strings con los id de los cursos del cohort en cuestion



