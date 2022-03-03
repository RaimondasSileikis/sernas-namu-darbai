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
const newBitCats = bitCats.flat();
console.log(newBitCats);
const count = [];

for (const element of newBitCats) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count);

// 4. Išrūšiuokite gautą bitsCats masyvą pagal antrą katinuko vardo raidę, abėcėlės tvarka (ne pagal 
//visą vardą, o tik pagal antrą raidę) Tokiu būdu katinukas vardu Rainius pagal antrą “a” raidę turėtų atsidurti viršuje.

