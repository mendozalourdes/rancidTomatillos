import React from "react"
import './Movie.css'
import { NavLink } from 'react-router-dom'

const Movie = (props) => {
    const { id, image, title } = props
    return(
        <NavLink to={`/movies/${id}`} className="poster-contaner">
        <div className="poster-container" onSubmit={props.cleanInputs} onClick={props.cleanInputs}>
            <img className="movie-poster" src={image} alt={`Movie poster for ${title}`}/>
            <div className="button-container">
                <button className="info-button" id={id}>More Info</button>
            </div>
        </div>
        </NavLink>
    )
}

export default Movie;


