////////////////////////////////////////////////////////////////////////

///// Request API Menggunakan JQuery /////

$.ajax({
  url: "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
  success: function (move) {
    //   console.log(move);
  },
});

////////////////////////////////////////////////////////////////////////

///// Request API Menggunakan Vanila Javascript /////

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      //   console.log(JSON.parse(xhr.response));
    } else if (xhr.status === 404) {
    }
  }
};
xhr.open("get", "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers");
xhr.send();

////////////////////////////////////////////////////////////////////////

///// Request API  Menggunakan Fetch /////

fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=avengers");
//   .then((response) => response.json())
//   .then((response) => console.log(response));

////////////////////////////////////////////////////////////////////////

// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronus di masa yang akan datang
// Janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

/////// Contoh 1 ///////

let ditepati = true;
const janji1 = new Promise((resolve, rejcet) => {
  if (ditepati) {
    resolve("Janji telah ditepati!");
  } else {
    rejcet("Ingkar Janji Cuyy!!!");
  }
});

// console.log(janji1);
// janji1.then((response) => console.log(`OK! ${response}`)).catch((response) => console.log(`Gagal!!! ${response}`));

/////// Contoh 2 ///////

let diTepati = true;
const janji2 = new Promise((resolve, reject) => {
  if (diTepati) {
    setTimeout(() => {
      resolve("diTepati setelah beberapa detik!");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("Tidak diTepati setelah beberapa detik!");
    }, 2000);
  }
});

// console.log("mulai");
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log(`Selesai menunggu!`))
//   .then((response) => console.log(`OK! ${response}`))
//   .catch((response) => console.log(`NO OK! ${response}`));
// console.log("selesai");

////////////////////////////////////////////////////////////////////////

// Promise.all()

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Rhinozzz",
        pemeran: "Yanto, Yanti",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Solo",
        temperatur: 26,
        kondisi: "Cerah Berawan",
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([film, cuaca])
  // .then((r) => console.log(r))

  // Cara memecah Array nya menggunkan Spread
  .then((r) => {
    const [film, cuaca] = r;
    // console.log(film);
    // console.log(cuaca);
  });
