import './App.css';
import React from "react"
import MoviesRepo from "../MoviesRepo/MoviesRepo"
import SelectedMovie from "../SelectedMovie/SelectedMovie"
import Search from "../Search/Search"
import apiCalls from "../../apiCalls"
// import Results from "../Results/Results"
import { Route } from 'react-router-dom';
import loadingImage from "../../assets/loadingImage.jpg";

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        movies: [
        ],
        error: "",
      }
    }

    componentDidMount() {
      apiCalls.fetchAPIData("/movies")
        .then(response => {
          if(typeof response === 'string') {
            this.setState({ error: response })
          } else {
            this.setState({movies: response.movies})
          }
      })
      .catch(err => err.message)
  }


    render() {
      return (
        <main>
          {/* <header>
            <h1 className="app-title">Rancid Tomatillos</h1>
            <Search movies={this.state.movies}/>
          </header> */}
          {/* add a line of conditional rendering until the this.state.movies.length is truthy */}
           {this.state.movies.length && <Search movies={this.state.movies}/>}
          
          {/* <Search movies={this.state.movies}/> */}
          {/* {console.log("app", this.state.movies)} */}
          {/* <Search movies={this.state.movies}/> */}
          {this.state.error && <h2>{this.state.error}</h2>}
            {/* <section className="random-movie-section">
            this is where our RandomMovie component will go  
                <img className="random-movie-backdrop" src="https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"/>
            </section> */}
            <Route exact path="/" >
              <MoviesRepo movies={this.state.movies}/> 
            </Route>

            <Route
              path="/movies/:id" render={(props) => {
                return <SelectedMovie {...props }  />
              }}/>
            {/* <Route
           exact path="/search" render={() => {
        return <Results filteredMovies={Search.filteredMovies}  />
        }}/> */}
            {/* <Route
              path="/search" render={() => {
                return <Results {...props }  />
              }}/>   */}
              {/* Search. props to access results through route here */}
        </main>
      );
    }


}

export default App;