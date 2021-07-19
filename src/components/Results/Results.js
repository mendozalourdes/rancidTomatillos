import React from "react";
import MoviesRepo from "../MoviesRepo/MoviesRepo";

const Results = (props) => {
  return (
    <>
      {!props.filteredMovies.length && (
        <h2>
          Sorry, we couldn't find any movies to match your search. Please try
          again!
        </h2>
      )}
      <MoviesRepo
        movies={props.filteredMovies}
        cleanInputs={props.cleanInputs}
      />
    </>
  );
};

export default Results;
