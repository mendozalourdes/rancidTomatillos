import React from "react" 
import MoviesRepo from "../MoviesRepo/MoviesRepo"

const Results = props => {

    return (
        <div>
            <MoviesRepo movies={props.filteredMovies}/>
        </div>
    )
}

export default Results