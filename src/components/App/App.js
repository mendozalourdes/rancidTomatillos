import './App.css';
import React from "react"
import MoviesRepo from "../MoviesRepo/MoviesRepo"
import SelectedMovie from "../SelectedMovie/SelectedMovie"
import Search from "../Search/Search"
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
      })
      .catch(err => err.message)
  }


    render() {
      return (
        <main>
          {this.state.movies.length && <Search movies={this.state.movies}/>}

          {!this.state.movies.length && !this.state.error.length &&
                <div className="loading-view">
                    <h2> Loading Movies...</h2> 
                    <img className="loading-image" alt={"Loading movies"} src={ loadingImage }></img>
                </div>}

          {this.state.error && <h2>{this.state.error}</h2>}

          <Route exact path="/" >
            <MoviesRepo movies={this.state.movies}/> 
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