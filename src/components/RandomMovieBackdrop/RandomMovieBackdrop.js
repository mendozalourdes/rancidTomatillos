import React from "react"
import "./RandomMovieBackdrop.css"



const RandomMovieBackdrop = (props) => {
    const randomMovieIndex = Math.floor(Math.random() * props.movies.length)
    const randomBackdrop = (props.movies[randomMovieIndex].backdrop_path)
    const randomTitle = (props.movies[randomMovieIndex].title)

    return (
        <section className="random-movie-section">
            <img className="random-movie-backdrop" src={randomBackdrop} alt={`Backdrop from ${randomTitle}`}/>
            <div className="random-movie-details">
                <h2 className="random-movie-title"> {randomTitle} </h2>
                <button className="random-info-button" id={props.id}>More Info</button>
            </div>
        </section>
        )
}

export default RandomMovieBackdrop;