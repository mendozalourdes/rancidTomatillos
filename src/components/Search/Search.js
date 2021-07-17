import React from "react"
import MoviesRepo from "../MoviesRepo/MoviesRepo"
import { Link, Route } from 'react-router-dom'
import Results from "../Results/Results"

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
        const searchCase = this.state.search.toLowerCase()
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
        <>
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
            <Link to={"/search"}><button className="search-button" >search</button></Link>
        </nav>   

        <Route
            path="/search" render={() => {
        return <Results filteredMovies={this.state.filteredMovies}  />
        }}/>  
        {/* Add a return home button on here too */}
        {/* style the page */}
        </>
        )
    }

}

export default Search