import React from "react"

const Movie = (props) => {
    const {title, image} = props
    return(
        <div>
            <img src={image}/>
            <h2>{title}</h2>
        </div>
    )
}

export default Movie