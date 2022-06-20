import React from 'react';
import "./Favourite.css"

const Favourites = (props) => {
    return (
        <>
            <div className="row">
                <h2 className='row__title'>{props.title}</h2>
                <div className="row__posters">
                    {props.movies.map((movie) =>
                        <div className='container'>
                            <img className='row__poster' src={movie.Poster} alt={movie.Title} key={movie.imdbID} />
                            <div className="popup" onClick={() => props.handleFavouritesClick(movie)}>❌
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Favourites;