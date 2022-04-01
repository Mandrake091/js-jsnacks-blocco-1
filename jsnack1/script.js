let listaInvitati = ["Paolo", "Marco", "Boolean", "Giacomo", "Deloitte", "Accenture", "CapGemini"];

let buttonFesta = document.getElementById("button").addEventListener("click", getInputValue);

let input = document.getElementById('input');

let h1 = document.getElementById('result');




console.log(input.value, listaInvitati);

//  function getInputValue() {
//      let checkName = false;
//      for (let i = 0; i < listaInvitati.length; i++) {
//          if (input.value === listaInvitati[i]) {
//              checkName = true;
//          }
//      }

//      if (checkName) {
//          h1.innerText = ("Benvenutæ: " + input.value + '!' + " Sei pronto a fare festa?");

//      } else {
//          h1.innerText = ("Benvenutæ: " + input.value + '!' + " Non sei tra gli invitati. Guarda in console.");
//      }
//  }

function getInputValue() {
    let index = 0;
    let checkName = false;

    while (!checkName && index < listaInvitati.length) {
        if (input.value == listaInvitati[index]) {
            checkName = true;
            h1.innerText = ("Benvenutæ: " + input.value + '!' + " Sei pronto a fare festa?");
        }
        index++
    }if(!checkName){
        h1.innerText = ("Benvenutæ: " + input.value + '!' + " Non sei sulla lista");

    }
}



input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        buttonFesta = document.getElementById("button").click();
    }
});