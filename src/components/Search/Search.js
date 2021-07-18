import React from "react"
import { NavLink, Link, Route } from 'react-router-dom'
import Results from "../Results/Results"
import "./Search.css"


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
        this.setState({ [event.target.name]: event.target.value })
        const searchCase = this.state.search.toLowerCase()
        const filteredFilms = this.state.movies.filter(movie => {
            const lowerCase = movie.title.toLowerCase()
            return lowerCase.includes(searchCase)
          })
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
            <form onSubmit={event => this.handleChange(event)}>
                <input 
                    className="search-box" 
                    type="search"
                    name="search"
                    list="movies"
                    id="search"
                    value={this.state.search}
                    onChange={event => this.handleChange(event)}
                />
                <datalist id="movies">
                    {this.state.options}
                </datalist>
                <Link to={"/search"}>
                    <button 
                        type="submit" 
                        className="search-button"  
                        onClick={event => this.handleChange(event)}>search</button></Link>
                </form>
        </nav>  
        </header>
        {/* <section>
        {!this.state.filteredMovies.length && <h2>Sorry, we couldn't find any movies to match your search. Please try again!</h2>}
        </section> */}
        <Route
           exact path="/search" render={() => {
        return <Results filteredMovies={this.state.filteredMovies}  cleanInputs={this.cleanInputs}/>
        }}/>
        </>
        )
    }
}

export default Search