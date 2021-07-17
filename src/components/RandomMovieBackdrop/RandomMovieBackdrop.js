import React from "react"



const RandomMovieBackdrop = (props) => {
    console.log("gimmePROPS", props)
    // console.log('propssss', props.movies[0].backdrop_path)
    const randomMovieIndex = Math.floor(Math.random() * props.movies.length)
    console.log("randooo", randomMovieIndex)
    const randomBackdrop = (props.movies[randomMovieIndex].backdrop_path)
    const randomTitle = (props.movies[randomMovieIndex].title)
    console.log("gimmmmmeRandoOOOOO", randomBackdrop)
    // console.log("backdropppp", props.movies[0].backdrop)

    return (
        <section className="random-movie-section">
                <h2 className="backdrop-title"> {randomTitle} </h2>
                <img className="random-movie-backdrop" src={randomBackdrop}/>
            </section>
        )
}

export default RandomMovieBackdrop;