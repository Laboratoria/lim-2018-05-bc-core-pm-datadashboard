const elementMain = document.getElementById('main');

const dataCohort = () => {
    fetch('http://127.0.0.1:5500/data/cohorts.json')
        .then(response => {
            return response.json();
        })
        .then(json => {

            const cohort = json;

            for (let i = 0; i < cohort.length; i++) {

                const cohortContent = document.createElement('div');
                const paragraphContent = document.createElement('div');
                const buttonContent = document.createElement('div');
                const paragraph = document.createElement('p');
                const button = document.createElement('button');
                const paragraphText = document.createTextNode(cohort[i].id);
                const buttonText = document.createTextNode('Ingresar')

                paragraph.appendChild(paragraphText);
                paragraphContent.appendChild(paragraph);
                cohortContent.appendChild(paragraphContent);

                button.appendChild(buttonText);
                buttonContent.appendChild(button);
                cohortContent.appendChild(buttonContent);

                elementMain.appendChild(cohortContent);

            }
        })

}

const tableUser = () => {
    fetch('http://127.0.0.1:5500/data/cohorts/lim-2018-03-pre-core-pw/users.json')
        .then(response => {
            return response.json();
        })
        .then(json => {

            const dataUser = json;

            // Crea un elemento <table> y un elemento <tbody>
            let tabla = document.createElement("table");
            let tblBody = document.createElement("tbody");
            
            // Crea las celdas
            for (let i = 0; i < dataUser.length; i++) {
                // Crea las hileras de la tabla
                const fila = document.createElement('tr');

                const celda1 = document.createElement("td");
                const celda2 = document.createElement("td");
                const celda3 = document.createElement("td");
                const celda4 = document.createElement("td");
                const celda5 = document.createElement("td");


                const textoCelda1 = document.createTextNode(dataUser[i].name);
                celda1.appendChild(textoCelda1);

                const textoCelda2 = document.createTextNode(dataUser[i].id);
                celda2.appendChild(textoCelda2);

                const textoCelda3 = document.createTextNode(dataUser[i].signupCohort);
                celda3.appendChild(textoCelda3);

                const textoCelda4 = document.createTextNode(dataUser[i].locale);
                celda4.appendChild(textoCelda4);

                const textoCelda5 = document.createTextNode(dataUser[i].timezone);
                celda5.appendChild(textoCelda5);




                tblBody.appendChild(celda1);
                tblBody.appendChild(celda2);
                tblBody.appendChild(celda3);
                tblBody.appendChild(celda4);
                tblBody.appendChild(celda5);
                tblBody.appendChild(fila);
            }
            

            // posiciona el <tbody> debajo del elemento <table>
            tabla.appendChild(tblBody);
            // appends <table> into <body>
            elementMain.appendChild(tabla);
            // modifica el atributo "border" de la tabla y lo fija a "2";
            tabla.setAttribute("border", "1");
        });
};



// const dataUserId = (dataUser) => {
//     return console.log(dataUser[0].id);
// }

btnBoton = document.getElementById('boton');

btnBoton.addEventListener('click', () => {
    dataCohort();
});

btnBoton1 = document.getElementById('boton1');

btnBoton1.addEventListener('click', () => {
    tableUser();
});