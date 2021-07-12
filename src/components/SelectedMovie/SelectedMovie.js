import React from "react"
import "./SelectedMovie.css"

const SelectedMovie = (props) => {
    const { poster, backdrop, title, rating, releaseDate, budget, revenue, runtime, overview, tagline} = props
    return (
        <section className="selected-movie">
              <h3 className="movie-title">{title}</h3>
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
            <div className="poster-container">
                <div className="movie-info">
                    {/* <h3 className="movie-title">{title}</h3> */}
                <article className="overview">
                    <h3>{tagline}</h3>
                    
                    <h3>{overview}</h3>
                    <section className="title-tagline">
            </section>
                </article>
                </div>
                <div>
                    <img className="movie-poster" src={poster}/>
                </div>
                
            </div>
            {/* <article className="genres">
                <h3>{genres}</h3>
            </article> */}
            {/* <section className="title-tagline">
                <h3>Tagline: {tagline}</h3>
            </section> */}
            <button className="border" onClick={() => props.returnHome()}>Return Home</button>
        </section>
    )
}

export default SelectedMovie;