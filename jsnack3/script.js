const imagesArray = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg'
];

const titlesArray = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let prevButton = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton')
let itemActive = document.getElementById('active');
let thumbContainer = document.getElementById('thumbContainer');
let items = document.getElementsByClassName('items');
const itemsContainer = document.getElementById('items-container');
const thumbnails = document.getElementsByClassName('thumbnail');






for (let k = 0; k < imagesArray.length; k++) {

}


let currentIndex = 0;

for (let i = 0; i < imagesArray.length; i++) {

    let classActive = ""
    if (i === currentIndex) {
        classActive = "active"
    }
    itemsContainer.innerHTML += `<div class="items ${classActive} ">
                                    <img src="${imagesArray[i]}">
                                    <div class="container">
                                    <div class="row justify-content-center align-items-center">
                                    <div class="col-12">
                                        <div class="title">
                                            <h2 class="h2">${titlesArray[i]}</h2>
                                            <p class="text">${text[i]}.</p>
                                    </div>
                                       
                                    </div>
                          
                                    </div>
                                        
                                    </div>`


    thumbContainer.innerHTML += `<div class= "thumbnail ${classActive}">
                                    <img class="w-100" src = "${imagesArray[i]}">
                                    </div>`

}

//let firstItem = document.querySelector(".items").classList.add("active");


console.log(titlesArray)
console.log(items)
console.log(imagesArray)


nextButton.addEventListener("click", function () {
    if (currentIndex < 4) {
        items[currentIndex].classList.add("d-none");
        items[currentIndex].classList.remove("active");
        thumbnails[currentIndex].classList.remove("active");

        currentIndex++;

        thumbnails[currentIndex].classList.add("active");
        items[currentIndex].classList.remove("d-none");
        items[currentIndex].classList.add("active");
    }

});

prevButton.addEventListener('click', function () {

    if (currentIndex > 0) {
        thumbnails[currentIndex].classList.remove("active");
        items[currentIndex].classList.add("d-none");
        items[currentIndex].classList.remove("active");
        currentIndex--;
        thumbnails[currentIndex].classList.add("active");
        items[currentIndex].classList.remove("d-none");
        items[currentIndex].classList.add("active");
    }
});

let nomePaese = 'Germania';
let checkCountry = false;
let checkIndex = "";

// for (let r = 0; r < titlesArray.length; r++) {


//     if (nomePaese == titlesArray[r]) {
//         checkCountry = true;
//         checkIndex = r;
//     }

//     console.log('indice corrente: ', r, 'indice trovato: ', checkIndex);
// }

let index = 0;
//se non la trovi comunque fermati
while (checkCountry === false && index < titlesArray.length) {
    if (nomePaese == titlesArray[index]) {
        checkCountry = true;
        checkIndex = index;
        console.log(titlesArray[index])
    }

    console.log('indice corrente: ', index, 'indice trovato: ', checkIndex);
    index++
}


let somma = 0;

let numeri = [10, 21, 6, 14, 23, 12];
let indexNumeri = 0;
let saluta = true;

while (somma <= 80 && indexNumeri < 100) {
    somma += numeri[indexNumeri];
    indexNumeri++;
    console.log(somma, indexNumeri)
}

do {

    alert('ciao')
    indexNumeri++
    
} while (saluta && indexNumeri < 4)