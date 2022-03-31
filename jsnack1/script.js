const listaInvitati = ["Paolo", "Marco", "Boolean", "Giacomo"];

buttonFesta = document.getElementById("button").addEventListener("click", getInputValue);

let input = document.getElementById('input');

let h1 = document.getElementById('result');

let index = 0;
let checkName = false;

console.log(input.value, listaInvitati);

function getInputValue() {

    for (let i = 0; !checkName && i < listaInvitati.length; i++) {

        if (input.value == listaInvitati[i]) {
            checkName = true;
            h1.innerText = ("Benvenutæ: " + input.value+'!' + " Sei pronto a fare festa?");
           
        } else {
            h1.innerText = ("Ciao " + input.value + ", il tuo nome non è sulla lista");
           
        }
         
    }
}