// import React from "react";
// import PropTypes from "prop-types";
// import '../css/MovieList.css'
// import MovieCard from "./MovieCard";


// const MovieList = ({ movies = [], onMovieCardClicked }) => {
//   return (
//     <div style={{display: "flex", flexWrap: 'wrap'}}>
//       {movies.map((movie) => (
//         <MovieCard
//           key={movie.imdbID}
//           title={movie.Title}
//           type={movie.Type}
//           posterUrl={movie.Poster}
//           onClicked={() => onMovieCardClicked(movie.imdbID)}
//         />
//       ))}
//     </div>
//   );
// }

// MovieList.defaultProps = {
//   movies: [],
// };

// MovieList.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.object),
// };



// export default MovieList;


import React, { useState } from "react";
import MovieDetails from "./MovieDetails";
import { Button } from "./Styles";
import Modal from "react-modal";
const MovieList = (props) => {
	const [show, setShow] = useState(false);
	const styles = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
		margin: "10px",
		height: "250px",

		img: {
			height: "200px",
			width: "100px",
			objectContain: "fit",
        },
        modal: {
            height: "100px",
        }
    };
    const modalToggle = () => {
        setShow(!show);
    }

	Modal.setAppElement("#root");
	return (
		<div style={styles}>
			<img src={props.poster} alt="" style={styles.img} />
			<Button color="white" bgColor="#007bff" onClick={modalToggle}>
				Open
			</Button>
			<Modal isOpen={show} onRequestClose={modalToggle}>
				<Button
					style={{ marginLeft: "0" }}
					hbgColor="red"
					onClick={modalToggle}
				>
					X
				</Button>
				<MovieDetails id={props.id} />
				<Button color="white" bgColor="red" onClick={modalToggle}>
					Close
				</Button>
			</Modal>
		</div>
	);
};

export default MovieList;