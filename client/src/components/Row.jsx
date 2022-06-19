import React from 'react'
import "./Row.css"

const Row = (props) => {
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Type to Search ..."
                        value={props.value}
                        onChange={(e) => props.setSearchValue(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <h2 className='row__title'>{props.title}</h2>
                <div className="row__posters">
                    {props.movies.map((movie) =>
                        <img className='row__poster' src={movie.Poster} alt={movie.Title} key={movie.imdbID} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Row;