// Destructuring  Variabel / Assignment

// Destructuring Array
const perkenalan = ["Halo", "nama", "saya", "Rhinozz"];

// Teknik Biasa menggunakan Index dari Array
const salam = perkenalan[0];
const nama = perkenalan[3];
// console.log(salam, nama); // Halo Rhinozz

////////////////////////////////////////////////

// Menggunakan Destructuring
const [sapa, satu, dua, nickaname] = perkenalan;
// console.log(sapa, dua, nickaname); // Halo saya Rhinozz

////////////////////////////////////////////////

// Skipping Items
const [hi, , , myNick] = perkenalan;
// console.log(hi, myNick); // Halo Rhinozz

////////////////////////////////////////////////

// Swap Items
let a = 1;
let b = 2;
// console.log(a); // 1
// console.log(b); // 2
[a, b] = [b, a];
// console.log(a); // 2
// console.log(b); // 1

////////////////////////////////////////////////

// Return Value pada Function
function coba() {
  return [1, 2];
}

// Teknik Biasa
const cobaa = coba();
// console.log(cobaa[1]); // 2

const [coba1, coba2] = coba();
// console.log(coba1); // 1

////////////////////////////////////////////////

// Rest parameter

const [angk, ...values] = [1, 2, 3, 4, 5];
// console.log(angk); // 1
// console.log(values); // [2, 3, 4, 5]

////////////////////////////////////////////////
