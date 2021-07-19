Cypress.Commands.add('loadMain', () => {
    cy.fixture('movies.json').as('movies')

    const baseURL = "https://rancid-tomatillos.herokuapp.com/api/v2"
    
    cy.intercept(`${baseURL}/movies`, {
        fixture: "movies"
    });

    cy.visit('http://localhost:3000')

});