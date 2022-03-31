let = numeriDispari = [];

button = document.getElementById("button").addEventListener("click", getInputValue);

let input = document.getElementById('input');

let h1 = document.getElementById('result');


function getInputValue() {

    index = 0
    for (let i = 0; i < 7; i++) {
        let numero = prompt('Inserisci un numero');

        if (numero % 2 == 1) {
            numeriDispari.push(numero);
            console.log(numeriDispari)
            h1.innerText = ("Questi sono i tuoi numeri dispari inseriti " + numeriDispari[1] + ', ' + numeriDispari[2] + ', ' + numeriDispari[3] + ', ' + numeriDispari[4] + ', ' + numeriDispari[5] + ', ' + numeriDispari[6] + '!');
            checkName = true;
        } else {
            console.log('Il numero è pari')
        }
        console.log(numero);
    }
}
console.log(input.value, numeriDispari);