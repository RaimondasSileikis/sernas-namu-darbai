console.log('Duomenu strukturos 05');

function rand(min, max) {           //rand funkcija
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

// Duomenu strukturos
const products = ['Dviratis', 'Triratis', 'Žvakidė', 'Stalas', 'Kėdė', 'Knygų lentyna', 'Paveikslas su rėmu', 'Veidrodis', 'Keturių vietų palapinė', 'Pripučiama valtis', 'Meškerė karosams gaudyti', 'Planšetė', 'Pastatoma lempa', 'Vazonas', 'Baterijų pakrovėjas', 'Pagalvių komplektas', 'Oro drėkintuvas', 'Oro sausintuvas', 'Kavinukas elektrinis', 'Kilimas 2 X 3 metrų', 'Kilimėlis kojoms valyti', 'Užuolaidos', 'Vėjo malūnas', 'Dažai sienoms', 'Dažai luboms', 'Medinė dėžė'];

// A. Sukurti 100 sąskaitų masyvą.

//Kiekviena sąskaita yra objektas ir turi po 5 savybes:
//number: pagal taisykle INV001, INV002, … INV099, INV100;
//products: masyvas random ilgio nuo 1 iki 10;
//products masyvo elementai objektai, turintys po 4 savybes:
//1 title: random iš products masyvo (vienoje sąskaitoje gali būti keli vienodi produktai. Vistiek jų kainos bus skirtingos); 
//2 price: random skaičius su kableliu nuo 1.00 iki 100.00; 
//3 amount: random skaičius nuo 1 iki 20;
//4 total:  price ir amount sandauga.
//total: visų products masyvo elementų total suma
//vat: 21% nuo total
//grandTotal: vat ir total suma

const saskaitos = [];

for (let i = 0; i < 100; i++) {
  const productMasyvas = [];
  
for (let j = 0; j < rand(1, 10); j++) {
  const titleSk = products[Math.floor(Math.random() * products.length)];
  const priceSk = +(rand(100, 10000) / 100).toFixed(2);                  // random skaičius su kableliu nuo 1.00 iki 100.00, paliekam skaiciais
  const amountSk = rand(1, 20);
  const totalSk = priceSk * amountSk;
  
  const productObject = {                                          // sukuriu objekta "productObject", turinti 4 savybes, kuris bus 
    title : titleSk,                                               // idetas random(1,10) kartu i "productMasyva", kuris yra objekto "saskaitos" 
    price : priceSk,                                               // savybe "products", ir bus sukuriamas 100 kartu
    amount : amountSk,
    total : totalSk
  };

  productMasyvas.push(productObject);

}                                                                                                      // objekto "saskaita" savybe "total", kuria suskaiciuoju,
const sumTotalSk = productMasyvas.reduce((accumulator, item) => {return accumulator + item.total}, 0); // "productMasyvas" masyve esancio "productObject" 
  const saskaita = {                                                                                   // objektu savybes "total" reiksmiu suma
    number : ('INV' + ([i + 1]).toString().padStart(3, '0')), 
    product : productMasyvas,                                           // sukuriu "saskaita" objekta, turinti 5 savybes, kuris bus
    total: sumTotalSk,                                                  // sukurtas 100 kartu ir idetas i "saskaitos" masyva
    vat: sumTotalSk * 0.21,
    grandTotal: sumTotalSk + (sumTotalSk * 0.21)         
  };
  
  saskaitos.push(saskaita);
}

console.log(saskaitos);


/* Sugeneruotame (ne generavimo metu!) masyve paskaičiuoti ir konsolėje atspausdinti visų sąskaitų grandTotal sumą, produktų sąrašą prie kiekvieno produkto pavadinimo pridedant koks to produkto kiekis yra visose sąskaitose bendrai ir už kokią bendrą sumą.

Pvz: 
Dviratis 35 479.55
Triratis 10 457.22
…..
Medinė dėžė 47 102
*/