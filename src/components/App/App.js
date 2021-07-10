import './App.css';
// import movieData from "./movieData"
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

        // movies: movieData.movies,
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



    //   .then(movies => this.setState({movies: movies.movies}))
    //   .catch(error => this.setState({error: "Our servers are currently down. Please try again."}))
    //   // .catch(error => console.log('GIMME error', this.state.error))
    // }

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
          {/* {console.log('gimmmmme', this.state.error.length)} */}
          {this.state.error && <h2>{this.state.error}</h2>}
          {/* {this.state.error && console.log("testtt", this.state.movies.length)} */}
          {/* selected movie within conditional */}
         {/* {if (this.state.movies.length && this.state.selectedMovie) {
            <SelectedMovie 
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
          } else if (!this.state.error) {
            <MoviesRepo 
               movies={this.state.movies} 
               showMovieDetails={this.showMovieDetails}
              /> 
          }
        } */}
          
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


{/* <h2>{this.state.error}</h2> */}