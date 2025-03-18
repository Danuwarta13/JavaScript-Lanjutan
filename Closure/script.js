// Closure
//
// Contoh 1
function ucapanSelamat(waktu) {
  return (nama) => {
    console.log(`Halow ${nama}, Selamat ${waktu} Semangats terus yah `);
  };
}

let selamtPagi = ucapanSelamat("pagi");
let selamtSiang = ucapanSelamat("Siang");
let selamtMalam = ucapanSelamat("Malam");

selamtPagi("Rhinoz");

//
// Contoh 2
let add = (() => {
  let counter = 0;
  return () => {
    return ++counter;
  };
})();
console.log(add());
console.log(add());
console.log(add());
