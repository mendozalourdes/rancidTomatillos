// Describe(“User clicks on a movie to learn more details”) aka Selected Movie view
describe("Selected Movie View", () => {
    beforeEach(() => {
        //connect to fixture and fake an intercept
        cy.intercept('GET', '/movies', { fixture: 'movies.json' }).as("movies")

        cy.visit('http://localhost:3000');

        //intercept click on movie detail to route to correct movie id file path
            cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/1", {
                movie: {
                    id: 1, 
                    title: "Fake Movie Title", 
                    poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
                    backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
                    release_date: "2019-12-04", 
                    overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", 
                    average_rating: 6, 
                    genres: ["Drama"], 
                    budget:63000000, 
                    revenue:100853753, 
                    runtime:139, 
                    tagline: "It's a movie!" 
                }
            })
            cy.get("#1")
            .click().should("include", "/1")
    });

    it("should show the user the page's title", () => {
        
    })
});
// beforeEach() => cy.visit(URL HERE), cy.fixture(DATA AND CALLBACK FUNCTION, cy. Intercept base too)
// it(“should show the user the movie they selected with movie details from the database”)
// cy.intercept({}) - happy path 201
// cy.intercept({}) - sad path 400s
// cy.intercept({}) - sad path 500s
// cy.intercept({}) - loading 
// cy.get(h1) - Rancid Tomatillos
// contains() rancid Tomatillos
// cy.get(class for backdrop image)
// find(img)
// should() be visible
// cy.get(class for poster)
// find(img)
// should() be visible
// cy.get(element for movie title)
// contains() movie title
// cy.get(element for overview)
// contains() fragment of overview
// cy.get(element for genre)
// contains() genre name
// cy.get(element for tagline)
// contains() fragment of tagline
// cy.get(element for budget)
// contains() budget num
// cy.get(element for revenue)
// contains() revenue num
// cy.get(element for release date)
// contains() release date
// cy.get(element for rating)
// contains() rating num
// Sad path: it(“should not show any other movie data”)
// It (should have a URL path)
// It (should have a return home button)
// cy.get(“button”)
// cy.contains(“more info”)
// cy.click()
// For after Router: .url().should(“include”, “/movie name/id”)
