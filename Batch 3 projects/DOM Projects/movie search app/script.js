document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const movieDetails = document.getElementById("movieDetails");

  searchButton.addEventListener("click", function () {
    const movieTitle = searchInput.value;
    if (movieTitle) {
      searchMovie(movieTitle);
    }
  });

  function searchMovie(title) {
    const apiKey = "201ac4ff4831e862241e3d4daa30ed7b";
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          displayMovieDetails(data.results[0]);
        } else {
          movieDetails.innerHTML = "Movie not found";
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function displayMovieDetails(movieData) {
    const movieTitle = document.getElementById("movieTitle");
    const moviePoster = document.getElementById("moviePoster");
    const movieOverview = document.getElementById("movieOverview");
    const movieRating = document.getElementById("movieRating");
    const moviePopularity = document.getElementById("moviePopularity");

    movieTitle.textContent = movieData.title || "Title not available";
    movieOverview.textContent = movieData.overview || "Overview not available";
    movieRating.textContent = movieData.vote_average || "Rating not available";
    moviePopularity.textContent =
      movieData.popularity || "Popularity not available";

    if (movieData.poster_path) {
      const posterUrl = `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`;
      moviePoster.src = posterUrl;
    } else {
      moviePoster.src = "placeholder-image.jpg";
    }
  }
});
