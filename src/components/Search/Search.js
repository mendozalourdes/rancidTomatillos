import React from "react"
import Movie from "../Movie/Movie"

const Search = props => {
    const movieComponents = props.movies.map(movie => {
        return <Movie 
                    key={movie.id} 
                    id={movie.id}
                    image={movie.poster_path} 
                    showMovieDetails={props.showMovieDetails}
                />
    })
    return (
        <section className="movie-container">
            {movieComponents}
        </section>
    )
}

export default Search