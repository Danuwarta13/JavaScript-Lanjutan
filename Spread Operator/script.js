// Spread Operator

// memecah iterabels menjadi single element

const mhs = ["Rhinozzz", "Doddy", "Eriks"];
// console.log(...mhs); // Rhinozzz Doddy Eriks

//////////////////////////////////////////////////////////

// Menggabungkan 2 Array

const hewan = ["kucing", "badak", "kuda"];
const makananNya = ["ikan", "buah", "rumput"];

// Menggunakan Spread
const bergabung = [...hewan, "Kinkk", "Aloyy", ...makananNya];
// console.log(bersatu); // kucing badak kuda kinkk aloy ikan buah rumput

// Menggunakan Method Concat
const bersatu = hewan.concat(makananNya);
// console.log(bersatu); // kucing badak kuda ikan buah rumput

//////////////////////////////////////////////////////////

// Meng-Copy Array

const murid = ["Rhinozzz", "Tarno", "Yanto"];
// const murid1 = murid; // Cara yang salah
const murid1 = [...murid]; // Cara yang benar
murid1[0] = "Yanti";

// console.log(murid);
// console.log(murid1);

///////// Contoh 2 //////////

// Mengisi Array kosong
const liMhs = document.querySelectorAll("li");

// Menggunakan Loop For of
const aMhs = [];
for (const lm of liMhs) {
  aMhs.push(lm.textContent);
}
console.log(); // (aMhs)

// Menggunakan Higher Order Funtion MAP
const arrayMhs = [...liMhs].map((m) => m.textContent);
console.log(); // (arrayMhs)

///////// Contoh 3 //////////

// Animasi Hover per-Huruf

// Ambil clas nama nyaa menggunalan querySelector
const nama = document.querySelector(".nama");

// Pecah isi dari nama menggunakan Spread kemudian buat per-ulangan menggunakan Map dan tambahkan sapan pad tiap huruf nya
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");

// Timpa nama dengan huruf
nama.innerHTML = huruf;
