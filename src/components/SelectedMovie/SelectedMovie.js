// import React from "react"
import "./SelectedMovie.css"
import React, { Component} from "react";
import apiCalls from "../../apiCalls"
import loadingImage from "../../assets/loadingImage.jpg";



class SelectedMovie extends Component {
    constructor(props) {
        super(props);
        console.log("props", props)
        this.state= {
            selectedMovie: props.selectedMovie,
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
              this.setState({selectedMovie: response.movie})
            }
        })
        .catch(err => err.message)
  }

  returnHome = () => {
    this.setState({selectedMovie: ""})
  }


  



}

export default SelectedMovie;






