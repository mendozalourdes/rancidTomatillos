import React from "react"
import MoviesRepo from "../MoviesRepo/MovieRepo"


const RandomMovieBackdrop = props => {
    console.log("gimmePROPS", props)
    console.log('propssss', props.movies[0].backdrop_path)
    const randomMovieIndex = Math.floor(Math.random() * props.movies.length)
    console.log("randooo", randomMovieIndex)
    const randomBackdrop = (props.movies[randomMovieIndex].backdrop_path)
    console.log("gimmmmmeRandoOOOOO", randomBackdrop)
    // console.log("backdropppp", props.movies[0].backdrop)
    })
    return (
            <section className="random-movie-section">
                <img className="random-movie-backdrop" src={randomBackdrop}/>
            </section>
        )
}

export default RandomMovieBackdrop