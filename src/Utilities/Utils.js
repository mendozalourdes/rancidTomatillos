export const cleanAllMovies = (movies) => {
  return movies.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,
    };
  });
};

export const modifyMovieData = (movie) => {
  return {
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
    backdrop_path: movie.backdrop_path,
    release_date: movie.release_date,
    overview: movie.overview,
    genres: movie.genres.join(" • "),
    average_rating: Math.floor(movie.average_rating),
    tagline: movie.tagline,
    runtime: movie.runtime,
    revenue: movie.revenue.toLocaleString("en-US"),
    budget: movie.budget.toLocaleString("en-US"),
  };
};
