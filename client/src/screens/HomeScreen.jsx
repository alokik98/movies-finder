import React, { useEffect, useState } from 'react'
import Banner from './../components/Banner'
import Favourites from './../components/Favourites';
import Nav from './../components/Nav'
import RemoveFavourites from './../components/RemoveFavourites';
import Row from './../components/Row';

const HomeScreen = () => {

    const [movies, setMovies] = useState([
        // Default Movie List on loading the screen
        {
            "Title": "Star Wars",
            "Year": "1977",
            "imdbID": "tt0076759",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
        },
        {
            "Title": "Star Wars: Episode V - The Empire Strikes Back",
            "Year": "1980",
            "imdbID": "tt0080684",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            "Title": "The Avengers",
            "Year": "2012",
            "imdbID": "tt0848228",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
            "Title": "Avengers: Endgame",
            "Year": "2019",
            "imdbID": "tt4154796",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
        },
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Avengers: Age of Ultron",
            "Year": "2015",
            "imdbID": "tt2395427",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
        },
        {
            "Title": "Interstellar",
            "Year": "2014",
            "imdbID": "tt0816692",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
            "Title": "John Wick",
            "Year": "2014",
            "imdbID": "tt2911666",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
        },
        {
            "Title": "John Wick: Chapter 2",
            "Year": "2017",
            "imdbID": "tt4425200",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_SX300.jpg"
        },
        {
            "Title": "The Matrix",
            "Year": "1999",
            "imdbID": "tt0133093",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        },
        {
            "Title": "The Matrix Reloaded",
            "Year": "2003",
            "imdbID": "tt0234215",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        },
    ]);
    const [searchValue, setSearchValue] = useState("");
    const [favourite, setFavourite] = useState([]);

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=151a943a`;

        const response = await fetch(url);
        const data = await response.json();
        if (data.Search) {
            setMovies(data.Search);
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    useEffect(() => {
        const movieFavourites = JSON.parse(
            // Saving the Favourite movie in localStorage of the user
            localStorage.getItem("react-movie-app-favourites")
        );

        setFavourite(movieFavourites);
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
    };

    const addFavouriteMovie = (movie) => {
        const newFavouriteMovie = [...favourite, movie];
        setFavourite(newFavouriteMovie);
        saveToLocalStorage(newFavouriteMovie);
    };

    const removeFavouriteMovie = (movie) => {
        const newFavouriteMovie = favourite.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
        );
        setFavourite(newFavouriteMovie);
        saveToLocalStorage(newFavouriteMovie);
    };

    return (
        <div className='homeScreen'>
            <Nav />
            <Banner />
            <Row title="Movies" searchValue={searchValue} setSearchValue={setSearchValue} movies={movies} handleFavouritesClick={addFavouriteMovie} />
            <Favourites title="My List" movies={favourite}
                handleFavouritesClick={removeFavouriteMovie}
                favouriteComponent={RemoveFavourites} />
        </div>
    )
}

export default HomeScreen