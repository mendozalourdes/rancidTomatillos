import './App.css';
import movieData from "./movieData"
import React from "react"
import MoviesRepo from "./components/MoviesRepo/MoviesRepo"
import SelectedMovie from "./components/SelectedMovie/SelectedMovie"

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
          <header> 
            <h1 className="app-title">Rancid Tomatillos</h1>
          </header>
          {/* This is where we will import Movies component */}
          {/* this is where our conditional rendering will happen */}
          {/* selected movie within conditional */}
          <MoviesRepo movies={this.state.movies}/>
        </main>
      );
    }

}

export default App;
