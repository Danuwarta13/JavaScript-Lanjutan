$.ajax({
  url: "http://www.omdbapi.com/?apikey=57729575&s=iron man",
  success: (response) => {
    const move = response.Search;
    let cards = "";
    move.forEach((m) => {
      cards += showCards(m);
    });
    $(".move-container").html(cards);

    // Ketika Tombol Details di-klik
    $(".modal-detail-button").click(function (e) {
      $.ajax({
        url: "http://www.omdbapi.com/?apikey=57729575&i=" + $(this).data("imdbid"),
        success: function (m) {
          const moveDetail = showMoveDetails(m);
          $(".modal-body").html(moveDetail);
        },
      });
    });
  },
  error: (e) => {
    console.log(e.responseText);
  },
});

function showCards(m) {
  return `<div class="w-full px-4 md:w-1/2 xl:w-1/3">
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-5">
                      <img src="${m.Poster}" alt="programming" class="w-full" />
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

function openModal() {
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
