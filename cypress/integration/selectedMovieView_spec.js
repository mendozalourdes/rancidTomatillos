// Describe(“User clicks on a movie to learn more details”) aka Selected Movie view
describe("Selected Movie View", () => {
    beforeEach(() => {
        //connect to fixture and fake an intercept
        //cy.intercept('GET', '/movies', { fixture: 'movies.json' }).as("movies")

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
            //mock click on button
            cy.get("#1")
                .click().should("include", "/1")
    });
// cy.intercept({}) - happy path 201
// cy.intercept({}) - sad path 400s
// cy.intercept({}) - sad path 500s
// cy.intercept({}) - loading 
    it("should show the user the page's title", () => {
        cy.get("h1")
            .contains("Rancid Tomatillos")
    })

    it("should show the user the movie they selected with movie details from the database", () => {
        //backdrop
        cy.get(".backdrop-container")
            .find("img")
            .should("be.visible")

        //poster
        cy.get(".movie-poster")
            .find("img")
            .should("be.visible")

        //movie title
        cy.get(".movie-title")
            .contains("Fake Movie Title")

        //overview
        cy.get(".overview")
            .contains("Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!")
        
        //tagline
        cy.get(".title-tagline")
            .contains("It's a movie!")

        //runtime
        cy.get(".sidebar")
            .contains("139")

        //revenue
        cy.get(".sidebar")
            .contains("100853753")

        //budget
        cy.get(".sidebar")
            .contains("63000000")

        //release date
        cy.get(".sidebar")
            .contains("2019-12-04")
    })
});

it("should not show any other movie's data", () => {
    cy.get(".poster-container")
        .should("not.exist")
})

// Sad path: it(“should not show any other movie data”)
// It (should have a URL path)
// It (should have a return home button)
// cy.get(“button”)
// cy.contains(“more info”)
// cy.click()
// For after Router: .url().should(“include”, “/movie name/id”)
