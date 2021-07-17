import React from "react"
import MoviesRepo from "../MoviesRepo/MoviesRepo"
import { NavLink, Link, Route } from 'react-router-dom'
import Results from "../Results/Results"
import "./Search.css"
import { white } from "jest-matcher-utils/node_modules/chalk"

class Search extends React.Component {
    constructor(props) {
        super(props)
        // console.log("search props", props)
        this.state = {
            movies: props.movies,
            search: "",
            filteredMovies: [],
            options: []
        }
    } 

    handleChange = event => {
        // const search = event.target
        // this.setState({ search: "" })
        this.setState({ [event.target.name]: event.target.value })
        const searchCase = this.state.search.toLowerCase()
        // console.log("search bar", this.state.search)
        // console.log("search state movies", this.state.movies)
        const filteredFilms = this.state.movies.filter(movie => {
            const lowerCase = movie.title.toLowerCase()
            return lowerCase.includes(searchCase)
          })
        //   console.log("filteredFilms", this.state.filteredMovies)
        const listOptions = filteredFilms.map(movie => {
            return <option key={movie.id} value={movie.title} >{movie.title}</option>
        })
        this.setState({ filteredMovies: filteredFilms, options: listOptions })
      }

      cleanInputs = () => {
        this.setState({ search: "" })
      }

    render() {
        return (
        <>
        <header>
           <NavLink to={"/"} style={{ textDecoration: 'none', color: "white" }}> <h1 className="app-title" onClick={this.cleanInputs}>Rancid Tomatillos</h1> </NavLink>
        <nav>
            <input 
                className="search-box" 
                type="search"
                name="search"
                list="movies"
                id="search"
                value={this.state.search}
                onChange={this.handleChange}
                // onClick={this.handleChange}
                // onSubmit={this.handleChange}
            />
            <datalist id="movies">
                {this.state.options}
            </datalist>
            <Link to={"/search"}>
                <button 
                    type="submit" 
                    className="search-button" 
                    onSubmit={this.handleChange} 
                    onClick={this.handleChange}>search</button></Link>
        </nav>  
        </header>
        <Route
           exact path="/search" render={() => {
        return <Results filteredMovies={this.state.filteredMovies}  cleanInputs={this.cleanInputs}/>
        }}/>
        {/* Add a return home button on here too  page title*/}
        </>
        )
    }
}

export default Search