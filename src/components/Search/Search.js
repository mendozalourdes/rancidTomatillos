import React from "react"
import Movie from "../Movie/Movie"

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
          }).map(movie => {
            return <option value={movie.title}></option>
        })
        this.setState({ filteredMovies: filteredFilms })
      }

    render() {
        return (
        <nav>
            <input 
                className="search-box" 
                type="search"
                name="search"
                list="movies"
                value={this.state.search}
                onChange={this.handleChange}
            />
            <datalist id="movies">
                {this.state.filteredMovies}
            </datalist>
            <button className="search-button" >search</button>
        </nav>   
        )
    }

}

export default Search