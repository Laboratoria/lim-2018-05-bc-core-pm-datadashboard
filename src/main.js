const resultCohortElement = document.getElementById('resultado');
const buttonElement = document.getElementById('boton');


const data = (idCohort) => {
    const dataCohortUrl = 'https://raw.githubusercontent.com/GabyMarapi/lim-2018-05-bc-core-pm-datadashboard/master/data/cohorts.json';
    const dataUserUrl = 'https://raw.githubusercontent.com/GabyMarapi/lim-2018-05-bc-core-pm-datadashboard/master/data/cohorts/' + idCohort + '/users.json';
    const dataProgressUrl = 'https://raw.githubusercontent.com/GabyMarapi/lim-2018-05-bc-core-pm-datadashboard/master/data/cohorts/' + idCohort + '/progress.json';

    fetch(dataCohortUrl).then(response => {
        const responseCohort = response.json()
        fetch(dataUserUrl).then(response => {
            const responseUser = response.json()
            fetch(dataProgressUrl).then(response => {
                const responseProgress = response.json()

                Promise.all([responseCohort, responseUser, responseProgress])
                    .then(value => {

                        const responseCohortValue = value[0];
                        const responseUserValue = value[1];
                        const responseProgressValue = value[2];


                        const option = {
                            cohort: responseCohortValue,
                            cohortData: {
                                users: responseUserValue,
                                progress: responseProgressValue
                            },
                            orderBy: 'asc',
                            search: 'desc'
                        }
                        console.log(responseCohortValue);
                        console.log(responseUserValue);
                        console.log(responseProgressValue);


                        const exercisesTotal = 0;
                        const exercisesCompleted = 0;
                        const exercisesPercent = 0;
                        const exercisesReads = 0;

                       
                        console.log(responseProgressValue[responseUserValue[0].id]);

                        
                        /*
                        let stats = {
                             percent: '',
                            exercises: {    
                                total: 0,
                                completed: 0,
                                percent: 0,
                                reads: 0,
                            } */

                        
/*
                        const signupCohort = responseUserValue[0].signupCohort;
                        
                        for (let value in responseCohortValue) {
                            console.log(value);
                            if (value.id == signupCohort) {
                                const arregloStrinCourses = value.coursesIndex;
                               
                            }
                        }*/



                        // processCohortData(option);

                    })

            })
        })
    })
};





const dataCohort = () => {
    fetch('http://127.0.0.1:5500/data/cohorts.json')
        .then(response => {
            return response.json();
        })
        .then(json => {

            const cohortJson = json;

            for (let i = 0; i < cohortJson.length; i++) {

                const cohortContent = document.createElement('div');
                const paragraphContent = document.createElement('div');
                const buttonContent = document.createElement('div');
                const paragraph = document.createElement('p');
                const button = document.createElement('button');
                const paragraphText = document.createTextNode(cohortJson[i].id);
                const buttonText = document.createTextNode('Ingresar')

                paragraph.appendChild(paragraphText);
                paragraphContent.appendChild(paragraph);
                cohortContent.appendChild(paragraphContent);

                button.appendChild(buttonText);
                buttonContent.appendChild(button);
                cohortContent.appendChild(buttonContent);

                resultCohortElement.appendChild(cohortContent);
                button.id = cohortJson[i].id;

            }

        })



}


buttonElement.addEventListener('click', () => { dataCohort(); });

resultCohortElement.addEventListener('click', (event) => {
    const idCohort = event.target.id;
    resultCohortElement.style.display = 'none'
    data(idCohort);
});

