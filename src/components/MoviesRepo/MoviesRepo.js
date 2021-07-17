import React from "react"
import Movie from "../Movie/Movie"
import './MoviesRepo.css'

const MoviesRepo = props => {
    const movieComponents = props.movies.map(movie => {
        console.log("movieBackDrop", movie.backdrop)
            return <Movie 
                        key={movie.id} 
                        id={movie.id}
                        image={movie.poster_path} 
                        showMovieDetails={props.showMovieDetails}
                        backdrop={props.backdrop_path}
                    />
    })
    return (
        <div>
            <section className="random-movie-section">
            {/* this is where our RandomMovie component will go */}  
                <img className="random-movie-backdrop" src="https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"/>
            </section>
            <section className="movie-container">
                {movieComponents}
            </section>
        </div>
        )
}

export default MoviesRepo