console.log('Tarpinis žinių patikrinimas 01');


const tortukas = new Tortas();
for (const property in tortukas) {
console.log(`${property}: ${tortukas[property]}`);
}




function rand(min, max) {           //rand funkcija
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

// 1. Programiškai ridenkite du žaidimo kauliukus- sugeneruokite du atsitiktinius skaičius nuo 1 iki 6.
//Jeigu kauliukų suma didesnė nei 8 jūs laimėjote, priešingu atveju pralošėte. Išveskite atsakymą,
//kuriame būtų abiejų kauliukų reikšmės ir išvada laimėjote ar pralošėte.
console.log('1 uzduotis');

const aSk = rand(1, 6);
const bSk = rand(1, 6);
sum1 = aSk + bSk;
if (sum1 > 8) {
    console.log(aSk, bSk, 'jus laimejote');
} else {
    console.log(aSk, bSk, 'jus pralaimejote');
}

//2. Gyveno du katinukai, Pilkis ir Murklys. Jų svoriai kilogramais buvo atsitiktiniai dydžiai
// nuo 3 iki 6. Parašyti programą, kuri išvestų katinukų svorius ir apskaičiuotų, kuris katinukas
// yra lengvesnis. Atsakymas turi būti katinukų vardai su jų svoriais ir lengvesnio katinuko vardas. 
// Jeigu katinukai sveria vienodai, vietoj katinuko vardo parašykite, kad “katinukų svoriai vienodi”.
console.log('2 uzduotis');

const pilkioSvoris = rand(3, 6);
const murklioSvoris = rand(3, 6);
if (pilkioSvoris === murklioSvoris) {
    console.log(pilkioSvoris, 'katinuku svoriai vienodi');
} else if (pilkioSvoris < murklioSvoris) {
    console.log(pilkioSvoris, 'Pilkis');
} else {
    console.log(murklioSvoris, 'Murklys');
}

//3. Nojus pasiruošė potvyniui ir nusipirko dvi valtis. Vienoje telpa 15 katinukų, kitoje 15 karvių
// (katinukus galima sodinti tik į katinukų valtis, o karves tik į karvių, maišyti negalima) Prasidėjus 
//liūčiai pas Nojų atėjo atsitiktinis skaičius nuo 0 iki 30 katinukų ir toks pats atsitiktinis skaičius karvių. 
//Išveskite atėjusių katinukų ir karvių skaičių ir ar Nojus galės juos sutalpinti į valtis. Jeigu netelpa tik 
//katinukai arba tik karvės vistiek išveskite “Netelpa”. Kas konkrečiai netelpa išvedinėti nereikia. “Telpa” 
//išveskite tik tuo atveju jeigu ir katinukai ir karvės telpa.
console.log('3 uzduotis');

const katinukuSk = rand(0, 30);
const karviuSk = rand(0, 30);
if (katinukuSk > 15 || karviuSk > 15) {
    console.log('Netelpa');
}
if (katinukuSk <= 15 & karviuSk <= 15) {
    console.log('Telpa');
}

//4. Antanas nusipirko naują butą ir pinigų jam liko nedaug. Dabar jis niekaip negali apsispręsti ką pirmiausiai pirkti: 
//televizorių, skalbimo mašiną ar šaldytuvą. Todėl nusprendžia ridenti kauliuką (atsitiktinis skaičius nuo 1 iki 6) ir 
//jeigu iškris 1 arba 5 pirkti televizorių, jeigu 3 arba 4 pirkti skalbimo mašiną ir jeigu 2 arba 6 - šaldytuvą. Padėkite
// Antanui apsispręsti. Ridenkite kauliuką ir parašykite atsakymą kokį daiktą jam pirkti.
console.log('4 uzduotis');

const antanoSk = rand(1, 6);
if (antanoSk === 1 || antanoSk === 5 ) {
    console.log('televizorius');
}
if (antanoSk === 3 || antanoSk === 4 ) {
    console.log('skalbimo masina');
}
if (antanoSk === 2 || antanoSk === 6 ) {
    console.log('saldytuvas');
}

//5 (BOSO lygis) Sugeneruokite tris atsitiktinius skaičius nuo 1 iki 7. Skaičius atspausdinkite nuo mažiausio iki didžiausio.
// Pavyzdžiui: sugeneravus 4, 2, 4 juos reikia atspausdinti tokia tvarka: 2 4 4;
console.log('5 uzduotis');

const bosoSkaiciai = [];
for (let i = 0; i < 3; i++) {
    const bosoSk = rand(1, 7);
    bosoSkaiciai.push(bosoSk);
}
let surusiuotiSk = bosoSkaiciai.sort((a, b) => a - b);
console.log(surusiuotiSk);