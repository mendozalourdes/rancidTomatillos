import React from "react"
import Movie from "../Movie/Movie"
import './MoviesRepo.css'
import Search from "../Search/Search"

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
        <div>
            {/* <header>
            <h1 className="app-title">Rancid Tomatillos</h1>
            <nav>
              <input className="search-box" type="search"/> 
              <button className="search-button" >search</button>
            </nav>
          </header> */}
            {/* <section className="random-movie-section">
            this is where our RandomMovie component will go  
                <img className="random-movie-backdrop" src="https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"/>
            </section> */}
            <section className="movie-container">
                {movieComponents}
            </section>
        </div>
        )
}

export default MoviesRepo