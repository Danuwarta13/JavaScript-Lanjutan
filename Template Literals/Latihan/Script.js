// 1. HTML Fragments

const mhs1 = {
  nama: "Rhinozzz",
  umur: 13,
  nrp: "0234234234",
  email: "Rhinoz969@gmail.com ",
};

const el1 = `<div class="mhs">
    <h2 class="nama">${mhs1.nama}</h2>
    <span class="nrp">${mhs1.nrp}</span>
</div>`;

document.body.innerHTML = el1;

///////////////////////////////////////////////////////////

// 2. Looping

const mhs2 = [
  {
    nama: "Rhinozzz",
    email: "Rhinoz969@gmail.com",
  },
  {
    nama: "Jhon",
    email: "Jhone@ac.id",
  },
  {
    nama: "Doe",
    email: "Doe@ac.id",
  },
];

const el2 = `<div class="mhs">
            ${mhs2
              .map(
                (m) => `<ul>
                <li>${m.nama}</li>
                <li>${m.email}</li>
                </ul>`
              )
              .join("")}
        </div>`;

document.body.innerHTML = el2;

///////////////////////////////////////////////////////////

// 3. Conditionals
// Ternary

const lagu = [
  {
    judul: "Blue",
    penyanyi: "young kai",
    feat: "Rhinozzz",
  },
  {
    judul: "Sunny Day",
    penyanyi: "Rhinozzz",
  },
];

const el3 = `<div class="lagu">
    <h2 class="">My Lagu</h2>
    ${lagu
      .map(
        (l) =>
          `<ul>
    <li>Penyanyi : ${l.penyanyi}</li>
    <li>Judul : ${l.judul} ${l.feat ? `(feat ${l.feat})` : ""}</li>
    </ul>`
      )
      .join("")}
</div>`;
document.body.innerHTML = el3;

///////////////////////////////////////////////////////////

// 4. Nested
// HTML Fragments bersarang

const mhs4 = {
  nama: "Rhinozzz",
  semester: 5,
  mataKuliah: ["Rekayasa Web", "Analisis dan Perancangan Sistem Informasi", "Pemrograman Sistem Interaktif", "Perancangan Sistem Berorientasi Object"],
};

function cetakMatakuliah(mataKuliah) {
  return `
    <ol class="">
        ${mataKuliah.map((mk) => `<li class="">${mk}</li>`).join("")}
    </ol>  
  `;
}

const el4 = `<div class="mhs">
    <h2 class="nama">Nama: ${mhs4.nama}</h2>
    <span class="smester">Semester: ${mhs4.semester}</span>
    <h4 class="matkul">MataKuliah</h4>

    ${cetakMatakuliah(mhs4.mataKuliah)}
</div>`;

document.body.innerHTML = el1 + el2 + el3 + el4;

// console.log(el);
