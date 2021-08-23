const apiKey = process.env.REACT_APP_OMDB_API

//MOVIE SEARCH BY NAME
export const getMoviesBySearchTerm = async (movie) => {
  try {
    let response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${movie}`);
    let movieName = await response.json();
    console.log(`The movie results for ${movie}`, movieName);
    console.log('This is the last line of code in this function');
    return movieName.Search;
  } catch(error) {
    console.log("ERROR:", error)
  }
}

// MOVIE SEARCH BY ID
export const getMoviesById = async (movie) => {
  try {
    let response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${movie}`);
    let movieName = await response.json();
    console.log(`The movie results for ${movie}`, movieName);
    console.log('This is the last line of code in this function');
    return movieName;
  } catch(error) {
    console.log("ERROR:", error)
  }
}
