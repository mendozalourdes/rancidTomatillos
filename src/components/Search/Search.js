import React from "react"
import Movie from "../Movie/Movie"

// const Search = props => {
//     const movieComponents = props.movies.map(movie => {
//         return <Movie 
//                     key={movie.id} 
//                     id={movie.id}
//                     image={movie.poster_path} 
//                     showMovieDetails={props.showMovieDetails}
//                 />
//     })
//     return (
//         <section className="movie-container">
//             {movieComponents}
//         </section>
//     )
// }

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: props.movies,
            search: "",
            filteredMovies: []
        }
    }

    // searchMovies = () => {
    //     // props.movies.filter(movie => {
    //     //   return movie.title.includes(this.state.search)
    //     // }).map(movie => {
    //     //   return <option>{movie.title}</option>
    //     // })
    //     this.filteredMovies.map(movie => {
    //         return <option>{movie.title}</option>
    //     })
    //   }

    handleChange = event => {
        // const search = event.target
        this.setState({ [event.target.name]: event.target.value })
        const filteredFilms = this.state.movies.filter(movie => {
            return movie.title.includes(this.state.search)
          })
        this.setState({ filteredMovies: filteredFilms })
      }

    render() {
        console.log(this.filteredMovies)
        const options = this.filteredMovies.map(movie => {
            return <option>{movie.title}</option>
        })
        return (
        <nav>
            <input 
                className="search-box" 
                type="search"
                name="search"
                value={this.state.search}
                onChange={this.handleChange}
            />
            <select>
                {options}
            </select>
            <button className="search-button" >search</button>
        </nav>   
        )
    }

}

export default Search