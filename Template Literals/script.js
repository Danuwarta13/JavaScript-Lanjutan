// Template Literals / Template Strings
// const nama = "Rhino";
// const umur = 13;
// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);

// Embedded Expressions
// console.log(`${1 + 4}`);
// console.log(`${alert("halo!")}`);
// const x = 11;
// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// HTML Fragments
const mhs = {
  nama: "Rhino",
  umur: 13,
  nrp: "12345678",
  email: "Rhinoz969@gmail.com",
};

const el = `<div class="mhs">
    <h2>Nama: ${mhs.nama}</h2>
    <h3 class="">Umur: ${mhs.umur}</h3>
    <h3 class="email">Email: ${mhs.email}</h3>
    <span class="nrp">nrp: ${mhs.nrp}</span>
</div>`;

console.log(el);
document.body.innerHTML = el;
