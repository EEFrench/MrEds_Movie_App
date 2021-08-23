import React from 'react';

// const MovieList = (props) => {
// 	return (
// 		<>
// 			{props.movies.map((movie, index) => (
// 				<div className='image-container d-flex justify-content-start m-3'>
// 					<img src={movie.Poster} alt='movie'></img>
// 				</div>
// 			))}
// 		</>
// 	);
// };

const MovieList = ({movies}) => {
	return (
		<div>
           {movies.map((movie) =>(
			   <p>{movie.Title}</p>
           ))}
        </div>
	);
};

export default MovieList;