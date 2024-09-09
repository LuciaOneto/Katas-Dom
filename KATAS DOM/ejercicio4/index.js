// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click

const button = document.getElementById('btnToClick');

button.addEventListener('click', function (event) {
    console.log(event); 
  });


// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const input = document.querySelector('.onFocus');
input.addEventListener('focus', function() {
    console.log('Valor actual al enfocar:', input.value);
});



// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.


input.addEventListener('input', function() {
    console.log('Valor actual mientras escribes:', input.value);
});
