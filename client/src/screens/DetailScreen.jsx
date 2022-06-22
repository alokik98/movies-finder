import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import "./DetailScreen.css"

const API_KEY = process.env.REACT_APP_TMDB_KEY;

const DetailScreen = (props) => {

    const [movie, setMovie] = useState()
    const [video, setVideo] = useState()

    const { id } = useParams()

    const filteredMovie = async () => {
        // https://api.themoviedb.org/3/movie/299534?api_key=25c89088a05b9f291308b635e78433d3
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`

        const response = await fetch(url)
        const data = await response.json()

        setMovie(data);
        console.log(data)
    }

    useEffect(() => {
        filteredMovie();
    }, [])

    const fetchVideo = async () => {
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`

        const res = await fetch(url)
        const videos = await res.json()

        setVideo(videos.results[0]?.key);
    }

    useEffect(() => {
        fetchVideo();
    }, [])

    // const goToYoutube = (id) => {
    //     const youtube = `https://youtube.com/`
    // };

    return (
        <div className='profileScreen'>
            <Nav />
            <div className="profileScreen__body">
                {movie && (
                    <>
                        <h1>Movie Details</h1>
                        <div className="detailScreen__info">
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="profile pic" />
                            <div className="profileScreen__details">
                                <h2>{movie.title}</h2>
                                <p className='detailScreen__details'> <span className='overview'> Overview: </span><p className='overview__text'>{movie.overview}</p></p>
                                <p className='detailScreen__rating'> <span className='rating'> Rating: </span><span className="text">{movie.vote_average}</span></p>
                                <p className='detailScreen__date'><span className="date">Date:</span> <span className="text">{movie.release_date}</span></p>
                                <p className='detailScreen__genres'><spa className="genres">Genres:</spa> {movie.genres.map((id, index) => (<span className='detailScreen__genre' style={{ marginRight: "5px" }} key={index}>{id.name}</span>))}</p>
                                <div className="profileScreen__plans">
                                    <a href={`https://www.youtube.com/watch?v=${video}`} target="_blank" rel="noreferrer">
                                        <button className='profileScreen__signout'>Watch on Youtube</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default DetailScreen;