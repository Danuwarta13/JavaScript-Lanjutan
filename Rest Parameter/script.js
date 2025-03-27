// Rest Parameter

function myFunc() {
  //   return `A = ${a}, B = ${b}, myArgs = ${myArgs}`;
  // Menggunakan rest parameter
  // return myArgs;
  //   cara lain selain menggunakan rest Parameter mengubah arguments menjadi array
  return Array.from(arguments);

  //   Menggunakan Spead Operator
  return [...arguments];
}

// console.log(myFunc(1, 2, 3, 4, 5));

// Contoh 2

function jumlahkan(...angka) {
  // menggunakan Forof

  //   let total = 0;
  //   for (const a of angka) {
  //     total += a;
  //   }
  //   return total;

  //    Menggunakan reduce
  return angka.reduce((a, c) => a + c, 0);
}
// console.log(jumlahkan(1, 2, 3, 4, 5, 5));

// Array Destructuring
const kelompok1 = ["Rhinoz", "Tarno", "Yanto", "Yanti", "Yantu"];
const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// Object Destructuring
const team = {
  pm: "Rhinozzz",
  frontEnd1: "Tarno",
  frontEnd2: "Yanto",
  backEnd: "Yanti",
  ux: "Yayan",
  devOps: "Yuyun",
};
const { pm, ...myTeam } = team;
// console.log(myTeam);

// Filltering

function fillteringBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(fillteringBy("string", 1, 3, false, "Rhinozzz", 2003, true, "Yanto", "Yantii"));
