console.log('Tarpinis žinių patikrinimas 03');

function rand(min, max) {           //rand funkcija
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Murka', 'Bosas', 'Dičkis'];

// 1. Prie masyvo bitGirls pradžios (ne galo!) pridėkite Nausėdą
// (po pridėjimo bitGirls turės 6 elementus).

bitGirls.unshift('Nauseda');
console.log(bitGirls);

//2. Sukurkite naują masyvą bitCats iš masyvo cats taip kad naujasis masyvas 
// turėtų elementus iš mažų, dviejų narių, masyvų: pirmas narys katinuko vardas, 
// antras - katinuko svoris - atsitiktinės tekstinės reikšmės - “storas” arba“normalus”.

const bitCats = bitGirls.map(function (name, i) {
 
    const svoris = ['storas', 'normalus'];
    return [name, svoris[Math.floor(Math.random() * svoris.length)]]; 
});
console.log(bitCats);

// 3. bitCats masyve suskaičiuokite kiek yra storų ir normalių katinukų.

console.log(newBitCats);
const count = [];

for (const el of newBitCats) {
  if (count[el]) {
    count[el] += 1;
  } else {
    count[el] = 1;
  }
}

console.log('Storu :', count['storas']);
console.log('Normaliu :', count['normalus']);







// 4. Išrūšiuokite gautą bitsCats masyvą pagal antrą katinuko vardo raidę, abėcėlės tvarka (ne pagal 
//visą vardą, o tik pagal antrą raidę) Tokiu būdu katinukas vardu Rainius pagal antrą “a” raidę turėtų atsidurti viršuje.

bitCats.sort((a, b) => {
  a1 = a.substring(1, 2);
  b1 = b.substring(1, 2);
  if (a1 === b1) {
    return 0;
  }
  return a1 > b1 ? 1 : -1;
});

console.log(bitCats);



// 5.  (BOSO lygis) Iš masyvų bitGirls ir bitCats padarykite masyvą happyCats, kurio elementai būtų masyvai iš mergaitės vardo 
// ir katinuko vardo. Nausėdai katinuko neduokit (nes neužteks) ir Nausėdai vietoj katinuko priskirkite stringą “Barsukas”.

