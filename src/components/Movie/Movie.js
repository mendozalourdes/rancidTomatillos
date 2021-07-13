import React from "react"
import './Movie.css'

const Movie = (props) => {
    const { id, image } = props
    return(
        <div className="poster-container">
            <img className="movie-poster" src={image}/>
            <button id={id} onClick={() => props.showMovieDetails(id)}>More Info</button>
        </div>
    )
}

export default Movie;


