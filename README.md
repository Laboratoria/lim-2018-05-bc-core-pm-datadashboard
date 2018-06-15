# Data Dashboard📈📈

## Preámbulo📊 📁

En Laboratoria, las Training Managers (TMs)👩🏻‍💻 hacen un gran trabajo al analizar la
mayor cantidad de datos posibles respecto al progreso de las estudiantes para
apoyarlas en su aprendizaje.

La principal medida de progreso de una estudiante en Laboratoria es su avance
completando los proyectos de la [Ruta de Aprendizaje](https://docs.google.com/spreadsheets/d/1AoXQjZnZ5MTPwJPNEGDyvn5vksiOUoPr932TjAldTE4/edit#gid=536983970)
y su desempeño en función a la [Rúbrica de Niveles Esperados](https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQy1waRpQ-16sn7VogiDTy-Fz5e7OSZSYUCiHC_bkLAKYewr4L8pWJ_BG210PeULe-TjLScNQQT_x/pubhtml).
Sin embargo, para completar estos proyectos las estudiantes acceden a contenidos
de aprendizaje (lecturas, videos, ejercicios y quizzes) en un sistema que
llamamos LMS (Learning Management System). El LMS acumula data sobre quién
leyó qué, qué ejercicios se han completado, los resultados de los quizzes, etc.

A pesar de que la data de progreso del LMS (ej. lecturas leídas, ejercicios
  completados, nota en quizzes, etc.) no impacta directamente en la evaluación
  de una estudiante, sí es una pieza de información relevante que las TMs
  quisieran visualizar para tener un mejor entendimiento de cómo va cada
  estudiante en su proceso de aprendizaje.

Así, el reto de este proyecto es crear una interfaz donde las TMs puedan
_ver_ y _usar_ la data de progreso del LMS. Para ello, proponemos crear un
**data dashboard** (_tablero de visualización de datos_).

## Introducción📊 📁

Según un [estudio de IBM](https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WRL12345USEN),
el 90% de la data que existe hoy ha sido creada en los últimos dos años.
Cada día generamos 2.5 trillones de bytes de datos, una cifra sin precedentes.

Sin embargo, los datos por sí solos son de poca utilidad. Para transformar datos
en **información** necesitamos procesarlos y entenderlos. Una manera muy
sencilla de hacerlo es creando _visualizaciones_. Las
empresas líderes de hoy generan visualizaciones dinámicas de su data
que les permiten entender mejor su negocio y tomar decisiones apropiadas.

En este proyecto tendrás tu primer acercamiento a transformar data en
información creando tu primer **data dashboard**.

Si pensamos en un _dashboard_ podemos pensar en el tablero de control de un auto
o el de un avión. Un espacio desde el cual un usuario puede tener acceso a la
información y controles más relevantes, en este caso, del vehículo que está
utilizando. El _dashboard_ de un auto le permite a quien conduce saber a qué
velocidad está yendo, qué cambio/velocidad está utilizando, cuánto combustible
tiene disponible, cuál es la temperatura del motor, cuántas revoluciones por
minuto dan las ruedas, cuánta distancia ha recorrido, etc.

![car dashboard](https://img.buzzfeed.com/buzzfeed-static/static/2017-02/7/12/enhanced/buzzfeed-prod-fastlane-03/original-17515-1486490056-3.jpg?crop=2041:1068;80,248)

## Aplicaciones en el mundo real📊 📁

En el mundo de la web es muy común el uso de _dashboards_. De hecho, [wikipedia](https://goo.gl/P7PF4y)
nos dice que un _dashboard_ puede ser un resumen gráfico de varias piezas de
información importante, generalmente utilizadas para dar una visión general de
una empresa o de un servicio. Así, tenemos dashboards como los de:

* [Google Analytics](https://assets.econsultancy.com/images/resized/0003/3813/mobile_commerce_dashboard-blog-full.png)
  para visualizar la data de tráfico de sitios web.

* [Mailchimp](https://blog.mailchimp.com/wp-content/uploads/2016/11/Dashboard-view-3-Copy-1008x768.jpg)
  para visualizar el desempeño de campañas de mercadeo digital por correo
  electrónico.

* [Quickbooks](https://quickbooks.intuit.com/content/dam/intuit/quickbooks/branding/make-organization-easy-visual.png)
  para visualizar la información financiera de una empresa.

Seguramente, a lo largo de tu carrera como diseñadora o desarrolladora, te
tocará crear un _data dashboard_. Quizás sea para visualizar la data de un
negocio de delivery de comida, o las rutas históricas de un negocio de
transporte, o simplemente los indicadores clave de tu propio emprendimiento ;)

## Decisiones de diseño🎨 

* primero boceteamos,nuestras ideas hubieron 2 versiones,pero finalmente descartamos lo que no sirve y utilizamos lo que realmente es util para los usuarios 

* tuvimos varias ideas respecto al color pero finalmente utilizamos los tonos de la marca y decidimos guiarnos de esos parametros

* tomamos como prohibido usar lo que nosotros queremos o deseamos para la pagina y se tomo la decision de tomar e n cuenta las necesidades del usuario





### Entrevistas📝
Hicimos 2 entrevistas en la primera presentamos un bosquejo de la pagina:

* Quiénes son los principales usuarios de producto.
Los trainning manager de cada sede 🌎 (lima,santiago,sao paulo,guadalajara y ciudad de mexico),pero pricipalmente los trainnig manager de lima

* Cuáles son los objetivos de estos usuarios en relación con el producto.
 acceder a la informacion del lms(la plataforma de clases)y simplicarla presentacion de la informacion ,haciendo de esta manera mas legible

* Cuáles son los datos más relevantes que quieren ver en la interfaz y
  por qué. Cómo los descubriste.
  mediante la entrevista con ale👩🏻‍💻(trainnig manager sede lima),menciono la gran importancia de ver los avances de los ejercios y quizzes,ademas de poder obtener un promedio general por avance del aula

* Cuándo revisan normalmente estos datos los usuarios.
segun la informacion proporcionada por ale👩🏻‍💻(trainnig manager sede lima),actualmente se utiliza un excel ,para administrar y visualizar los datos,esa vista de datos es abrumadora. 

* Cómo crees que el producto les está resolviendo sus problemas.
simplica la obtencion de datos y ademas reduce el tiempo de trabajo debido a que la informacion esta organizada de tal manera que la visualizacion y obtencion de datos es realmente una experencia grata ,apoyandonos en la base de la creacion de una interfaz ligera.

* Cómo fue tu proceso de diseño.
fue un proceso de prueba y error,por que teniamos ideas pero no se adecuaban a la necesidad del usuario ,tuvimos que reconsiderar algunos aspectos y regresar al prototipado.

#### Preguntas de la entrevista💭
 - ¿Quisiera saber en que herramienta trabajas para poder obtener y manejar el grado de completitud de las alumnas en la plataforma (LMS)
  Utilizo Excel,se me hace pesado trabajar con demasiada informacion en excel por que esa forma me organizacion es abrumadora,pero me gusta tener todos los datos a la mano 
  - ¿Cuanto tiempo trabajas en esta heramienta?
    Un dia completo cada 3 semanas
 
 - ¿Que colores de la paleta de laboratoria prefieres?
    Amarillo y fucsia

- ¿A que informacion o dato le otorgas mayor importancia?
 A los ejercicios
  

#### 2) Sketch de la solución (prototipo de baja fidelidad)

Debes hacer un _sketch_ (boceto) de tu solución usando papel y lápiz, tomarle
una foto, subirla a tu repositorio y hacer mención del _sketch_ en tu `README.md`.

#### 3) Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés).
Para eso debes aprender a utilizar alguna herramienta de diseño visual.
Nosotros te recomendamos [Figma](https://www.figma.com/) que  es una herramienta
que funciona en el navegador y, además, puedes crear una cuenta gratis. Sin
embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc.

El diseño debe representar tu _ideal_ de solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para hackear.

Tu diseño debe seguir los fundamentos de _visual design_, como:
contraste, alineación, jerarquía, entre otros. Tip: revisa el contenido de UX
de la unidad de visual design.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
Como mencionamos, **no** es necesario que construyas la interfaz tal como la
diseñaste. Tendrás un tiempo limitado para hackear, así es que deberás priorizar.

Como mínimo, tu implementación debe:

1. Permitir al usuario seleccionar un cohort de una lista de cohorts.
2. Al seleccionar un cohort:
   - Listar las estudiantes de ese cohort
   - Para cada estudiante:
     + Calcular porcentaje de completitud de todos los _cursos_.
     + Calcular grado de completitud de _lecturas_, _ejercicios autocorregidos_,
       y _quizzes_.
   - Ordenar estudiantes por completitud _general_ (porcentaje consumido/completado
     de todos los cursos del cohort en cuestión), de _lecturas_, _ejercicios
     autocorregidos_ y _quizzes_.
   - Filtrar/buscar estudiantes por nombre.
3. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles,
   tablets y desktops.
4. Incluir pruebas unitarias.

Es importante que tu interfaz, a pesar de ser una versión mínima de tu ideal,
igual debe seguir los fundamentos de visual design, como: contraste,
alineación, jerarquía, entre otros.
