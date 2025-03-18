// Arrow Function
// const pangilNama = (nama, umur) => {
//   return `Hai ${nama}, dan umur anda ${umur}`;
// };

// console.log(pangilNama("Rhinoz", 22));

// Implisit Return
// const panggilNama = (nama, waktu) => `hai ${nama}, Selamat ${waktu}`;
// console.log(panggilNama("Rhinoz", "siang"));

// Contoh 1
// let mahasiswa = ["Rhinoz", "dodiyzz", "jonoz"];

// let hitungHuruf = mahasiswa.map((nama) => ({ nama, jmlhHuruf: nama.length }));

// console.table(hitungHuruf);

// Konsep This pada Arrow Function

// Constuctur Function
// const Mahasiswa = function () {
//   this.nama = "Rhinoz";
//   this.umur = 22;
//   this.sayHallow = function () {
//     console.log(`Halow saya ${this.nama} dan saya umur ${this.umur} tahun.`);
//   };
// };

// const Rhinoz = new Mahasiswa();

// Contoh 2
// const Mahasiswa = function () {
//   this.nama = "Rhinoz";
//   this.umur = 22;
//   this.sayHallow = function () {
//     console.log(`Halow saya ${this.nama} dan saya umur ${this.umur} tahun.`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 5200);
// };

// const Rhinoz = new Mahasiswa();

// Contoh 3

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "sizee";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);

  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
