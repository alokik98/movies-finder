import React from 'react'
import "./Row.css"
import favourite from "./../images/heart.png"
import { useNavigate } from 'react-router-dom'

const Row = (props) => {
    const history = useNavigate();
    return (
        <>
            <div className="row">
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Type to Search ..."
                            value={props.value}
                            onChange={(e) => props.setSearchValue(e.target.value)} />
                    </div>
                </div>
                <h2 className='row__title'>{props.title}</h2>
                <div className="row__posters">
                    {props.movies.map((movie) =>
                        <div className='container'>
                            <img
                                onClick={() => history("/details", { state: { id: movie.imdbID } })}
                                className='row__poster' src={movie.Poster} alt={movie.Title} key={movie.imdbID} />
                            <div className="popup" onClick={() => props.handleFavouritesClick(movie)}>
                                <img src={favourite} alt="favourite" style={{
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