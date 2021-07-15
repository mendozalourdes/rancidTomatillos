import './App.css';
import React from "react"
import MoviesRepo from "../MoviesRepo/MoviesRepo"
import SelectedMovie from "../SelectedMovie/SelectedMovie"
import apiCalls from "../../apiCalls"
import { Route } from 'react-router-dom';

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        movies: [
        ],
        error: "",
        selectedMovie: ""
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
          console.log(this.state.movies[0].backdrop_path)
      })
      .catch(err => err.message)
}


    returnHome = () => {
      this.setState({selectedMovie: ""})
    }

    showMovieDetails = (id) => {
      this.setState({selectedMovie: ""})
      apiCalls.fetchAPIData(`/movies/${id}`)
        .then(response => {
          if(typeof response === 'string') {
            this.setState({ error: response })
          } else {
            this.setState({selectedMovie: response.movie})
          }
        })
        .catch(err => err.message)
    } 

    render() {
      return (
        <main>
          <header>
            <h1 className="app-title">Rancid Tomatillos</h1>
          </header>
          <section className="random-movie-section">
            {/* this is where our RandomMovie component will go */}
            
            <img className="random-movie-backdrop" src="https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"/>
          </section>
          {this.state.error && <h2>{this.state.error}</h2>}
          <Route exact path="/" >
              <MoviesRepo movies={this.state.movies} showMovieDetails={this.showMovieDetails}/> 
          </Route>

          <Route
            path="/movies/:id" render={() => {
            return <SelectedMovie {...this.state.selectedMovie} returnHome={this.returnHome} />}
          }/>
        </main>
      );
    }


}

export default App;