// ambil semua element video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  // ambil durasi masing-masing video
  .map((item) => item.dataset.duration)

  // ubah durasi menjadi float, dan ubah menit menjadi detik
  .map((waktu) => {
    // 10:30 -> [10, 30] Split
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;
console.log(jam, menit, detik);

// simpan di DOM

// Durasi Total
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

// Jumlah Video
const pJmlVideo = document.querySelector(".jumlah-video");
const jmlVideo = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;
pJmlVideo.textContent = `${jmlVideo} Video`;
