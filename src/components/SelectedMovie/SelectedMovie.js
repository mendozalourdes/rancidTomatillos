import React from "react"
import "./SelectedMovie.css"

const SelectedMovie = (props) => {
    const { poster_path, backdrop_path, title, average_rating, release_date, budget, revenue, runtime, overview, tagline} = props

    return (
        <section className="selected-movie">
              <h3 className="movie-title">{title}</h3>
              <h4 className="">{tagline}</h4>
            <div className="sidebar-backdrop-container">
             <aside className="sidebar">
                <h3>Released: {release_date}</h3>
                <h3>Rating: {average_rating}</h3>
                <h3>Budget: {budget}</h3>
                <h3>Revenue: {revenue}</h3>
                <h3>Runtime: {runtime}</h3>
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
                </article>
                </div>
                <div>
                    <img className="movie-poster" src={poster_path}/>
                </div>
                
            </div>
            <button className="border" onClick={() => props.returnHome()}>Return Home</button>
        </section>
    )
}

export default SelectedMovie;