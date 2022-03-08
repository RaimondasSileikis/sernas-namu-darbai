console.log('Tarpinis žinių patikrinimas 04');

function rand(min, max) {           //rand funkcija
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

//Masyvai


// 1. Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės
//    atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);

const pinigine = [];
for (let i = 0; i < rand(10, 30); i++) {
  pinigine.push(rand(0, 10));
  
}
console.log(pinigine);

// 2. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;
let sum = 0;
for (let i = 0; i < pinigine.length; i++) {
  sum += pinigine[i]; 
  
}
console.log('Pinigineje yra :', sum);

// 3. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
let sumPop = 0;
for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] > 2) {
    sumPop += pinigine[i];
  }
  
}
console.log('Pinigineje popieriniu pinigu suma yra :', sumPop);

// 4. Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;
let sumBeMetalo = sum;
for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] <= 2) {
    sumBeMetalo -= pinigine[i];
  }
  
}
console.log('Pinigineje, isleidus metalinius pinigus liko :', sumBeMetalo);

// 5. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;

let sumDid = 0;
for (let i = 0; i < pinigine.length; i++) {
   if (pinigine[i] === Math.max(...pinigine)) {
     sumDid += 1; 
   }
  
}

console.log('Didziausia reiksme :', Math.max(...pinigine), 'viso didziausiu reiksmiu yra :', sumDid);

// 6. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;

for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] === 0) {
    pinigine[i] = i;
  }
  
}
console.log(pinigine);

// 7. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis
// būtų lygiai 30;

  while (pinigine.length < 30) {
    pinigine.push(rand(0,10));
  }

console.log(pinigine);

// 8. Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti
// reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);

let pinigine1 = [];
let pinigine2 = [];
for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] <= 2) {
    pinigine1.push(pinigine[i])
  } else {
    pinigine2.push(pinigine[i])
  }
  
}
console.log('Monetu masyvas: ', pinigine1);
console.log('Popieriniu pinigu masyvas: ', pinigine2);

// 9. Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio
// su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;

const newPinigine = [pinigine1, pinigine2];
console.log('Pinigine su dviem skyreliais: ', newPinigine);


// 10. Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: 
// ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
const kortele = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
newPinigine.push(kortele)
 
console.log('Pinigine su trimis skyreliais :', newPinigine);
 
// 11. Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;

newPinigine[kortele.sort()];
console.log('Surusiuota: ', newPinigine);

// 12.  Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes
// 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;

while (kortele.length <= 20) {
  kortele.push(!rand(0, 1) ? 'MasterCard':'Visa');
}

console.log('Pinigines korteleje prideta Mastercard ir Visa: ', newPinigine);

// 13. Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
let sumM = 0;
  let sumV = 0;
for (let i = 0; i < kortele.length; i++) {
  
  if (kortele[i] === 'MasterCard') {
    sumM += 1;
  } 
  if (kortele[i] === 'Visa') {
    sumV += 1;
  }
}
  console.log('MasterCard korteliu yra: ', sumM,'.', 'Visa korteliu yra: ', sumV,'.');


// 14. Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius 
// sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;
const skyrelis = [];
for (let i = 0; i < 10; i++) {
  
  skyrelis.push(rand(1000000000, 9999999999));
}

console.log(skyrelis);
newPinigine.push(skyrelis);

console.log('Pinigineje pridetas ketvirtas elementas :',newPinigine);
// 15. Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;

newPinigine[skyrelis.reverse()];
console.log('Loterijos bilietu masyvas isrusiuotas nuo didziausio iki maziausio: ', newPinigine);

// 16. Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10
// ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);

/*const newMoney = [];
let newM = 0;
while (newM < 20) {
  const i = rand(3, 10);
  newMoney.push(i);
  newM += i;
}
*/
const newMoney = [];
let newM = 0;
do {
  const i = rand(3, 10);
  newMoney.push(i);
  newM += i;
} while (newM <= 500);

console.log(newMoney);
pinigine2.push(...newMoney);

console.log(pinigine2);
console.log(newPinigine);
// 17. Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - 
// jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.



// 18. Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas 
// išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;

