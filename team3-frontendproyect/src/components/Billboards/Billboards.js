import React, { useEffect, useState } from "react";
import axios from "axios";
import Youtube from "react-youtube";
import "./Billboards.css";
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Billboards() {
	const API_URL = "https://api.themoviedb.org/3";
	const API_KEY = "7eb3829497df1ba8440767aedac6a6d2";
	const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
	const URL_IMAGE = "https://image.tmdb.org/t/p/original";

	// variables de estado

	const [movies, setMovies] = useState([]);
	const [searchkey, setSearchkey] = useState("");
	const [trailer, setTrailer] = useState(null);
	const [movie, setMovie] = useState({ title: "Loading Movies" });
	const [playing, setPlaying] = useState(false);

	// funcion para realizar la peticion por get a la api

	const fetchMovies = async (searchkey) => {
		const type = searchkey ? "search" : "discover";
		const {
			data: { results },
		} = await axios.get(`${API_URL}/${type}/movie`, {
			params: {
				api_key: API_KEY,
				query: searchkey,
			},
		});

		setMovies(results);
		setMovie(results[0]);

		if (results.length) {
			await fetchMovie(results[0].id);
		}
	};

	//funcion para la peticion de un solo objeto y mostrar en reproductor de video
	const fetchMovie = async (id) => {
		const { data } = await axios.get(`${API_URL}/movie/${id}`, {
			params: {
				api_key: API_KEY,
				append_to_response: "videos",
			},
		});
		if (data.videos && data.videos.results) {
			const trailer = data.videos.results.find(
				(vid) => vid.name === "Official Trailer"
			);
			setTrailer(trailer ? trailer : data.videos.results[0]);
		}
		setMovie(data);
	};

	const selectMovie = async (movie) => {
		fetchMovie(movie.id);
		setMovie(movie);
		window.scrollTo(0, 0);
	};

	// Funcion para buscar peliculas
	const searchMovies = (e) => {
		e.preventDefault();
		fetchMovies(searchkey);
	};
	useEffect(() => {
		fetchMovies();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	return (
		<div>
			<h2 className="text-center mt-5 mb-5">Trailer Movies</h2>
			<form className="mb-4" onSubmit={searchMovies}>
				<input className="buscador container text-center"
					type="text"
					placeholder="Buscar peliculas, series..."
					onChange={(e) => setSearchkey(e.target.value)}
				/>
				<button className="btn btn-primary mt-3">Buscar</button>
			</form>
			<div>
				<main>
					{movies ? (
						<div
							className="viewtrailer"
							style={{
								backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
							}}
						>
							{playing ? (
								<>
									<Youtube
										videoId={trailer.key}
										className="reproductor container"
										containerClassname={"youtube-container "}
										opts={{
											width: "100%",
											height: "100%",
											playerVars: {
												autoplay: 1,
												controls: 0,
												cc_load_policy: 0,
												fs: 0,
												iv_load_policy: 0,
												modestbranding: 0,
												rel: 0,
												showinfo: 0,
											},
										}}
									/>
									<button onClick={() => setPlaying(false)} className="boton">
										Close
									</button>
								</>
							) : (
								<div className="">
									<div className="text-center">
										{trailer ? (
											<button
												className="boton playButton"
												onClick={() => setPlaying(true)}
												type="button"
											>
											</button>
										) : (
											"sorry, no trailer available"
										)}
										<div className="selectedMovieTextBox">
											<h1 className="trailer text-start">{movie.title}</h1>
											<p className="trailer text-start">{movie.overview}</p>
										</div>
									</div>
								</div>
							)}
						</div>
					) : null}
				</main>
			</div>
			<div className="container mt-5">
				<div className="row">
					{movies.map((movie) => (
						<div
							key={movie.id}
							className="col-md-3 mg-2 text-center movieCard"
							onClick={() => selectMovie(movie)}
						>
							<img
								src={`${URL_IMAGE + movie.poster_path}`}
								alt=""
								height="250"
							/>
							<h4 className="cards text-center">{movie.title}</h4>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Billboards;
