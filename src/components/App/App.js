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


    render() {
      return (
        <main>
          <header>
            <h1 className="app-title">Rancid Tomatillos</h1>
            <nav>
              <input className="search-box" type="search"/> 
              <button className="search-button" >search</button>
            </nav>
            </header>
            {!this.state.movies.length && !this.state.error.length &&
            <h2> Loading Movies...</h2> 
            }
                {!this.state.movies.length && !this.state.error.length &&
        <img className="loading-image" src={ loadingImage }></img>
        }
          {this.state.error && <h2>{this.state.error}</h2>}
            <Route exact path="/" >
              <MoviesRepo movies={this.state.movies} showMovieDetails={this.showMovieDetails}/> 
            </Route>

            <Route
              path="/movies/:id" render={(props) => {
                return <SelectedMovie {...props }  />
              }}/>

              
        </main>
      );
    }


}

export default App;