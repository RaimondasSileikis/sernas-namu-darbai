console.log('Masyvai basic');

function rand(min, max) {           //rand funkcija
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

// Masyvai basic
console.log('Masyvai basic');
// 1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės
// yra atsitiktiniai skaičiai nuo 5 iki 25.
const masyvasA = [];
for (let i = 0; i < 30; i++) {
    masyvasA.push(rand(5, 25));
}
console.log('Sugeneruotas masyvas is 30 random elementu "masyvasA": ', masyvasA);

// 2. Naudodamiesi 1 uždavinio masyvu:
//    a. Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
console.log('2. a. Suskaičiuokite kiek masyve "masyvasA" yra reikšmių didesnių už 10:');
    let reiksmeVirs10 = 0;
    for (let i = 0; i < masyvasA.length; i++) {
        const elementas = masyvasA[i];
       if (elementas > 10) {
            reiksmeVirs10 ++;
       }
    }
    console.log('Masyve "masyvasA" reiksmiu virs 10 yra: ', reiksmeVirs10);

//    b. Raskite didžiausią masyvo reikšmę ir jos indeksą;
console.log('2. b. Raskite didžiausią masyvo reikšmę ir jos indeksą:');
    const maxReiksme = Math.max(...masyvasA);
    for (let i = 0; i < masyvasA.length; i++) {
          const elementas = masyvasA[i];
        if (elementas === maxReiksme) {
        console.log('Diziausia masyvo "masyvasA" reiksme yra: ', maxReiksme, 'indeksas :', i);
        }
    }

//    c. Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
console.log('2. c. Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą:');
let porSum = 0;

for (let i = 0; i < masyvasA.length; i++) {
    const elementas = masyvasA[i];
    if (i != 0 && i % 2 === 0 ) {
        porSum += elementas;
    }   
}
console.log('Visų porinių (lyginių) indeksų reikšmių sumą: ', porSum);

//    d. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus
// tos reikšmės indeksas;
console.log('2. d. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas:');

const masyvasB = [];
for (let i = 0; i < masyvasA.length; i++) {
    masyvasB.push(masyvasA[i] - i);
}
console.log('Naujas masyvas "masyvasB" yra lygus  masyvo "masyvasA" reikšmes minus tos reikšmės indeksas', masyvasB);

//    e. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras
// masyvas padidėtų iki indekso 39;
console.log('2. e. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39:');

for (let i = 0; i < 10; i++) {
    masyvasB.push(rand(5, 25));
}
console.log('Papildytas masyvas "masyvasB: ', masyvasB);
//    f. Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių
// indeksų reikšmių, o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);
console.log('2. f. Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę): ');
const masyvasPorinis = [];
const masyvasNeporinis = [];
for (let i = 0; i < masyvasB.length; i++) {
    const elementas = masyvasB[i];
    if (i % 2 === 0) {
        masyvasPorinis.push(elementas);
    } else {
        masyvasNeporinis.push(elementas);
    }
    
}
console.log('Masyvas "masyvasPorinis:', masyvasPorinis, 'Masyvas "masyvasNeporinis: ', masyvasNeporinis);
//    g. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
console.log('2. g. Pirminio masyvo "masyvasA" elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15:');



console.log('Pakeistas pirminis masyvas "masyvasA": ', masyvasA);

//    h. Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;

// 3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200.
// Suskaičiuokite kiek yra kiekvienos raidės.
// 4. Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas
// reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių
// kombinacijų gavote.
// 5. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. 
//Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
// 6. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 6 uždavinio masyve,
// bet nėra antrame 6 uždavinio masyve.
// 7. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 6 uždavinio masyvuose.
// 8. Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 6 uždavinio masyvo reikšmės, o jo 
//reikšmės iš būtų antrojo masyvo.
// 9. Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 
//5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir
// ketvirto suma ir t.t.

