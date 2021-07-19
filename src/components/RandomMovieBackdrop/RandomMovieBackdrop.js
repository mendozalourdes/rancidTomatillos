import React from "react"
import "./RandomMovieBackdrop.css"



const RandomMovieBackdrop = (props) => {
    const randomMovieIndex = Math.floor(Math.random() * props.movies.length)
    const randomBackdrop = (props.movies[randomMovieIndex].backdrop_path)
    const randomTitle = (props.movies[randomMovieIndex].title)

    return (
        <section className="random-movie-section">
                <h2 className="random-movie-title"> {randomTitle} </h2>
                <img className="random-movie-backdrop" src={randomBackdrop} alt={`Backdrop from ${randomTitle}`}/>
            </section>
        )
}

export default RandomMovieBackdrop;