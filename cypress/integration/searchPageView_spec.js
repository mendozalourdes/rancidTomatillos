
describe('User visits the search page view', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
        });

        
    it('Should show the user a page title and directive text', () => {
        cy.contains('h1', 'Rancid Tomatillos')
    });


    it("should be able to click on main title to return home ", () => {
        cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/1", {
            statusCode: 201,
            body: { movie: {
                    "id": 1,  
                    "title": "Fake Movie Title", 
                    "poster_path": "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
                    "backdrop_path": "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
                    "release_date": "2019-12-04", "overview": "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", 
                    "average_rating": 6, 
                    "genres": ["Drama"], 
                    "budget": 63000000, 
                    "revenue": "100,853,753",
                    "runtime": 139, 
                    "tagline": "It's a movie!" 
                }}
        });
    
        cy.visit('http://localhost:3000')
            .get("#1")
            .click()
        cy.get("button")
            .contains("Rancid Tomatillos")
            .click({force: true})
    })

    it('Should show the user a search bar', () => {
      cy.get('input').should('have.class', 'search-box')
    });

    it('Should show the user a selection of movies from a database upon page load', () => {
                cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2', {
                    statusCode: 201, 
                    delay: 100,
                })
                cy.visit('http://localhost:3000')
                cy.get('img').should('have.class', 'movie-poster') 
            });

    }); 

