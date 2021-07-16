import './App.css';
import React from "react"
import MoviesRepo from "../MoviesRepo/MoviesRepo"
import SelectedMovie from "../SelectedMovie/SelectedMovie"
import apiCalls from "../../apiCalls"
import { Route } from 'react-router-dom';
import loadingImage from "../../assets/loadingImage.jpg";

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
      .catch(err => err.message)
    } 

    render() {
      return (
        <main>
            <nav>
              <h1 className="app-title">Rancid Tomatillos</h1>
            </nav>
            {!this.state.movies.length && !this.state.error.length &&
            <h2> Loading Movies...</h2> 
            }
                {!this.state.movies.length && !this.state.error.length &&
        <img className="loading-image" src={ loadingImage }></img>
        }
{/* 
        {!this.state.selectedMovie && !this.state.error.length && 
                  <h2> Loading Movie Details...</h2> 
                  }
         {!this.state.selectedMovie && !this.state.error.length && 
              <img className="loading-image" src={ loadingImage }></img>
              }      */}
      
          {this.state.error && <h2>{this.state.error}</h2>}
            <Route exact path="/" >
              <MoviesRepo movies={this.state.movies} showMovieDetails={this.showMovieDetails}/> 
            </Route>

            <Route
              path="/movies/:id" render={() => {
              //  {!this.state.selectedMovie && !this.state.error.length &&
              //     <h2> Loading Movie Details...</h2> 
              //     }
              //         {!this.state.selectedMovie && !this.state.error.length &&
              // <img className="loading-image" src={ loadingImage }></img>
              // }
                return <SelectedMovie {...this.state.selectedMovie} returnHome={this.returnHome} />
              }}/>


        </main>
      );
    }


}

export default App;