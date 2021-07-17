export const cleanAllMovies = (movies) => {
    return movies.map(movie => {
        return {
            "id": movie.id, 
            "title": movie.title, 
            "poster_path": movie.poster_path, 
            "backdrop": movie.backdrop_path
        }
    })
}