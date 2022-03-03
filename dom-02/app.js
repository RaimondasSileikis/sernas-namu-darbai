// 1. Sukurti text tipo input elementą ir mygtuką. Paspaudus mygtuką input elemente esantį tekstą išvesti į console.log 
const body = document.querySelector('body')

const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'irasas')

const button = document.createElement('button');
const mygtukas = document.createTextNode('Mygtukas')
button.appendChild(mygtukas);

document.body.appendChild(input);
document.body.appendChild(button);

const irasas = document.querySelector('#irasas');

irasas.addEventListener('input', () => {
    console.log(irasas.value);
});

button.addEventListener('click', () =>  {
    console.log('Enter:' + irasas.value);
});


// 2. Sukurti select tipo elementą su trim reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus reikšmėm select elemente,
// naują reikšmę išvesti į console.log

const select = document.createElement('select');
const option1 = document.createElement('option');
option1.setAttribute('value', 'rytas');
const option2 = document.createElement('option');
option2.setAttribute('value', 'diena');
const option3 = document.createElement('option');
option3.setAttribute('value', 'vakaras');

const rytas = document.createTextNode('rytas');
const diena = document.createTextNode('diena');
const vakaras = document.createTextNode('vakaras');

option1.appendChild(rytas);
option2.appendChild(diena);
option3.appendChild(vakaras);

select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);

document.body.appendChild(select);


select.addEventListener('input', () => {
    console.log('select: '  + select.value);
});


// 3. Sukurti tris radio tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus reikšmėm radio elemente, 
// naują reikšmę išvesti į console.log

const fieldset = document.createElement('fieldset')

const radio1 = document.createElement('input');
radio1.setAttribute('type', 'radio')
radio1.setAttribute('value', 'rytas')
const radio2 = document.createElement('input');
radio2.setAttribute('type', 'radio')
radio2.setAttribute('value', 'diena')
const radio3 = document.createElement('input');
radio3.setAttribute('type', 'radio')
radio3.setAttribute('value', 'vakaras')



const rytas2 = document.createTextNode('rytas');
const diena2 = document.createTextNode('diena');
const vakaras2 = document.createTextNode('vakaras');

radio1.appendChild(rytas2);
radio2.appendChild(diena2);
radio3.appendChild(vakaras2);


fieldset.appendChild(radio1)
fieldset.appendChild(radio2)
fieldset.appendChild(radio3)

document.body.appendChild(fieldset)

fieldset.addEventListener('click', () => {
    console.log('select: '  + fieldset.value);
});


// 4. Sukurti vieną checkbox tipo elementą. Pažyminėjus elementą išvesti i console.log pranešimą “pažymėta”, o nuėmus pažymėjimą- “nepažymėta”




// 5. Sukurti tris checkbox tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus kažkuriai checkbox elemento reikšmei (pažymint arba atžymint checkbox’ą), išvesti į console.log visų pažymėtų checkbox’ų reikšmes.


// 6. Sukurti elementą h1. Pakartoti 1-5 uždavinius rezultato tekstą įkeliant į tą sukurtą elementą.


// 7. Pakartoti 1-5 uždavinius rezultatus atvaizduojant DOM’e dinamiškai sukurtuose elementuose h3


// 8. Pakartoti 1-5 uždavinius. Kiekvienam uždaviniui sukurti naują tuščią masyvą (arba vieną objektą su 5 masyvais viduje). Kiekvieną pasikeitimo reikšmę įrašyti į masyvą kaip naują elementą (5 uždavinio atveju įrašyti masyvą su pažymėtom reikšmėm) ir į console.log išvesti tą masyvą.


// 9. Padaryti mygtuką “GO”, kurį paspaudus, naudojant masyvus, gautus 8 uždavinyje, dinamiškai, iš tų masyvų duomenų, būtų sukurta daug h3 tagų kaip tai buvo padaryta 7 uždavinyje (vienas įrašas masyve, atinka vieną naują h3 tagą).


// 10 Padaryti mygtuką “Reset”, kuris ištrintų duomenis iš visų masyvų.


// 11 Padaryti mygtuką “Clear”, kuris ištrintų visus h3 tagus iš DOM’o.


// 12 Padaryti mygtuką “GO JSON”, kurį paspaudus, 9 uždavinio masyvus būtų sudėti į sukurtą naują objektą. Tą objektą paversti JSON stringu ir užsaugoti susikurtam kintamąjame. Kintamąjį išvesti i console.log Nuskaityti JSON stringą iš kintamojo, paversti jį objektu ir iš jo informacijos dinamiškai suformuoti h3 tagus kaip 9 uždavinyje.



// PASTABA: Visus input, button, select ir t.t. elementus kurti tiesiogiai įrašant kodą į html failą, ne su JavaSkriptu išskyrus tas vietas kur pabrėžta, jog elementus reikia sukurti dinamiškai. Tuo atveju elementus reikia kurti ne tiesiogiai html’e, o juos generuojan javaskripto kodu.
