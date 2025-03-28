// Callback
// Synchronus Callback = Dijalankan Berurutan

// Contoh 1

function hallow(nama) {
  alert(`Hallow ${nama}`);
}

function tampilkanPesan(callback) {
  const nama = prompt("Masukan Nama Sampean");
  callback(nama);
}

// tampilkanPesan(hallow);

// Menggunakan Anonymous Function
// tampilkanPesan((n) => alert(`Hai, ${n}`));

//////////////

// Contoh 2

// const mhs = [
//   {
//     nama: "Sandika Galih",
//     nrp: "11223344",
//     email: "sandikagali@gmial.com",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 1,
//   },
//   {
//     nama: "Rhinozz",
//     nrp: "969",
//     email: "Rhinozzz@gmial.com",
//     jurusan: "Seni",
//     idDosenWali: 2,
//   },
//   {
//     nama: "Muchalim Danu Warta",
//     nrp: "210103104",
//     email: "danuwrt@gmial.com",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 1,
//   },
//   {
//     nama: " Yanto",
//     nrp: "69",
//     email: "yantoh@gmial.com",
//     jurusan: "Teknik aja",
//     idDosenWali: 3,
//   },
// ];

console.log(); // (mulai)
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     // let date = new Date();
//   }
//   console.log(); // (m.nama)
// });
console.log(); // (selesaii)

//////////////////////////////////////////////////////////

// Asynchrous Callback = langsung Dijalankan Bersamaan

// Menggunakan Vanila Javascript
function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };

  xhr.open("get", url);
  xhr.send();
}

// Menggunakan Function dek
function success(results) {
  // console.log(JSON.parse(results)); // untuk merubah data menjadi JSON menggunakan JSON.parse
  const mhs = JSON.parse(results);

  mhs.forEach((m) => console.log(m.nama));
}

function error() {}

// Menggunakan Function Dek
// getDataMahasiswa("data/mahasiswa.json", success, error);

// Menggunakan Anonymous Function

console.log("mulai");
getDataMahasiswa(
  "data/mahasiswa.json",
  (results) => {
    // console.log(JSON.parse(results));
    JSON.parse(results).forEach((r) => console.log(r.nama));
  },
  () => {}
);
console.log("selesai");

//////////////////////////////////////////////////////////

// Menggunakan JQuery
console.log("mulai");
$.ajax({
  url: "data/mahasiswa.json",
  success: function (mhs) {
    mhs.forEach((m) => console.log(m.email));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");
