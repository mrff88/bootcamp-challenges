**1. ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?**

Las ceremonias de un Sprint de Scrum son:

- Planeación del Sprint (sprint planning): En esta ceremonia se debe completar dos tareas muy importantes. Primero, determinar los entregables que se deben realizar en el sprint. Segundo, se debe identificar las tareas a completar para cumplir con los entregables.
- Scrum Diario (daily scrum): Esta ceremonia sirve para comunicar entre los miembros de desarrollo los avances que se vienen realizando segun sus asignaciones y que dificultades pueden haber ocurrido.
- Tiempo de historia (story time): Esta ceremonia se realiza a la mitad de la semana y sirve para discutir y mejorar las historias de usuarios de futuros sprints.
- Revisión del sprint (spring review): Esta ceremonia se realiza al final de un sprint y se revisan los items que se terminaron y no se terminaron.
- Retrospectiva (retrospective): Usualmente se realiza despues de la ceremonia de revisión del sprint. Se identifican uno o dos cambios estratégicos para el siguiente sprint.

**2. ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.**

Son un bosquejo visual inicial de un programa, utilizado para brindar una idea rapida de la distribucion de los elementos y funciones del programa. Los Wireframes pueden ser hechos en hojas de papel escrito a mano, o en programas como Figma, los cuales cuentan con librerias que facilitan su diseño.

**3. Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.**

'Var' tiene la particularidad de Hoisting (comportamiento por defecto de JavaScript en el que la declaración de variables y funciones se mueve automáticamente al principio del scope ) lo cual nos permite redeclarar una variable 'var', además que esta se puede acceder fuera de su scope tradicional. Con 'let' no se tiene esta propiedad, lo que significa que una variable declarada no puedes ser redeclarada y solo esta presente dentro de su scope actual. 'const' no solamente limita a la variable dentro de su scope y la redeclaracion, sino que esta no puede ser reasignada como una variable 'let'. No es buena practica utilizar variables 'var'. Variables 'const'

**4. ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?**

```shell
git branch rama-1
```

```shell
git checkout -b rama-1
```

**5. Explicar la diferencia entre git merge y git rebase.**

Git merge mueve los cambios de una rama a otra y crea un merge commit, preservando la historia de autores de modificacion. Git rebase mueve los cambios de una rama a otra pero altera la historia ya que no se preserva los autores de cada modificacion de la rama a la que se realizo el rebase.

**6. ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?**

Un pull Request (PR) se utiliza para solicitar a los dueños de un repositorio que incorporen los cambios que se han realizado en un fork del mismo. El comando git pull se utiliza para traer cualquier cambio que se haya realizado en el repositorio remoto a nuestra copia local (es una forma corta de usar git fetch y git merge con el repositorio remoto).

**7. ¿Qué es el Virtual DOM?**

Es un concepto de programación donde de mantiene una representacion virtual del DOM (Document Object Model) la cual es mas facil de manipular que el DOM verdadero. El virtual DOM se sincroniza con el DOM real a través del proceso de reconciliación.

**8. Dado el siguiente [codePen](https://codepen.io/cristian-makeitreal/pen/NWadqqa?editors=1100), el cual solo tiene un HTML, por medio de css llegar a esta respuesta. [Imagen](https://github.com/makeitrealcamp/assesment-1-programa-top/blob/main/assets/services-section.gif). (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).**

```CSS
.c-section {
  width: 80%;
  margin: 0 auto;
  font-weight: 600;
  font-family: system-ui;
}

.c-section__title {
  text-align: center;
  background-color: #222;
  box-shadow: 0px -10px 0px 0px #ccc;
  color: #ccc;
  padding: 1rem 0;
}

.c-services {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap:1rem;
}

.c-services__item {
  transition: box-shadow .3s;
  width: 47%;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.c-services__item:hover {
  box-shadow: 0px 5px 5px #ccc;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
```
