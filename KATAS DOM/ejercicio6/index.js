// Dado el siguiente HTML: Elimina el elemento que tenga la clase .fn-remove-me.

const elementsToRemove = document.querySelectorAll('.fn-remove-me');

elementsToRemove.forEach(element => {
    element.remove();
});
