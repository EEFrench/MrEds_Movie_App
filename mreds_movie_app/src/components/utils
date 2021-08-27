import axios from "axios";

const apiEndpoint = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;



export async function getMovieByName(userInput, type) {
	const request = await fetch(
		`http://www.omdbapi.com/?s=${userInput}&type=${type}&apikey=${process.env.REACT_APP_API_KEY}`
	);
	// console.log(request);
	const data = await request.json();
	// console.log(data);
	const file = data.Search;
	// console.log(file);
	return file;
}

export const getMovieByID = (id = "tt1632708") => {
	const data= axios.get(`${apiEndpoint}&i=${id}`)
		.then((res) => res.data)
	return data;
};

// export async function getMovieByName(userInput = "matrix", type = "movie") {
// 	axios
// 		.get(
// 			`http://www.omdbapi.com/?s=${userInput}&type=${type}&apikey=${process.env.REACT_APP_API_KEY}`
// 	).then((res) => res.data)
// 		.catch((err) => console.log(err))
// 		// .then(function (response) {
// 		// 	console.log(response.data);
// 		// 	console.log(response.status);
// 		// 	// console.log(response.statusText);
// 		// 	// console.log(response.headers);
// 		// 	// console.log(response.config);
// 		// });
// }