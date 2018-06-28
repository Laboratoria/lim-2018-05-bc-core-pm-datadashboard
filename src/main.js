const btnLima = document.getElementById("botonlima");
const btnArequipa = document.getElementById("botonAqp");
const btnMexico = document.getElementById("botoncdm");
const btnChile = document.getElementById("botonsdc");
const btnSaoPaulo = document.getElementById("botonspl");

let lista = document.getElementById('main');
let elementMain = lista;

let dataCohort = (sede) => {
    fetch('http://127.0.0.1:5500/data/cohorts.json')
        .then(response => {
            return response.json();
        })
        .then(json => {

            const cohort = json;

            for (let i = 0; i < cohort.length; i++) {
                const cohortId = cohort[i].id;
                console.log(cohort)
                const arrIdCohort = cohortId.split('-');

                if (arrIdCohort[0] === sede) {
                    const cohortContent = document.createElement('div');
                    const paragraphContent = document.createElement('div');
                    const buttonContent = document.createElement('div');
                    const paragraph = document.createElement('p');
                    const button = document.createElement('button');
                    const paragraphText = document.createTextNode(cohortId);
                    const buttonText = document.createTextNode('Entrar')
                    button.dataset.cohort = cohortId;
                    paragraph.appendChild(paragraphText);
                    paragraphContent.appendChild(paragraph);
                    cohortContent.appendChild(paragraphContent);

                    button.appendChild(buttonText);
                    buttonContent.appendChild(button);
                    cohortContent.appendChild(buttonContent);

                    elementMain.appendChild(cohortContent);
                }
            }
        })

}

btnLima.addEventListener('click', () => {
    const valueBtnLima = btnLima.value;
    dataCohort(valueBtnLima)
    document.getElementById('btn-seat').style = 'display:none';
})
btnArequipa.addEventListener('click', () => {
    const valueBtnArequipa = btnArequipa.value;
    dataCohort(valueBtnArequipa)
    document.getElementById('btn-seat').style = 'display:none';
})

btnMexico.addEventListener('click', () => {
    const valueBtnMexico = btnMexico.value;
    dataCohort(valueBtnMexico)
    document.getElementById('btn-seat').style = 'display:none';
})
btnChile.addEventListener('click', () => {
    const valueBtnChile = btnChile.value;
    dataCohort(valueBtnChile)
    document.getElementById('btn-seat').style = 'display:none';
})
btnSaoPaulo.addEventListener('click', () => {
    const valueBtnSaoPaulo = btnSaoPaulo.value;
    dataCohort(valueBtnSaoPaulo)
    document.getElementById('btn-seat').style = 'display:none';
})

elementMain.addEventListener('click', (e) => {
    console.log(e.target.dataset.cohort);
    if (e.target.dataset.cohort === 'lim-2018-03-pre-core-pw') {
        elementMain.innerHTML = `<div>Hola Mundo ${e.target.dataset.cohort}</div>`;
    }
})


const datadash = (dd) => {
    fetch('http://127.0.0.1:5500/data/cohorts.json')
        .then(function (responseCohort) {
            fetch('http://127.0.0.1:5500/data/cohorts/lim-2018-03-pre-core-pw/users.json')
                .then(function (responseUsers) {
                    fetch('http://127.0.0.1:5500/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
                        .then(function (responseProgress) {
                            Promise.all([responseCohort.json(), responseUsers.json(), responseProgress.json()])
                                .then(data => {

                                    const [cohorts, users, progress] = data;
                                    dd(cohorts, users, progress);


                                    const option = {
                                        cohort: 0,
                                        cohorData: {
                                            users: 0,
                                            progress: 0,
                                        },
                                        orderBy: 'asc',
                                        search: 'desc'

                                    }
                                });
                        });
                });
        });
};

 
//document.getElementById('button').addEventListener('click', mostrar);

/*const redireccionar = ()=>{
    window.location = "cohort.html";
}
const enter = document.getElementById('buttonenter')
    enter.addEventListener('click', redireccionar);


   document.getElementById('buttonData').addEventListener('click', mostrarData);
    
     })
    }
let tabla=(data)=>{
    for(let value of data){
        //console.log(content);
        content.innerHTML +=`<tr>
            <td>${value.id}</td>
            <td>${value.signupCohort}</td>
            <td>${value.timezone }</td>
            <td>${value.name}</td>
            <td>${value.timezone}</td>
            <td>${value.role}</td>
        </tr>`
    //console.log(data['0']);*/
//}

//}

//let computeUsersStats = [users, progress, courses];


