button = document.getElementById("button").addEventListener("click", total);

let input = document.getElementById('input');



let h1 = document.getElementById('result');









function total() {
    let singleNumbers = input.value.split('');

    const initialValue = 0;
    const sumWithInitial = singleNumbers.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    );

    console.log(sumWithInitial);




}