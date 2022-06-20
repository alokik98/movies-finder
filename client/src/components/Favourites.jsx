import React from 'react';
import "./Favourite.css"
import { useNavigate } from 'react-router-dom'

const Favourites = (props) => {
    const history = useNavigate();
    console.log(props.movies)
    return (
        <>
            <div className="row">
                <h2 className='row__title'>{props.title}</h2>
                <div className="row__posters">
                    {Array.isArray(props.movies)
                        ? props.movies.map((movie) =>
                            <div className='container'>
                                <img onClick={() => history("/details", { state: { id: movie.imdbID } })} className='row__poster' src={movie.Poster} alt={movie.Title} key={movie.imdbID} />
                                <div className="popup" onClick={() => props.handleFavouritesClick(movie)}>❌
                                </div>
                            </div>
                        )
                        :
                        <h2>No Movies added to List</h2>
                    }
                </div>
            </div>
        </>
    )
}

export default Favourites;