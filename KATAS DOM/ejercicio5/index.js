// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
// que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];




const ul = document.createElement('ul');

// Iteramos sobre el array y creamos un li por cada elemento
albums.forEach(album => {
    const li = document.createElement('li');
    li.textContent = album;
    ul.appendChild(li);
});

// Agregamos la lista ul al body
document.body.appendChild(ul);
