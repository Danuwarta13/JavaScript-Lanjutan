// Promise Biasa
const coba = new Promise((resolve) => {
  setTimeout(() => {
    resolve("selesai");
  }, 2000);
});

// coba.then(() => console.log(coba));
// console.log(coba);

// Function Promise
function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 2000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, 2000);
    } else {
      reject("kelaman bos");
    }
  });
}

// Menggunakan Then & Catch
// const coba2 = cobaPromise();
// coba2.then(() => console.log(coba2)).catch(() => console.log(coba2));

// Menggunakan Asyn & Await / Try & Catch
async function cobaAsync() {
  try {
    // try =  then
    const coba3 = await cobaPromise();
    console.log(coba3);
  } catch (err) {
    console.log(err);
  }
}
cobaAsync();
