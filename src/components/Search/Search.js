import React from "react"
import MoviesRepo from "../MoviesRepo/MoviesRepo"
import { Link, Route } from 'react-router-dom'
import Results from "../Results/Results"

class Search extends React.Component {
    constructor(props) {
        super(props)
        console.log("search props", props)
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
        console.log("search bar", this.state.search)
        console.log("search state movies", this.state.movies)
        const filteredFilms = this.state.movies.filter(movie => {
            const lowerCase = movie.title.toLowerCase()
            return lowerCase.includes(searchCase)
          })
          console.log("filteredFilms", this.state.filteredMovies)
        const listOptions = filteredFilms.map(movie => {
            return <option value={movie.title}></option>
        })
        this.setState({ filteredMovies: filteredFilms, options: listOptions })
      }

    render() {
        return (
        <>
        <header>
            <h1 className="app-title">Rancid Tomatillos</h1>
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
        </header>
        <Route
           exact path="/search" render={() => {
        return <Results filteredMovies={this.state.filteredMovies}  />
        }}/>
        {/* Add a return home button on here too  page title*/}
        {/* style the page */}
        </>
        )
    }
}

export default Search