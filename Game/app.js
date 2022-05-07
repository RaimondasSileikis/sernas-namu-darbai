console.log('Masyvai basic');

function rand(min, max) {           //rand funkcija
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

// Game

//Žaidimo ekranas sudarytas iš dviejų kvadratų, mygtukų “start” ir “reset” ir laikmačio, skaičiuojančio sekundes.

//Kvadratai sudaryti iš 25 mažesnių kvadratukų ir sudaro matricą 5X5. Abu kvadratai žaidimo pradžioje tušti.
// Paspaudus “start” mygtuką įsijungia laikmatis, o kairysis kvadratas užpildomas spalvotais rutuliukais su 
//skaičiais nuo 1 iki 25. Spalvos ir rutuliukų išdėliojimas atsitiktiniai. Žaidimo tikslas rutuliukus sudėlioti 
//iš eilės (1,2,3…) perkeliant juos iš kairiojo kvadrato į dešinį. Spaudžiant ant rutuliuko kairiajame kvadrate, 
//rutuliukas pereina į dešinį. Dešiniajame kvadrate rutuliukai dėliojami tik iš eilės. Pirmiausia reikia perkelti 
//rutuliuką su skaičiumi 1 toliau su skaičiumi 2 ir t.t. Bandant perkelti rutuliuką ne iš eilės, turi trumpam atsirasti 
//pranešimas apie pasirinktą netinkamą rutuliuką. Žaidimas pasibaigia perkėlus paskutinį, 25 rutuliuką. Laikmatis sustabdomas.
// Paspaudus mygtuką “reset”, abu kvadratai ištuštinami, o laikmatis padaromas 0.




const input = '2171982574421258885099620649924996875764225418303396078312041921962705951878779582281166894499629515706522785689676321482000332927261083062892819432422208';
console.log('duota: "',input, '"');
let k = 1;
let k0 = 0;
let item ;

let masyvas = [];
for (let i = 0; i < input.length; i++) {
  masyvas.push(input.substring(i, i + 2))
}
console.log('Sukurtas masyvas :', masyvas);
for (let i = 0; i < masyvas.length; i++) {
  for (let j = i; j < masyvas.length; j++) {
   if (masyvas[i] === masyvas[j]) {
      k0++;
     
    if (k < k0) {
       k = k0;
     item = masyvas[i];
    }
   }
  }
  k0 = 0
}

console.log('Didziausia  reiksme: ',item);
console.log('Kartojasi:', k, 'kartus');
