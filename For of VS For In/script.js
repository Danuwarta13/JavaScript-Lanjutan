// For...of
// For...of adalah perulangan yang digunakan untuk mengulang setiap elemen dari objek iterable seperti Array, String, Map, Set, arguments, dan lain-lain. For...of tidak bisa digunakan untuk mengulang objek biasa. For...of tidak bisa digunakan untuk mengulang objek biasa, jika kita menggunakan objek biasa maka akan terjadi error.

/////////////// Array ///////////////
const sosmed = ["Youtube", "Facebook", "Instagram", "Tiktok", "Twitter"];

// Menggunakan For Biasa
for (let i = 0; i < sosmed.length; i++) {
  console.log(); // (sosmed[i])
}

// Menggunakan ForEach
// Function Biasa
sosmed.forEach(function (s) {
  console.log(); // (s)
});

// Arrow Function
sosmed.forEach((s) => console.log()); // (s)

// Menggunakan For...of
for (const s of sosmed) {
  console.log(); // (s)
}

/////////////// String ///////////////
const nama = "Rhinozzz";

for (const n of nama) {
  console.log(); // (n);
}

const mhs = ["Rhinozzz", "Rifki", "Rizky"];

// Menggunakan ForEach
mhs.forEach((m, i) => {
  console.log(); // (`${m} adalah mahasiswa ke-${i + 1}`)
});

// Menggunakan For...of
for (const [i, m] of mhs.entries()) {
  console.log(); // (`Mahasiswa ke-${i + 1} adalah ${m}`)
}

/////////////// NodeList ///////////////
const liNama = document.querySelectorAll(".nama");

// Menggunakan ForEach
liNama.forEach((n) => console.log()); // (n.innerHTML / n.textContent)

// Menggunakan For...of
for (const ln of liNama) {
  console.log(); // (n.innerHTML / n.textContent)
}

/////////////// Arguments ///////////////
function jumlahkanAngka() {
  // Menggunakan Reduce
  // return arguments.reduce((a, i) => a + i); // TIDAK BISA

  // Menggunkan ForEach
  let jumlah = 0;
  // arguments.forEach((a) => (jumlah += a)); // TIDAK BISA

  // Menggunakan For...of
  for (const a of arguments) {
    jumlah += a;
  }
  return jumlah;
}
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

////////////////////////////////////////

// For...in
// For...in adalah perulangan yang digunakan untuk mengulang setiap properti dari objek. For...in bisa digunakan untuk mengulang objek biasa. For...in bisa digunakan untuk mengulang objek biasa, jika kita menggunakan objek iterable maka akan terjadi error.

const siswa = {
  nama: "Rhinozzz",
  umur: 20,
  email: "Rhinoz969@gmail.com",
};

// For...in hanya bisa digunakan untuk objek
for (const s in siswa) {
  console.log(siswa[s]);
}
