import React from "react"
import Movie from "../Movie/Movie"
import './MoviesRepo.css'


// class MoviesRepo extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             movies: props.movies
//         }
//     }

//     render() {
//         const movieComponents = this.state.movies.map(movie => {
//             return <Movie key={movie.id} image={movie.poster_path} title={movie.title}/>
//         })
//         return (
//             <div className="movie-container">
//                 {movieComponents}
//             </div>
//         )
//     }
// }

const MoviesRepo = props => {
    const movieComponents = props.movies.map(movie => {
            return <Movie 
                        key={movie.id} 
                        image={movie.poster_path} 
                        title={movie.title}
                        showMovieDetails={props.showMovieDetails}
                    />
    })
    return (
        <div className="movie-container">
            {movieComponents}
        </div>
        )
}
//}

export default MoviesRepo