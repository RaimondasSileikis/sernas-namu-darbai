/*1. Atskiri elementai
    a. Tamsiai žaliai nuspalvinti h1 tagą;
    */
document.querySelector('#h1-color').style.backgroundColor = 'darkgreen';


/*
    b. Tagui i pridėti klasę small;
    https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
*/

const i = document.querySelector('i');
    i.classList.add('small');
/*
    c. Iš tago h1 pašalinti klasę main;
*/
const h1 = document.querySelector('h1');
    h1.classList.remove('main');
/*
    d. Tik tam h2 tagui, kuris iškart eina po h1 tago, pridėti klasę first ir pašalinti klasę main;
    https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
*/
const h2 = document.querySelector('h1 + h2');
    h2.classList.add('first')
    h2.classList.remove('main')

/*
    e. Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
*/
const span = document.querySelector('div h2 span');
span.style.fontSize = '10px';
span.style.color = 'blue';

/* 2. Elemetų grupės (nodeList) skaičiavimus išvest į consolę
    a. Suskaičiuoti kiek yra h2 tagų;
*/

const listH2 = document.getElementsByTagName('h2');
console.log(listH2.length);
/*
    b. Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
*/
const listH21 = document.querySelectorAll('.first').querySelectorAll('h2');
console.log(listH21.length);
/*
    c. Visus h2 tagus nuspalvinti šviesiai mėlynai
*/
const bluetext = document.querySelector('h2 [style="color:blue"]').innerText
/*
    d. Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
    ePabraukti visus tagus su klase new;
    e. uskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
    f. Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
    h. Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
    i Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
*/


/* 3. Elementų events
    a. Padaryti tai ką liepia mygtukai Header1 sekcijoje;
    b. Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
    c. Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
    d. Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;
    e. Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;
    f Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element
    g. Padaryti tai ką liepia mygtukai Header2 sekcijoje;
*/



/* 4. Elementų grupių events
    a. Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
    b. Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.
    c. Padaryti, kad paspaudus ant “PATINKA”, atitinkamai (tėvinei) sekcijai būtų priskirta klasė like;
*/

/* 5.Dinaminis elementų kūrimas (su createElement)
    a. Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;
    b. Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;
    c. Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like
    d. Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta
*/

