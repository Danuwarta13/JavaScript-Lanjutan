// Destructuring  Variabel / Assignment

/////////////// Destructuring Array ///////////////

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

/////////////// Destructuring Object ///////////////

const mhs = {
  id: 13,
  myname: "Rhinozz",
  age: 20,
  email: "Rhinoz969@gmail.com",
};

// Teknik Biasa
const saya = mhs.myname;
const hidup = mhs.age;
// console.log(saya); // Rhinozz
// console.log(hidup); // 20

////////////////////////////////////////////////

// Menggunakan Destructuring

// const mhs = {
//   id: 13,
//   myname: "Rhinozz",
//   age: 20,
//   email: "Rhinoz969@gmail.com",
// };

const { myname, age } = mhs;
// console.log(myname); // Rhinozzz
// console.log(age); // 20

////////////////////////////////////////////////

// Assignment tanpa deklarasi Object

({ hewan, dia } = { hewan: "kucing", dia: "Rhinozz" });
// console.log(hewan); // kucing
// console.log(dia); // Rhinozzz

////////////////////////////////////////////////

// Assign ke variable baru

// const mhs = {
//   id: 13,
//   myname: "Rhinozz",
//   age: 20,
//   email: "Rhinoz969@gmail.com",
// };

const { myname: n, age: u } = mhs;
// console.log(n); // Rhinozzz
// console.log(u); // 20

////////////////////////////////////////////////

// Memberikan Default Value + Assign ke variabel baru

// const mhs = {
//   id: 13,
//   myname: "Rhinozz",
//   age: 20,
//   email: "Rhinoz969@gmail.com",
// };

const { myname: nick, age: ages, email: e = "emailDefault@ac.id" } = mhs;
// console.log(e); // Rhinoz969@gmail.com

////////////////////////////////////////////////

// Rest parameter

// const mhs = {
//   id: 13,
//   myname: "Rhinozz",
//   age: 20,
//   email: "Rhinoz969@gmail.com",
// };

const { myname: namaku, ...isi } = mhs;
// console.log(isi); // {id:13, age : 20, email: }

////////////////////////////////////////////////

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function

// const mhs = {
//   id: 13,
//   myname: "Rhinozz",
//   age: 20,
//   email: "Rhinoz969@gmail.com",
// };

function getIdMhs({ id }) {
  return id;
}

// console.log(getIdMhs(mhs)); // 13

////////////////////////////////////////////////

/////////////// Destructuring Function return value ///////////////

function penjumlahanPerkalian(a, b) {
  return [a + b, a * b];
}

// Mengunakan cara biasa

const jumlah = penjumlahanPerkalian(2, 3)[0];
const perkalian = penjumlahanPerkalian(2, 3)[1];
// console.log(jumlah); // 5
// console.log(perkalian); // 6

////////////////////////////////////////////////

// Menggunakan Destructuring

// function penjumlahanPerkalian(a, b) {
//   return [a + b, a * b];
// }

const [jumlah2, perkalian2] = penjumlahanPerkalian(2, 3);
// console.log(jumlah2); // 5
// console.log(perkalian2); // 6

////////////////////////////////////////////////

// Memberi Default Value

function kalkulasi(a, b) {
  return [a + b, a - b, a * b];
}

// Nilai variabel harus Urut sesuai dengan return value pada function jika menggunakan Array
const [tambah, kurang, kali, bagi = "Tidak ada"] = kalkulasi(2, 3);
// console.log(bagi);

////////////////////////////////////////////////

// Menggunakan Object pada Destructuring Function

function kalkulasi2(a, b) {
  return {
    diTambah: a + b,
    diKurang: a - b,
    diKali: a * b,
    diBagi: a / b,
  };
}

// Nilai variabel tidak harus urut dengan return value pada function jika menggunakan object
const { diTambah, diKurang, diBagi, diKali } = kalkulasi2(2, 3);
// console.log(diKurang); // -1

////////////////////////////////////////////////

/////////////// Destructuring Function Arguments ///////////////

const mhs2 = {
  nama: "Rhinozzz",
  umur: 20,
  email: "Rhinozz969@gmail.com",
  nilai: {
    tugas: 99,
    uts: 98,
    uas: 97,
  },
};

// Tanpa Destructuring
function cetakMhs(mhs2) {
  return `Halo, nama saya ${mhs2.nama}, saya berumur ${mhs2.umur} tahun.`;
}

// Menggunakan Destructuring
function cetakMhs2({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
}
console.log(cetakMhs2(mhs2));
