// const body = require("body")

const body = require("body");

// const BASE_URL = 'http://localhost:3000/'


// function createMovie(newMovie) {
//     return fetch(`${BASE_URL}/movies`, options)
//     .then(response => response.json())
// }


// const newMovie = {
//         "title": "Css",
//         "director": "Css",
//         "genres": ["Comdy"],
//         "rating": 8
// }

// const options = {
//     method: 'POST',
//     headers: {
//         'Content-type' : 'application/json'},
//     body : JSON.stringify(newMovie)
// }

// return fetch(`${BASE_URL}/movies`, options).then(response => response.json())

// createMovie(newMovie1)

// function deleteMovieById () {
//     const options = {
//         method: 'DELETE',
//     }
//     return fetch(`${BASE_URL}/movies/${id}`, options).then(response => response.json())
// }

// deleteMovieById(7)

function patchEl(elementId, updates) {
    const options = {
        method: "PATCH",
        Headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify(updates)
    }
    return fetch(`${BASE_URL}/movies/${elementId}`, options).then(response => response.json())
}

patchEl(8, {title: "Початок"});