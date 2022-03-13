console.log('Knygynas 07');

function rand(min, max) {           //rand funkcija
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}


//  https://in3.dev/knygos/
//  https://in3.dev/knygos/types/

//Reikia padaryti knygyno puslapį, gražiai viską išdėliojant html'e.
//Reikia padaryti add to favorite mygtuką.



const main = document.querySelector('main');


fetch('https://in3.dev/knygos/types/') // GET metodas uzklausa
.then(response => response.json())      // then yra laukimas atsakymo
.then(data => {                         // then kol bus apdorotas atsakymas
  console.log('--------', data)
// kodas

if (localStorage.getItem('dataL') === null) {
  const dataL = JSON.stringify(data);
localStorage.setItem('dataL', dataL);
}
const dataLP = JSON.parse(localStorage.getItem('dataL'));

console.log('Masyvas "data" esantis localStorage', dataLP);

                    //let rows = '';

for (let i = 0; i < dataLP.length; i++) {
 const dataN = dataLP[i];
                    // rows += `<div id="` + dataN.id + `"class="group"></div>
                    //        <h1>IŠPARDAVIMAS: ` + dataN.title + `</h1>`;
    

const h1 = document.createElement('h1');
const textH1 = document.createTextNode('IŠPARDAVIMAS: ' + dataN.title);
h1.appendChild(textH1);

const div = document.createElement('div');
div.setAttribute('class', 'group');
div.setAttribute('id', dataN.id);

const container = document.querySelector('.container');
container.appendChild(h1);
container.appendChild(div);


  fetch('https://in3.dev/knygos/types/') // GET metodas uzklausa
  .then(response => response.json())      // then yra laukimas atsakymo
  .then(data => {                         // then kol bus apdorotas atsakymas
    console.log('--------2', data)
  // kodas
  
  const book = document.getElementById(dataN.id);
  
  //let rows1 = '';
  
  for (let i = 0; i < data.length; i++) {
   const dataNN = data[i];
   if (dataN.id === dataNN.type) {
              // easy method
              //rows1 += `<div class="book" id="` + dataNN.id + `">
              //          <img src="` + dataNN.img + `" alt="` + dataNN.title + `">
              //          <h2>` + dataNN.title + `</h2>
              //          <h3>` + dataNN.author + `</h3>
              //          <span>` + dataNN.price + `</span>
              //          <i id="like ` + dataNN.id + `" class="fa fa-heart"></i>
              //          <button id="btn` + dataNN.id + `">add to favorite</button>
              //          <button id="btn2` + dataNN.id + `" class="btn">remove from favorite</button>
              //          </div>`;

const divBook = document.createElement('div');
divBook.setAttribute('class', 'book');
divBook.setAttribute('id', dataNN.id);

const img = document.createElement('img');
img.setAttribute('src', dataNN.img);
img.setAttribute('alt', dataNN.title);
divBook.appendChild(img);

const h2 = document.createElement('h2');
const textH2 = document.createTextNode(dataNN.title);
h2.appendChild(textH2);
divBook.appendChild(h2);

const h3 = document.createElement('h3');
const textH3 = document.createTextNode(dataNN.author);
h3.appendChild(textH3);
divBook.appendChild(h3);

const span = document.createElement('span');
const textSpan = document.createTextNode(dataNN.price);
span.appendChild(textSpan);
divBook.appendChild(span);

const i = document.createElement('i');
i.setAttribute('id', 'like' + dataNN.id)
i.setAttribute('class', 'fa fa-heart');
divBook.appendChild(i);

const button = document.createElement('button')
const textButton = document.createTextNode('add to favorite');
button.appendChild(textButton);
button.setAttribute('id', 'btn' + dataNN.id)
divBook.appendChild(button);

const button2 = document.createElement('button')
const textButton2 = document.createTextNode('remove from favorite');
button2.appendChild(textButton2);
button2.setAttribute('id', 'btn2' + dataNN.id)
button2.setAttribute('class', 'btn')
divBook.appendChild(button2);


book.appendChild(divBook);


//add to favorite and remove from favorite buttons

let likeColor = localStorage.getItem('color' + dataNN.id);  
if (likeColor === null) {                                   
  localStorage.setItem('color' + dataNN.id, 'grey');
  likeColor = 'grey'; 
}

const btnAdd = document.getElementById('btn' + dataNN.id);
console.log('ewff', btnAdd);
const like = document.getElementById('like' + dataNN.id);
like.style.color = likeColor;

btnAdd.addEventListener('click', () => {
  like.style.color = 'green';
  localStorage.setItem('color' + dataNN.id, 'green');
});

const btnRemove = document.getElementById('btn2' + dataNN.id);
btnRemove.addEventListener('click', () => {
  like.style.color = 'grey';
  localStorage.setItem('color' + dataNN.id, 'grey');
});

      }
    
  }
  
  //book.innerHTML = rows1;
  
  });       

}

//main.innerHTML = rows;

});       
