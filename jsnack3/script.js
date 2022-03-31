button = document.getElementById("button").addEventListener("click", total);

let h1 = document.getElementById('result');

function total(){

let numbers = false;
while (numbers == false) {
   let input = document.getElementById('input').value;
    if (input.length != 4) {
        alert("Inserisci un numero di 4 cifre!");
        return
    } else {
        numbers = true;
        const numberArray = input.split("");
        let results = 0;
        console.log(numberArray)
        let i = 0
        while (i < 4) {
            results += parseInt(numberArray[i]);
            i++;
        }
        h1.innerText=(`La somma delle cifre inserite è ${results}`)
    }
}
}




