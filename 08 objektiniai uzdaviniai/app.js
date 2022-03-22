console.log('Objektinaii uzdaviniai 08');

function rand(min, max) {           //rand funkcija
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

//Objektiniai uždaviniai

// 1. Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0.
// Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis)
// ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti vieną kibiro objektą 
// ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.
console.log('1 Uzdavinys');

class Kibiras1 {

  constructor() {
    this.akmenuKiekis = 0;
  }
prideti1Akmeni() {
this.akmenuKiekis ++;
}
pridetiDaugAkmenu(kiekis) {
this.akmenuKiekis += kiekis;
}
kiekPririnktaAkmenu() {

console.table(`Pririnkta akmenu ${this.akmenuKiekis} `);
}

}
 const kibiras = new Kibiras1();

kibiras.prideti1Akmeni();
kibiras.kiekPririnktaAkmenu();

kibiras.pridetiDaugAkmenu(5);
kibiras.pridetiDaugAkmenu(10);
kibiras.kiekPririnktaAkmenu();

kibiras.kiekPririnktaAkmenu();

// 2. Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai.
// Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda
// prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris
// suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir 
//pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.
console.log('2 Uzdavinys');

class Pinigine {
  constructor() {
    this.popieriniaiPinigai = 0;
    this.metaliniaiPinigai = 0;

  }
  ideti(kiekis) {
if (kiekis <= 2) {
  this.metaliniaiPinigai += kiekis;
} else {
  this.popieriniaiPinigai += kiekis;
}
  }
skaiciuoti() {
  const sum = this.popieriniaiPinigai + this.metaliniaiPinigai;

  console.log(`Viso pinigu yra: ${sum}`);
}

}
const pinigineA = new Pinigine();

pinigineA.ideti(10);
pinigineA.ideti(1);
pinigineA.ideti(3);

pinigineA.skaiciuoti();

// 3. Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus:
// ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų
// troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.
console.log('3 Uzdavinys');

class Troleibusas {

  constructor() {

    this.keleiviuSkaicius = 0;

  }
ilipa(keleiviuSkaicius) {
this.keleiviuSkaicius += keleiviuSkaicius;
}
islipa(keleiviuSkaicius) {
if (this.keleiviuSkaicius >= keleiviuSkaicius) {
  this.keleiviuSkaicius -= keleiviuSkaicius;
} else {
  this.keleiviuSkaicius = 0;
}
}
vaziuoja() {
  console.log(`Troleibusu vazuojanciu keleiviu skiacius yra: ${this.keleiviuSkaicius}`);
}

}

const troleibusas11 = new Troleibusas();
const troleibusas12 = new Troleibusas();

troleibusas11.ilipa(10);
troleibusas11.islipa(5);
troleibusas12.ilipa(10);

troleibusas11.vaziuoja();

// 4. (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose
// Troleibusas objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius
//(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas 
// bendras keleivių skaičius). Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).
console.log('4 uzdavinys');

class Troleibusas1 {

static visiKeleiviai = 0;
  
static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
  return new this(keleiviuSkaicius);  
}

static keleiviuSkaiciusVisuoseTroleibusuose() {
console.log('Bendras keleiviu skaicius visuose troleibusuose', this.visiKeleiviai);

}
  constructor() {

    this.keleiviuSkaicius = 0;

  }
ilipa(keleiviuSkaicius) {
this.keleiviuSkaicius += keleiviuSkaicius;
this.constructor.visiKeleiviai += keleiviuSkaicius;
}
islipa(keleiviuSkaicius) {
if (this.keleiviuSkaicius >= keleiviuSkaicius) {
  this.keleiviuSkaicius -= keleiviuSkaicius;
  this.constructor.visiKeleiviai -= keleiviuSkaicius;
} else {
  this.keleiviuSkaicius = 0;
}
}
vaziuoja() {
  console.log(`Troleibusu vazuojanciu keleiviu skiacius yra: ${this.keleiviuSkaicius}`);
}

}

const troleibusas21 = new Troleibusas1();
const troleibusas22 = new Troleibusas1();

troleibusas21.ilipa(10);
troleibusas21.islipa(5);
troleibusas22.ilipa(10);
troleibusas22.ilipa(10);
troleibusas21.islipa(5);

troleibusas21.vaziuoja();

Troleibusas1.keleiviuSkaiciusVisuoseTroleibusuose();

