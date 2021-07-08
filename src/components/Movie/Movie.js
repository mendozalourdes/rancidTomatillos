import React from "react"
import './Movie.css'

const Movie = (props) => {
    const {title, image} = props
    return(
        <div>
            <img className="movie-poster" src={image}/>
        </div>
    )
}

export default Movie