import React from "react"
import Movie from "../Movie/Movie"

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: props.movies,
            search: "",
            filteredMovies: [],
            options: []
        }
    }

    handleChange = event => {
        // const search = event.target
        this.setState({ [event.target.name]: event.target.value })
        const searchCase = this.state.search
        const filteredFilms = this.state.movies.filter(movie => {
            const lowerCase = movie.title.toLowerCase()
            return lowerCase.includes(searchCase)
          })
        const listOptions = filteredFilms.map(movie => {
            return <option value={movie.title}></option>
        })
        this.setState({ filteredMovies: filteredFilms, options: listOptions })
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
                {this.state.options}
            </datalist>
            <button className="search-button" >search</button>
        </nav>   
        )
    }

}

export default Search