import React from "react"
import './Movie.css'
import { Link } from 'react-router-dom'

const Movie = (props) => {
    const { id, image } = props
    return(
        <Link to={`/${id}`}>
        <div className="poster-container">
            <img className="movie-poster" src={image}/>
            <button id={id} onClick={() => props.showMovieDetails(id)}>More Info</button>
        </div>
        </Link>
    )
}

export default Movie;


