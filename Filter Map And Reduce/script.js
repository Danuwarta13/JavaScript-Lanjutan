const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3

// Contoh Menggunakan For
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

////////////////////////////////////////////////////////////////

// mencari angka >= 3
// Filter

// Contoh Menggunakan Filter
const newAngka = angka.filter(function (a) {
  return a >= 3;
});
console.log(newAngka);

// Contoh Menggunakan Filter Arrow Function
const newAngka2 = angka.filter((a) => a >= 3);
console.log(newAngka2);

////////////////////////////////////////////////////////////////

// kalikan semua angka dengan 2
// Map

// Contoh Menggunakan Map
const newAngka3 = angka.map(function (a) {
  return a * 2;
});
console.log(newAngka3);

// Contoh Menggunakan Map Arrow Function
const newAngka4 = angka.map((a) => a * 2);
console.log(newAngka4);

////////////////////////////////////////////////////////////////

// jumlahkan seluruh elemen pada array
// Reduce
// 5 adalah nilai awal/default dari accumulator
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// Contoh Menggunakan Reduce
const newAngka5 = angka.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(newAngka5);

// Contoh Menggunakan Reduce Arrow Function
const newAngka6 = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
console.log(newAngka6);

////////////////////////////////////////////////////////////////

// Method Chaining
// Cari angka > 5
// Kalikan 3
// Jumlahkan

// Contoh Menggunakan Method Chaining
const hasil = angka
  .filter(function (a) {
    return a > 5; // 8, 9, 9
  })
  .map(function (a) {
    return a * 3; // 24, 27, 27
  })
  .reduce((acc, cur) => acc + cur, 2); // 80
console.log(hasil);

// Contoh Menggunakan Method Chaining Arrow Function
const hasil1 = angka
  .filter((a) => a > 5) // 8, 9, 9
  .map((a) => a * 3) // 24, 27, 27
  .reduce((acc, cur) => acc + cur, 0); // 78

console.log(hasil1);
