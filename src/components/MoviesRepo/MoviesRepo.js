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
                    />
    })
    return (
        <div className="movie-container">
            {movieComponents}
        </div>
        )
}

export default MoviesRepo