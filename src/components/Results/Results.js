import React from "react" 
import MoviesRepo from "../MoviesRepo/MoviesRepo"

const Results = props => {

    return (
        <>
            <MoviesRepo movies={props.filteredMovies}/>
        </>
    )
}

export default Results