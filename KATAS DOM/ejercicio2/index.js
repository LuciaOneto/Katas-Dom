// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

const myDiv = document.createElement('div');
document.body.appendChild(myDiv);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

// const myDiv = document.createElement('div');
//document.body.appendChild(myDiv);

const myP = document.createElement('p');
document.body.appendChild(myP);
myDiv.append(myP)

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
//	loop con javascript.

// Creamos el div
const newDiv = document.createElement('div');

// Usamos un loop para crear 6 párrafos
for (let i = 1; i <= 6; i++) {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `Este es el párrafo número ${i}`;
    
    // Añadimos el párrafo al div
    newDiv.appendChild(newParagraph);
}

// Insertamos el div en el body del documento
document.body.appendChild(newDiv);


// 1.4 Inserta dinamicamente con javascript en un html una p con el 
//	texto 'Soy dinámico!'.

const anotherP = document.createElement('p');
anotherP.textContent = 'Soy dinámico!';

document.body.appendChild(anotherP);


// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const insertText = document.querySelector('.fn-insert-here');

insertText.textContent = 'Wubba Lubba dub dub';

// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');

// Iteramos sobre el array y creamos un li por cada elemento
apps.forEach(app => {
    const li = document.createElement('li');
    li.textContent = app;
    ul.appendChild(li);
});

// Agregamos la lista ul al body
document.body.appendChild(ul);


// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const elementsToRemove = document.querySelectorAll('.fn-remove-me');

elementsToRemove.forEach(element => {
    element.remove();
});


// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//	Recuerda que no solo puedes insertar elementos con .appendChild.

const newP = document.createElement('p');
newP.textContent = 'Voy en medio!';

// Seleccionamos el primer div del body
const firstDiv = document.querySelector('div');

// Insertamos el nuevo párrafo antes del primer div
document.body.insertBefore(newP, firstDiv);

//1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
//	.fn-insert-here

const divsToInsert = document.querySelectorAll('.fn-insert-here');

divsToInsert.forEach(div => {
    const newP = document.createElement('p');
    newP.textContent = 'Voy dentro!';
    div.appendChild(newP);
});