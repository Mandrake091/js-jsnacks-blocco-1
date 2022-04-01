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
           
            h1.innerText = ("Benvenutæ: " + input.value+'!' + " Sei pronto a fare festa?");
            checkName = true;
        } else {
            h1.innerText = ("Ciao " + input.value + ", il tuo nome non è sulla lista. Guarda in console!");
           
        }
         
    }
}

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      button = document.getElementById("button").click();
    }
});