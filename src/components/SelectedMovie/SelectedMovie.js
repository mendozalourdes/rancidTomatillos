import React from "react"
import "./SelectedMovie.css"

const SelectedMovie = (props) => {
    const { id, poster, backdrop, title, rating, releaseDate} = props
    return (
        <section className="selected-movie">
            <div className="sidebar-backdrop-container">
             <aside className="sidebar">
                <h3>{releaseDate}</h3>
                <h3>{rating}</h3>
                {/* <h3>{budget}</h3>
                <h3>{revenue}</h3>
                <h3>{runtime}</h3> */}
            </aside>
            <div className="backdrop-container">
                    <img src={backdrop} alt={title} className="backdrop"/>
            </div>
            </div>
            <div className="poster-container">
                <div className="movie-info">
                    <h3>{title}</h3>
                <article className="overview">
                    <h3>this is a movie about blah</h3>
                {/* <h3>{overview}</h3> */}
                </article>
                </div>
                <div>
                    <img className="movie-poster" src={poster}/>
                </div>
                
            </div>
            <aside className="sidebar">
                <h3>{releaseDate}</h3>
                <h3>{rating}</h3>
                {/* <h3>{budget}</h3>
                <h3>{revenue}</h3>
                <h3>{runtime}</h3> */}
            </aside>
            {/* <article className="genres">
                <h3>{genres}</h3>
            </article> */}
            <section className="title-tagline">
                <h3>{title}</h3>
                {/* <h3>{tagline}</h3> */}
            </section>
            <article className="overview">
                <h3>this is a movie about blah</h3>
                {/* <h3>{overview}</h3> */}
            </article>
            <button onClick={() => props.returnHome()}>Return Home</button>
        </section>
    )
}

export default SelectedMovie;