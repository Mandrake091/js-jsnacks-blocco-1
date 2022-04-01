let = numeriDispari = [];

button = document.getElementById("button").addEventListener("click", getInputValue);

let input = document.getElementById('input');

let h1 = document.getElementById('result');


function getInputValue() {

    index = 0
    for (let i = 0; i < 6; i++) {
        let numero = prompt('Inserisci un numero');

        if (numero % 2 == 1) {
            numeriDispari.push(numero);
            h1.innerText = ("Questi sono i tuoi numeri dispari inseriti " + numeriDispari + '.');
            checkName = true;
        } else {
            console.log('Il numero è pari')
        }
        console.log(numero);
    }
}
console.log(input.value, numeriDispari);


// Crea un array vuoto.

// Chiedi per 6 volte all’utente di inserire un numero,

// se è dispari inseriscilo nell’array.

/*
Creo un array vuoto

Per 6 volte mostrare un prompt all'utente

Se il numero è dispari inserirlo nell'array

*/

/*
let numeriDispari = [];

for (let i = 0; i < 6; i++) {
    let numeroInserito = parseInt(prompt('Inserisci un numero'));
    if (numeroInserito % 2 !== 0) {
        numeriDispari.push(numeroInserito);
    }
    console.log(numeriDispari)
}*/