// 5. (MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. Sukurti
// tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti metodą krepselioTurinys(), kuris
// į konsolę išvestų produktų sąrašą (turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju
// produktų kiekis turėtų sumuotis.
console.log('5 uzdavinys');

class PirkiniuKrepselis {

  constructor() {
      this.turinys = new Map();
  }

  idetiSureli(kiekis) {
      this.ideti(kiekis, 'surelis');
  }
  idetiPieno(kiekis) {
      this.ideti(kiekis, 'pienukas');
  }
  idetiDuonos(kiekis) {
      this.ideti(kiekis, 'duonele');
  }
  ideti(kiekis, produktas) {
      let suma;
      if (this.turinys.has(produktas)) {
          suma = this.turinys.get(produktas) + kiekis;
          this.turinys.set(produktas, suma);
      } else {
          this.turinys.set(produktas, kiekis);
      }
  }
  krepselioTurinys() {
      console.log(this.turinys);
  }

}

const K = new PirkiniuKrepselis();

K.idetiPieno(8);
K.idetiPieno(8);

K.krepselioTurinys();

// 6. Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų.
// Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių pinigų 
// skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.
console.log('6 uzduotis');

class Pinigine2 {
  constructor() {
    this.popieriniaiPinigai = 0;
    this.metaliniaiPinigai = 0;

  }
ideti(kiekis) {
this.metaliniaiPinigai += kiekis * 0 + 1;
this.popieriniaiPinigai += kiekis * 0 + 1;  
}
monetos() {
  console.log(`Viso metaliniu pinigu yra ${this.metaliniaiPinigai}`);
}

banknotai() {
  console.log(`Viso popieriniu pinigu yra ${this.popieriniaiPinigai}`);
}

}

const pinigineB = new Pinigine2();

pinigineB.ideti(10);
pinigineB.ideti(1);
pinigineB.ideti(3);
pinigineB.ideti(11);

pinigineB.monetos();
pinigineB.banknotai();

// 7. (STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti statinį metodą akmenuSkaiciusVisuoseKibiruose(), kuris rodytų
// bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose). Skaičiuoti akmenim, kurie buvo
// surinkti visuose objektuose, sukurkite statini metodą bendrasAkmenuSkaicius(akmenuSkaicius), kuris pridėtų prie statinės
// savybės visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius). Taip pat atitinkamai modifikuokite metodus
// prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).
console.log('7 uzdavinys');

class Kibiras2 {
  static visiAkmenys = 0;

static akmenuSkaiciusVisuoseKibiruose() {
console.log('Visu kibiru bendras akmenu kiekis', this.visiAkmenys);
}

static bendrasAkmenuSkaicius(akmenuSkaicius) {
 return new this(akmenuSkaicius)
}

  constructor() {
    this.akmenuKiekis = 0;
  }
prideti1Akmeni() {
this.akmenuKiekis ++;
this.constructor.visiAkmenys ++;

}
pridetiDaugAkmenu(kiekis) {
this.akmenuKiekis += kiekis;
this.constructor.visiAkmenys += kiekis;
}
kiekPririnktaAkmenu() {

console.table(`Pririnkta akmenu ${this.akmenuKiekis} `);
}

}
const kibiras11 = new Kibiras2();
kibiras11.prideti1Akmeni();
kibiras11.pridetiDaugAkmenu(4);
kibiras11.pridetiDaugAkmenu(10);
kibiras11.kiekPririnktaAkmenu()

const kibiras21 = new Kibiras2();
kibiras21.prideti1Akmeni();
kibiras21.pridetiDaugAkmenu(9);
kibiras21.pridetiDaugAkmenu(10);
kibiras21.kiekPririnktaAkmenu()

const kibiras31 = new Kibiras2();
kibiras31.prideti1Akmeni();
kibiras31.pridetiDaugAkmenu(4);
kibiras31.pridetiDaugAkmenu(20);
kibiras31.kiekPririnktaAkmenu()

Kibiras2.akmenuSkaiciusVisuoseKibiruose();


//8 Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti
// metodą ipilti(kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa
// ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka
// per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris
// stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę 
//į dar mažesnę.



// 9. Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys turi savybę dydis,kuriai konstruktoriuje yra priskiriama reikšmė
// 500 ir savybę prikrauta (kuri pradžioje lygi 0). Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje:
//  valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip:
// valgomas- true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus,
// jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas) metodą kol bus pririnktas pilnas krepšys
 //nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis).
