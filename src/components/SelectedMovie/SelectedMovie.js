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

  



}

export default SelectedMovie;






