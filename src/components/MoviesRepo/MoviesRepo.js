import React from "react"
import Movie from "../Movie/Movie"
import './MoviesRepo.css'


const MoviesRepo = props => {
    const movieComponents = props.movies.map(movie => {
            return <Movie 
                        key={movie.id} 
                        id={movie.id}
                        image={movie.poster_path} 
                        showMovieDetails={props.showMovieDetails}
                        backdrop={props.backdrop_path}
                        title={movie.title}
                        cleanInputs={props.cleanInputs}
                    />
    })
    return (
        <div>
            <section className="movie-container">
                {movieComponents}
            </section>
        </div>
        )
}

export default MoviesRepo