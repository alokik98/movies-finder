import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../components/Nav';
import "./DetailScreen.css"

const DetailScreen = (props) => {
    const location = useLocation();
    const [movie, setMovies] = useState("")


    const getMovieRequest = async () => {
        const url = `http://www.omdbapi.com/?i=${location.state.id}&apikey=151a943a`;

        const response = await fetch(url);
        const data = await response.json();
        setMovies(data)
    };

    useEffect(() => {
        getMovieRequest();// eslint-disable-next-line
    }, [location.state.id]);

    return (
        <div className="detailScreen__info">
            <Nav />
            <div className="contents">
                <div className='image'>
                    <div><img src={movie.Poster} alt="" className="backImage" /></div>
                </div>
                <div className="movie-info">
                    <h2>Movie Details</h2>
                    <div>
                        <h1>{movie.Title}</h1>
                        <small>Released Date: {movie.Released}</small>
                    </div>
                    <h4>Rating: {movie.imdbRating} / 10</h4>
                    <p>{movie.Plot}</p>
                    <div className="tags-container">
                        {movie.Genre &&
                            movie.Genre.split(', ').map(g => (
                                <span key={g}>{g}</span>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailScreen;