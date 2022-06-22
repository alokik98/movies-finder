import React, { useContext, useEffect, useState } from 'react'
import "./Row.css"
import favourite1 from "./../images/heart.png"
import { GlobalContext } from '../context/GlobalState'
import { useNavigate } from 'react-router-dom'

const Row = (props) => {
    const [searchValue, setSearchValue] = useState("");
    const [movies, setMovies] = useState([]);
    // const [selectmovie, setSelectMovie] = useState();

    const [timeoutId, updateTimeOut] = useState()

    const { addMovieToFavourite } = useContext(GlobalContext)
    const navigate = useNavigate();

    const onTextChange = (event) => {
        clearTimeout(timeoutId)
        setSearchValue(event.target.value)
        const timeout = setTimeout(() => getMovieRequest(event.target.value), 500)
        updateTimeOut(timeout)
    }


    const getMovieRequest = async (searchValue) => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${searchValue ? searchValue : "avengers"}`;

        const response = await fetch(url);
        const data = await response.json();
        if (!data.errors) {
            setMovies(data.results)
        } else {
            setMovies([])
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    });

    return (
        <>
            <div className="row">
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Type to Search ..."
                            value={searchValue}
                            onChange={onTextChange} />
                    </div>
                </div>
                <h2 className='row__title'>{props.title}</h2>
                <div className="row__posters">
                    {movies.map((movie, index) =>
                        <div className='container' key={index}>
                            <img onClick={() => { navigate(`/details/${movie.id}`) }}
                                className='row__poster' src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                            <div className="popup" onClick={() => addMovieToFavourite(movie)} >
                                <img src={favourite1} alt="favourite" style={{
                                    height: "25px",
                                    width: "25px"
                                }} />
                                <span className="tooltiptext">Add to Favourites</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Row;