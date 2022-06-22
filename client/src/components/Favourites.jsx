import React, { useContext } from 'react';
import "./Favourite.css"
import { GlobalContext } from '../context/GlobalState';
import { useNavigate } from 'react-router-dom';

const Favourites = (props) => {

    const { favourite } = useContext(GlobalContext)
    const { removeMovieFromFavourite } = useContext(GlobalContext)
    const navigate = useNavigate()
    return (
        <>
            <div className="row">
                <h2 className='row__title'>{props.title}</h2>
                <div className="row__posters">
                    {(favourite)
                        ? favourite.map((movie) =>
                            <div className='container' key={movie.id}>
                                <img onClick={() => { navigate(`/details/${movie.id}`) }}
                                    className='row__poster' src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                                <div className="popup" onClick={() => removeMovieFromFavourite(movie.id)}>❌
                                </div>
                            </div>
                        )
                        :
                        <h3>No Movies added to List</h3>
                    }
                </div>
            </div>
        </>
    )
}

export default Favourites;