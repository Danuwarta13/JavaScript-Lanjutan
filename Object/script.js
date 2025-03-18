// Cara membuat Object Java Script

// 1. Object Literial
//
// let mahasiswa = {
//   nama: "Rhinoz",
//   energry: 10,
//   makan: function (porsi) {
//     this.energry = this.energry + porsi;
//     console.log(`hallow ${this.nama}, Selamat Makans`);
//   },
// };

// 2. Function Declaration
//
// const methodMahsiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`halow ${this.nama}, Selamat makan`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`halow ${this.nama}, Selamat Bermain`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`halow ${this.nama}, Selamat Tidur`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahsiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let Rhinoz = Mahasiswa("Rhinoz", 10);
// let Jonoz = Mahasiswa("Jonoz", 5);

// 3. Constructor Function
//
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`halow ${nama}, Selamat makan`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam; // thhis.energi = this.energi - jam
//     console.log(`halow ${nama}, Selamat Bermain`);
//   };
// }

// let Rhinoz = new Mahasiswa("Rhinoz", 80);
// let Jonoz = new Mahasiswa("Jonoz", 10);

// 4. Object.create

// Prototype
//
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halow ${this.nama}, Selamat Makan!`;
};

Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `Halow ${this.nama}, Selamat bermain`;
};

Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `Halow ${this.nama}, Selamat Tidur`;
};
let rhinoz = new Mahasiswa("Rhinoz", 50);
let jonoz = new Mahasiswa("Jonoz", 10);
