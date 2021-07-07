import logo from './logo.svg';
import './App.css';
import movieData from "./movieData"
import React from "react"
import MoviesRepo from "./components/MoviesRepo/MoviesRepo"

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        movies: movieData.movies
      }
    }

    render() {
      return (
        <main>
          <h1>Rancid Tomatillos</h1>
          {/* This is where we will import Movies component */}
          {/* this is where our conditional rendering will happen */}
          {/* selected movie within conditional */}
          <MoviesRepo movies={this.state.movies}/>
        </main>
      );
    }

}

export default App;
