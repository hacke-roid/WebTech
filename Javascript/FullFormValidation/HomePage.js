let submit_btn = document.getElementById("btn_submit");
let inputValue = document.getElementById("input_value");
let search_result = document.getElementById("search_result");

submit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputText = inputValue.value;
  console.log(inputText);

  fetchOmdgApi(inputText);
});

const fetchOmdgApi = async (query) => {
  let data = await fetch(
    `http://www.omdbapi.com/?apikey=1e2cd287&s=${query}`
  );

  let finalData = await data.json();
  console.log(finalData);

  if (finalData.Response === "True") {
    search_result.innerHTML = "";
    finalData.Search.forEach((movie) => {
      search_result.innerHTML += `
        <div class="card" data-title="${movie.Title}">
          <h2>${movie.Title}</h2>
          <p>${movie.Year}</p>
          <div class="card_img">
            <img src="${movie.Poster}" alt="Movie Poster">
          </div>
        </div>
      `;
    });
  } else {
    search_result.innerHTML = `<p>No movie found with this title.</p>`;
  }
};

search_result.addEventListener("click", async (e) => {
  if (e.target.closest(".card")) {
    const movieTitle = e.target.closest(".card").dataset.title;
    console.log("Movie clicked:", movieTitle);

    let movieDetails = await fetch(
      `http://www.omdbapi.com/?t=${movieTitle}&apikey=1e2cd287`
    );

    let finalMovieDetails = await movieDetails.json();
    console.log(finalMovieDetails);

    search_result.innerHTML = `
      <div class="movie-details">
        <h2>${finalMovieDetails.Title}</h2>
        <p>Year: ${finalMovieDetails.Year}</p>
        <p>Genre: ${finalMovieDetails.Genre}</p>
        <p>Plot: ${finalMovieDetails.Plot}</p>
        <div class="movie_img">
          <img src="${finalMovieDetails.Poster}" alt="Movie Poster">
        </div>
      </div>
    `;
  }
});
