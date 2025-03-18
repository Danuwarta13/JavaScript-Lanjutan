// Execution Context, Hoisting & Scope

// var nama = "Rhinoz";
// console.log(nama);

// creation pahse pada Global Context
// nama var = undefined
// nama function = fn()
// hosting
// window = global object
// this = window

// execution phase

// var nama = "Rinoz";
// var umur = 22;

// console.log(sayHelow());
// function sayHelow() {
//   console.log(`hai ${nama}, umur anda ${umur}`);
// }

// function membuat Local Excetion Context
// yang di dalamnya terdapat creating dan execution phase
// window
// arguments
// hoisting

// var nama = "Rhinoz";
// var username = "_danuwrt13";

// function cetaInstagramUrl(username) {
//   var instagramUrl = "http://instagram.com/";
//   return instagramUrl + username;
// }

// console.log(cetaInstagramUrl(username));

function satu() {
  var nama = "Rinoz";
  console.log(nama);
}

function dua() {
  console.log(arguments[0]);
  console.log(nama);
}

console.log(nama);
var nama = "Jonoz";
satu();
dua("Yayanz");
console.log(nama);
