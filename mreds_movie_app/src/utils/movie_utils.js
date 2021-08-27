const OMDB_API_KEY = process.env.REACT_APP_OMBD_API_KEY;
const API_URL = "https://www.omdbapi.com";

export const getMoviesBySearchTerm = async (
  searchTerm = "",
  searchType = "movie"
) => {
  const url = `${API_URL}/?apikey=${OMDB_API_KEY}&s=${searchTerm}&type=${searchType}`;
  const response = await fetch(url);
  const json = await response.json();
  const movies = json.Search;
  return movies;
};

export const getMovieDetailsById = async (movieId) => {
  const url = `${API_URL}/?apikey=${OMDB_API_KEY}&i=${movieId}`;
  const response = await fetch(url);
  const movie = await response.json();
  return movie;
};