import React from "react"
import Movie from "../Movie/Movie"

class MoviesRepo extends React.Component {
    constructor(props) {
        super(props)
        console.log(props.movies)
        this.state = {
            movies: props.movies
        }
    }

    render() {
        const movieComponents = this.state.movies.map(movie => {
            return <Movie key={movie.id} image={movie.poster_path} title={movie.title}/>
        })
        return (
            <div>
                {movieComponents}
            </div>
        )
    }
}

export default MoviesRepo