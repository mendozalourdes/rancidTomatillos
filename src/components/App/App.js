import './App.css';
import React from "react"
import MoviesRepo from "../MoviesRepo/MoviesRepo"
import SelectedMovie from "../SelectedMovie/SelectedMovie"
import apiCalls from "../../apiCalls"

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
    apiCalls.fetchAPIData(`/movies/${id}`)
      .then(selectedMovie => this.setState({selectedMovie: selectedMovie.movie}))
    } 

    render() {
      return (
        <main>
          <header> 
            <h1 className="app-title">Rancid Tomatillos</h1>
          </header>
          {this.state.error && <h2>{this.state.error}</h2>}
          {/* selected movie within conditional */}
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
          }                         
        </main>
      );
    }


}

export default App;