const body = require("body")

const BASE_URL = 'http://localhost:3000/'


function createMovie(newMovie) {
    return fetch(`${BASE_URL}/movies`, options)
    .then(response => response.json())
}


const newMovie = {
        "title": "Css",
        "director": "Css",
        "genres": ["Comdy"],
        "rating": 8
}

const options = {
    method: 'POST',
    headers: {
        'Content-type' : 'application/json'},
    body : JSON.stringify(newMovie)
}

createMovie(newMovie1)