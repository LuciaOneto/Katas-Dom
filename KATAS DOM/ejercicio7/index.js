// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];


const myUl = document.createElement('myUl');

places.forEach(place => {
    const myLi = document.createElement('myLi');
    myLi.textContent = place;
    myUl.appendChild(myLi);
});



const insertArray = document.querySelector('[data-function="printHere"]');

insertArray.appendChild(myUl);