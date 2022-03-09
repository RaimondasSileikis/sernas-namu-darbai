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

const bitCats = [];
for (let i = 0; i < cats.length; i++) {
  const mazasMasyvas = [];
  for (let j = 0; j < 1; j++) {
  mazasMasyvas.push(cats[i], (!rand(0, 1) ? 'storas' : 'normalus'));
}
bitCats.push(mazasMasyvas);
  
}
console.log(bitCats);


// 3. bitCats masyve suskaičiuokite kiek yra storų ir normalių katinukų.
   
    let sumN = 0;
    let sumS = 0;
  for (let i = 0; i < bitCats.length; i++) {
      if (bitCats[i][1] === 'normalus') {
      sumN += 1;  
   }
      if (bitCats[i][1] === 'storas') {
     sumS += 1;
  }
}
 
  console.log('Storu :', sumS);
  console.log('Normaliu :', sumN);


// 4. Išrūšiuokite gautą bitsCats masyvą pagal antrą katinuko vardo raidę, abėcėlės tvarka (ne pagal 
//visą vardą, o tik pagal antrą raidę) Tokiu būdu katinukas vardu Rainius pagal antrą “a” raidę turėtų atsidurti viršuje.

const newCats = bitCats.sort((a, b) => {
  a1 = a[0][0].substring(1, 2);
  b1 = b[1][0].substring(1, 2);
  if (a1 === b1) {
    return 0;
  }
  return a1 > b1 ? 1 : -1;
});

console.log(newCats);


// 5.  (BOSO lygis) Iš masyvų bitGirls ir bitCats padarykite masyvą happyCats, kurio elementai būtų masyvai iš mergaitės vardo 
// ir katinuko vardo. Nausėdai katinuko neduokit (nes neužteks) ir Nausėdai vietoj katinuko priskirkite stringą “Barsukas”.
