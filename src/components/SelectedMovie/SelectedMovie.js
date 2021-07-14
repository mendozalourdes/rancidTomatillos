import React from "react"
import "./SelectedMovie.css"

const SelectedMovie = (props) => {
    const { poster, backdrop, title, rating, genres, releaseDate, budget, revenue, runtime, overview, tagline} = props
    console.log(genres)
    
    return (
        <section className="selected-movie">
              <h3 className="movie-title">{title}</h3>
              <h4 className="">{tagline}</h4>
            <div className="sidebar-backdrop-container">
             <aside className="sidebar">
                <h3>Released: {releaseDate}</h3>
                <h3>Rating: {rating}</h3>
                <h3>Budget: {budget}</h3>
                <h3>Revenue: {revenue}</h3>
                <h3>Runtime: {runtime}</h3>
            </aside>
            <div className="backdrop-container">
                <img src={backdrop} alt={title} className="backdrop"/>
            </div>
            </div>
            <article className="genres">
                <h3>{genres}</h3>
            </article>
            <div className="poster-holder">
                <div className="movie-info">
                <article className="overview">
                    <h3>{overview}</h3>
                </article>
                </div>
                <div>
                    <img className="selected-movie-poster" src={poster}/>
                </div>
                
            </div>
            <button className="return-home" onClick={() => props.returnHome()}>Return Home</button>
        </section>
    )
}

export default SelectedMovie;