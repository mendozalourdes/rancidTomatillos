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
      // .then(selectedMovie => this.setState({selectedMovie: selectedMovie.movie}))
      .catch(err => err.message)
    } 

    render() {
      return (
        <main>
            <nav>
              <h1 className="app-title">Rancid Tomatillos</h1>
            </nav>
          {this.state.error && <h2>{this.state.error}</h2>}
          {/* selected movie within conditional */}
            <Route exact path="/" >
              <MoviesRepo movies={this.state.movies} showMovieDetails={this.showMovieDetails}/> 
            </Route>

            <Route
              path="/movies/:id" render={() => {
                // const chosenMovie = this.state.movies.find(movie => movie.id === parseInt(match.params.id)) 
                // console.log("chosen", match)
                // console.log("state", this.state.movies)
                // console.log("select", this.state.selectedMovie)
                // console.log("chosen", chosenMovie)
                return <SelectedMovie {...this.state.selectedMovie} returnHome={this.returnHome} />
              }}/>


{/* 
          {this.state.movies && this.state.selectedMovie ? <SelectedMovie 
                                        key={this.state.selectedMovie.id} 
                                        poster={this.state.selectedMovie.poster_path} 
                                        backdrop={this.state.selectedMovie.backdrop_path}
                                        title={this.state.selectedMovie.title}
                                        rating={this.state.selectedMovie.average_rating}
                                        releaseDate={this.state.selectedMovie.release_date}
                                        budget={this.state.selectedMovie.budget}
                                        revenue={this.state.selectedMovie.revenue}
                                        tagline={this.state.selectedMovie.tagline}
                                        genres={this.state.selectedMovie.genres}
                                        overview={this.state.selectedMovie.overview}
                                        returnHome={this.returnHome}
                                      />
                                    : <MoviesRepo 
                                        movies={this.state.movies} 
                                        showMovieDetails={this.showMovieDetails}
                                      /> 
          }                          */}
        </main>
      );
    }


}

export default App;