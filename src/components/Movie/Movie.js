import React from "react"
import './Movie.css'

const Movie = (props) => {
    const { id, title, image } = props
    return(
        <div className="poster-container">
            <img className="movie-poster" src={image}/>
            <button onClick={() => props.showMovieDetails(id)}>More Info</button>
        </div>
    )
}

export default Movie;