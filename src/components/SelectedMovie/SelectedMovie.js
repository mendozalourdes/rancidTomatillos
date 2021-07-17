import "./SelectedMovie.css"
import React, { Component} from "react";
import apiCalls from "../../Utilities/apiCalls"
import loadingImage from "../../assets/loadingImage.jpg";
import { Link } from 'react-router-dom'
import { modifyMovieData } from '../../Utilities/Utils'




class SelectedMovie extends Component {
    constructor(props) {
        super(props);
        this.state= {
            selectedMovie: "",
            error: "",
          
        }
    }

    componentDidMount() {
        this.setState({selectedMovie: ""})
        apiCalls.fetchAPIData(`/movies/${this.props.match.params.id}`)
          .then(response => {
            if(typeof response === 'string') {
              this.setState({ error: response })
            } else {
              this.setState({selectedMovie: modifyMovieData(response.movie)})
            }
        })
        .catch(err => err.message)
  }

 render() {

          const {
            poster_path, 
            backdrop_path, 
            genres, 
            title, 
            average_rating, 
            release_date, 
            budget, 
            revenue, 
            runtime, 
            overview, 
            tagline
          } = this.state.selectedMovie

        let movieDetails =  
        <section className="selected-movie">
        <h3 className="movie-title">{title}</h3>
        <h4 className="tagline">{tagline}</h4>
      <div className="sidebar-backdrop-container">
       <aside className="sidebar">
          <h3>Released: {release_date}</h3>
          <h3>Rating: {average_rating} / 10</h3>
          <h3>Budget: ${budget}</h3>
          <h3>Revenue: ${revenue}</h3>
          <h3>Runtime: {runtime} minutes</h3>
      </aside>
      <div className="backdrop-container">
              <img src={backdrop_path} alt={title} className="backdrop"/>
      </div>
      </div>
      <article className="genres">
          <h3>{genres}</h3>
      </article>
      <div className="poster-holder">
          <div className="movie-info">
          <article className="overview">
              <h3>{overview}</h3>
          <Link to={"/"}>
              <button className="return-home">Return Home</button>
          </Link>
          </article>
          </div>
          <div>
              <img className="selected-movie-poster" alt={`A post of the film ${title}`} src={poster_path}/>
          </div>
      </div>
  </section>

          return (
            <section>
                {!this.state.selectedMovie && !this.state.error.length && 
                    <h2> Loading Movie Details...</h2> 
                    }
           {!this.state.selectedMovie && !this.state.error.length && 
                <img className="loading-image" alt={"Loading movie details"} src={ loadingImage }></img>
                }     

        {this.state.error ?  <h2> {this.state.error}</h2> : movieDetails}

            </section>

          )
      
  }

  



}

export default SelectedMovie;






