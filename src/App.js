import './App.css';
import movieData from "./movieData"
import React from "react"
import MoviesRepo from "./components/MoviesRepo/MoviesRepo"
import SelectedMovie from "./components/SelectedMovie/SelectedMovie"
import apiCalls from "./apiCalls"

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        movies: [

        ],

        // movies: movieData.movies,
        selectedMovie: ""
      }
    }

    componentDidMount() {
    apiCalls.fetchAPIData("movies")
      .then(movies => this.setState({movies: movies.movies}))
    }

    returnHome = () => {
      this.setState({selectedMovie: ""})
    }

    showMovieDetails = (id) => {
    apiCalls.fetchAPIData(`movies/${id}`)
      .then(selectedMovie => this.setState({selectedMovie: selectedMovie.movie}))
    } 

    render() {
      return (
        <main>
          <header> 
            <h1 className="app-title">Rancid Tomatillos</h1>
          </header>
          {/* this is where our conditional rendering will happen */}
          {/* selected movie within conditional */}
          {this.state.selectedMovie ? <SelectedMovie 
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
          }                         
        </main>
      );
    }


}

export default App;
