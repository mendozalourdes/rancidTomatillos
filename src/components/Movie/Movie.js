import React from "react"
import './Movie.css'

const Movie = (props) => {
    const {title, image} = props
    return(
        <div className="poster-container">
            <img className="movie-poster" src={image}/>
            <button>More Info</button>
        </div>
    )
}

export default Movie;