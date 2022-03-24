console.log('Objektiniai uzdaviniai 2 , 10');


//Objektiniai uždaviniai #2


// 1. Sukurti klasę Marsas. Sukurti statinį metodą pridetiPalydovą(), kuris sukuria naują Marsas objektą,
// turintį dvi savybes id: rand 100000 - 999999 ir pavadinimas: pagal taisyklę iškvietus pirmą kartą “Deimas”,
// antrą kartą “Fobas”. Metodas grąžina Marsas objektą. Metodą iškvietus trečią, ketvirtą ir t.t. kartus, 
//metodas turi nekurti daugiau naujų Marsas objektų, o grąžinti atsitiktine tvarka, vieną iš dviejų jau sukurtų
// Marsas objektų. Tarkim penkis kartus iškvietus metodą, turime matyti tik du skirtingus objektus (žiūrim pagal id).
console.log('1 uzdavinys');


class Marsas {
  static deimas;
  static fobas;
  static planetos = [];
 
  static pridetiPalydova(){
 if (this.deimas instanceof Marsas) {
   if (this.fobas instanceof Marsas) {
     
   } else {
     this.fobas = new Marsas('Fobas');
     this.planetos.push(this.fobas)
     return this.fobas;
     
   }
 } else {
   this.deimas = new Marsas('Deimas');
   this.planetos.push(this.deimas)
   return this.deimas;
 }
  //return this.planetos[rand(0, 1)];
  }

  constructor( pav ) {
    this.id = this.rand(100000, 999999);
    this.pavadinimas = pav;
  }
   rand(min, max) {           //rand funkcija
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
  
}

console.log(Marsas.pridetiPalydova());
console.log(Marsas.pridetiPalydova());
console.log(Marsas.pridetiPalydova());

//2. Sukurti klasę Puodelis. Puodelis turi dvi savybes: spalva ir ipilta. Sukurti statinį metodą gamintiPuodelius(),
// kuris pagamina du objektus su savybių reikšmėm: “raudonas”, “pilnas” ir “geltonas”, “tuščias”. Sukurti statinį metodą
// perpilti(), kuris “pilną” puodelį padaro tuščią ir atvirkščiai. Sukurti statinį metodus ispiltiViska(), kuris abu 
//puodelius padaro “tuščius” ir ipiltiIAbu(), kuris abu puodelius padaro “pilnus”. Po šių metodų iškvietimo, metodas 
//perpilti() turi veikti korektiškai ir logiškai (arba abu “tušti” arba abu “pilni”).

class Puodelis{

  static indai = [];
  static gamintiPuodelius(){
    this.indai[0] = new this( 'raudonas', 'pilnas');
    this.indai[1] = new this( 'geltonas', 'tuscias');
  }

  constructor( spalva, ipilta){
    this.spalva = spalva;
    this.ipilta = ipilta;
  }

  static perpilti(){
    let tmp = this.indai[0].ipilta;
    this.indai[0].ipilta = this.indai[1].ipilta;
    this.indai[1].ipilta = tmp;
    
  }
  static ispilti() {
    this.ipilta = 'tuscias';
  }
  static pripilti() {
    this.ipilta = 'pilnas';
  }

  static ispiltiViska(){
    this.indai[0].ispilti();
    this.indai[1].ispilti();
}

};
Puodelis.gamintiPuodelius();
console.log(Puodelis.indai);

Puodelis.perpilti();

Puodelis.ispilti();

Puodelis.pripilti();
//Puodelis.ispiltiViska();



//3. Sukurti klasę Taskas, kuris turi savybę taskas rand 100-999. Sukurti klasę Taskai, kuris turi savybe taskai, kuri
// yra masyvas iš 10 Taskas objektų. Sukurkite išorinį kintamąjį (nepriklausantį jokiai klasei) daugTasku, kuris yra
// masyvas iš 10 elementų, o kiekvienas elementas yra Taskai objektas. Išrūšiuokite masyvą daugTasku, pagal taskų 
// nuo didžiausio iki mažiausio.
console.log('3 uzduotis');

class Taskas{

  constructor(){
    this.taskas = this.rand(100, 999);

  }
  rand(min, max) {           //rand funkcija
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

}

class Taskai {

  constructor(){
  this.taskai = []
for (let i = 0; i < 10; i++) {
  this.taskai.push(new Taskas());
  
}

  }
}

const daugTasku = [];
for (let j = 0; j < 10; j++) {
  daugTasku.push(new Taskai());
  
}
daugTasku.sort((a, b) => a[Taskas.taskas] + b[Taskas.taskas])



console.log(daugTasku);
//4. Sukurti klasę Div. Sukūrus naują objektą iš šios klasės HTML’e turi atsirasti naujas <div> tagas su rand 1000 - 
// skaičiumi viduje. Sukurti metodą spalva(color), kuris keistų to <div> tago spalvą. Taip pat statinį metodą 
//visuSpalva(color), kuris keistų visų <div> tagų, sukurtų per klasę, spalvą.

console.log('4uzduotis');

//5. Sukurti klasę Post. Kuriant objektą iš šios klasės, reikia įrašyti id savybę, pasirinktinai nuo 1 iki 100. Objektas 
//turi turėti visas savybes gautas iš serverio adresu: https://jsonplaceholder.typicode.com/posts/1 (objektas su id: 1).

