import React from "react"
import "./RandomMovieBackdrop.css"
import { NavLink } from "react-router-dom"


const RandomMovieBackdrop = (props) => {
  const randomMovieIndex = Math.floor(Math.random() * props.movies.length);
  const randomBackdrop = props.movies[randomMovieIndex].backdrop_path;
  const randomTitle = props.movies[randomMovieIndex].title;
  const randomId = props.movies[randomMovieIndex].id;

    return (
        <section className="random-movie-section">
            <img className="random-movie-backdrop" src={randomBackdrop} alt={`Backdrop from ${randomTitle}`}/>
            <div className="random-movie-details">
                <h2 className="random-movie-title"> {randomTitle} </h2>
                <NavLink to={`/movies/${randomId}`} className="poster-contaner"><button className="random-info-button" id={props.id}>More Info</button></NavLink>
            </div>
        </section>
        )
}

export default RandomMovieBackdrop;
