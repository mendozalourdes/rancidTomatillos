
describe('User visits the search page view', () => {
    beforeEach(() => {
      cy.fixture('movies').then((movies) => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { body: movies }).as('movies')
      })
      cy.visit('http://localhost:3000/search')
    })

it('Should show the user a page title and directive text', () => {
cy.contains('h1', 'Rancid Tomatillos')
});

it('should have a search input and button on the page', () => {
cy.get('form').find('input')
  .get('form').find('button')
})

it('should be able to search for a movie given an input', () => {
    cy.get('input').type('Bill')
      .get('.movie-container').children().should('have.length', 1)
      .get('img').should('have.class', 'movie-poster') 
  })

  it('should show no results if input does not match film selection', () => {
    cy.get('input').type('The Simpsons')
      .get('.movie-container').children().should('have.length', 0)
    
  })

  it('should show an error message if the input does not match film selection', () => {
    cy.get('input').type('The Simpsons')
      .get('.movie-container').children().should('have.length', 0)
    cy.get('h1')
        .contains("Sorry, we couldn't find any movies to match your search. Please try again!")
    
  })



    }); 

