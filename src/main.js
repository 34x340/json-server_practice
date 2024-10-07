function fetchMovieById() {
    return fetch(`http://localhost:3000/movis/${movieId}`)
    .then(response => response.json)
}

