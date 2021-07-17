import React from "react"
import './Movie.css'
import { Link } from 'react-router-dom'

const Movie = (props) => {
    const { id, image, title } = props
    return(
        <Link to={`/movies/${id}`}>
        <div className="poster-container">
            <img className="movie-poster" src={image} alt={`Movie poster for ${title}`}/>
            <div className="button-container">
                <button className="info-button" id={id} onClick={props.cleanInputs}>More Info</button>
            </div>
        </div>
        </Link>
    )
}

export default Movie;


