$.ajax({
  url: "http://www.omdbapi.com/?apikey=57729575&s=iron man",
  success: (r) => {
    const move = r.Search;
    let cards = "";
    move.forEach((m) => {
      cards += `<div class="w-full px-4 lg:w-1/2 xl:w-1/3">
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-5">
                    <img src="${m.Poster}" alt="programming" class="w-full" />
                        <div class="py-8 px-6">
                            <h3>
                            <a href="" class="block mb-3 font-semibold text-xl text-dark truncate hover:text-sky-500">${m.Title}</a>
                            </h3>
                            <p class="font-medium text-base text-secondary mb-6">${m.Year}</p>
                            <a href="" class="font-medium text-sm text-white bg-sky-500 py-2 px-4 rounded-lg hover:opacity-80">Show Details</a>
                        </div>
                    </div>
                </div>`;
    });
    $(".move-container").html(cards);
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
