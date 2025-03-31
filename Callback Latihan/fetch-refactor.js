function showCards(m) {
  return `<div class="w-full px-4 md:w-1/2 xl:w-1/3">
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-5">
                      <img src="${m.Poster}" alt="programming" class="w-full max-h-[600px] md:max-h-[500px]" />
                        <div class="py-8 px-6">
                            <h3>
                              <a href="" class="block mb-3 font-semibold text-xl text-dark truncate hover:text-sky-500">${m.Title}</a>
                            </h3>
                            <p class="font-medium text-base text-secondary mb-6">${m.Year}</p>
                            <a href="#" onclick="openModal()" class="modal-detail-button font-medium text-sm text-white bg-sky-500 py-2 px-4 rounded-lg hover:opacity-80" data-imdbid="${m.imdbID}">Show Details</a>
                        </div>
                    </div>
                </div>`;
}

function showMoveDetails(m) {
  return `  <div class="w-full">
              <div class="flex">
                <div class="flex-1  p-2">
                  <img src="${m.Poster}" alt="" class="w-full" />
                </div>
                <div class="flex-1 p-2">
                  <ul class="divide-y divide-gray-200">
                    <li class="py-4"><h4 class="text-xl font-semibold">${m.Title}</h4></li>
                    <li class="py-4"><strong>Director : </strong> ${m.Director}</li>
                    <li class="py-4"><strong>Actros : </strong> ${m.Actors}</li>
                    <li class="py-4"><strong>Writer : </strong> ${m.Writer}</li>
                    <li class="py-4">
                      <strong>Plot : </strong> <br />
                      ${m.Plot}
                    </li>
                  </ul>
                </div>
              </div>
            </div> `;
}

// Menggunakan Fetch Refactor
const searchBtn = document.querySelector(".search-button");

searchBtn.addEventListener("click", async function () {
  const inputKeyWords = document.querySelector(".input-key");
  const movies = await getMovies(inputKeyWords.value);
  updateUI(movies);
});

function getMovies(keywords) {
  return fetch("http://www.omdbapi.com/?apikey=57729575&s=" + keywords)
    .then((response) => response.json())
    .then((response) => response.Search);
}

function updateUI(movies) {
  let cards = "";
  movies.forEach((m) => {
    cards += showCards(m);
    const moveContainer = document.querySelector(".move-container");
    moveContainer.innerHTML = cards;
  });
}

// event Binding
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    const imdbid = e.target.dataset.imdbid;
    const moveDetail = await getMoviesDetail(imdbid);
    updateUIdetail(moveDetail);
  }
});

function getMoviesDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=57729575&i=" + imdbid)
    .then((response) => response.json())
    .then((m) => m);
}

function updateUIdetail(m) {
  const moveDetail = showMoveDetails(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = moveDetail;
}

function openModal() {
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
