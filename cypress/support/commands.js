// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... }


Cypress.Commands.add('loadMain', () => {
    cy.fixture('movies.json').as('movies')

    const baseURL = "https://rancid-tomatillos.herokuapp.com/api/v2"

    cy.visit('http://localhost:3000')
    
    cy.intercept(`${baseURL}/movies`, {
        fixture: "movies"
    });

    // cy.visit('http://localhost:3000')
    //     .get("#1")
    //     .click()

    // cy.intercept("GET", `${baseURL}/movies/1`, {
    //     statusCode: 201,
    //     body: { movie: {
    //             "id": 1,  
    //             "title": "Fake Movie Title", 
    //             "poster_path": "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
    //             "backdrop_path": "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
    //             "release_date": "2019-12-04", "overview": "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", 
    //             "average_rating": 6, 
    //             "genres": ["Drama"], 
    //             "budget": 63000000, 
    //             "revenue": 100853753, 
    //             "runtime": 139, 
    //             "tagline": "It's a movie!" 
    //         }}
    // });

    // cy.visit('http://localhost:3000')
    //     .get("#1")
    //     .click()
        // .should("include", "/1")

});