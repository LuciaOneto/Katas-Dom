// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement('ul');

countries.forEach(countrie => {
    const li = document.createElement('li');
    li.textContent = countrie;
    ul.appendChild(li);
});


document.body.appendChild(ul);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elementsToRemove = document.querySelectorAll('.fn-remove-me');

elementsToRemove.forEach(element => {
    element.remove();
});


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const myUl = document.createElement('myUl');

cars.forEach(car => {
    const myLi = document.createElement('myLi');
    myLi.textContent = car;
    myUl.appendChild(myLi);
});

const myDiv = document.querySelector ('[data-function="printHere"]')
myDiv.appendChild(myUl);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const pictures = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const container = document.createElement('div');

pictures.forEach(picture => {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.textContent = picture.title;
    const img = document.createElement('img');
    img.src = picture.imgUrl;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar este div';
    deleteButton.addEventListener('click', () => {
        div.remove(); // Elimina el div asociado a este botón
      });
    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(deleteButton);
container.appendChild(div);

});


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.

// Agregamos el contenedor al body
document.body.appendChild(container);

const button = document.createElement('button');
button.textContent = 'Eliminar el último div';


// Agregar evento de clic para eliminar el último div
button.addEventListener('click', () => {
    const lastDiv = container.lastElementChild; // Obtenemos el último div del contenedor
    if (lastDiv) {
      container.removeChild(lastDiv); // Eliminamos el último div
    }
  });
  document.body.appendChild(button);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.

// deleteButton
