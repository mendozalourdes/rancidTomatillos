
describe('User visits the homepage tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
      });

    it('Should show the user a page title and directive text', () => {
      cy.contains('h1', 'Rancid Tomatillos')
    });

    it('Should show the user a selection of movies from a database upon page load', () => {
        cy.fixture('movies.json')
            .then(mockData => {
                cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
                    statusCode: 201, 
                    body: mockData
                })
                })
            });

    it('Should show the user an error message if a 400 error is encountered', () => {
        cy.fixture('movies.json')
            .then(mockData => {
                cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
                    statusCode: 404, 
                    body: {
                        message: 'Something went wrong. Please try again later.'
                    }
                })

                })
            });

    it('Should show the user an error message if a 500 error is encountered', () => {
        cy.fixture('movies.json')
            .then(mockData => {
            cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
                statusCode: 501, 
                body: {
                    message: "Our servers are currently down. Please try again."
                    }
                })

                })
            });

        it('Should have a "more info" button for each poster', () => {
            cy.get('button').should('have.length', 40).contains('More Info').click()
         });

         




    }); 
