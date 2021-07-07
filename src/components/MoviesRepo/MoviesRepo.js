import React from "react"

class MoviesRepo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: props.movies
        }
    }

    render() {
        const movieComponents = this.state.movies.map(movie => {
            return <MovieCard />
        })
        return (
            <div>
                {movieComponents}
            </div>
        )
    }
}

export default MoviesRepo