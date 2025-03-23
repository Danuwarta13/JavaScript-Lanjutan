// Tagged Template Literals
const nama = "Rhinozzz";
const umur = 13;
const email = "rhinoz969@ac.id";

function coba(strings, ...values) {
  //   let result = "";
  //   strings.forEach((str, i) => {
  //     result += `${str}${values[i] || ""}`;
  //   });
  //   return result;

  // Menggunakan reduce
  return strings.reduce((result, str, i) => `${result}${str}${values[i] || ""}`, "");
}

const cobaa = coba`Halo, nama saya ${nama}, umur saya ${umur} tahun, email saya ${email}.`;

console.log(cobaa);

//////////////////////////////////////////

// Highlight

function highlight(strings, ...values) {
  // if Else biasa
  return strings.reduce((result, str, i) => {
    if (values[i]) {
      return `${result}${str}<span class="hl">${values[i]}</span>`;
    } else {
      return `${result}${str}`;
    }
  }, "");

  // Menggunakan ternary operator
  return strings.reduce((result, str, i) => `${result}${str}${values[i] ? `<span class="hl">${values[i]}</span>` : ""}`, "");

  // Tanpa if else
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ""}</span>`, "");
}

const str = highlight`Halo, nama saya ${nama}, umur saya ${umur} tahun, email saya ${email}.`;
// const str = `Halo, nama saya <span>${nama}</span>, umur saya ${umur} tahun.`;

console.log(str);

document.body.innerHTML = str;
