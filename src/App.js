import logo from './logo.svg';
import './App.css';
import movieData from "./movieData"
import React from "react"

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
        </main>
      );
    }

}

export default App;
