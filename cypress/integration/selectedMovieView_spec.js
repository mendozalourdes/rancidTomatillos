// Describe(“User clicks on a movie to learn more details”) aka Selected Movie view
//import fixture here

describe("Selected Movie View", () => {
    beforeEach(() => {
        cy.loadMain()
        //how to connect to fixture??
        //cy.intercept('GET', '/movies', { fixture: 'movies.json' }).as("movies")
        //connect fixture, visit page, intercept fetch for all movies
        //click on button

        //visit site
        // cy.visit('http://localhost:3000');
        //intercept fetch for all movies here
        //then click on it to find

        //mock click on button
        // cy.get("#1")
        //     .click().should("include", "/1")

        //intercept click on movie detail to route to correct movie id file path
        // happy path 201
            // cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/1", {
            //     statusCode: 200,
            //     body: {
            //         movie: {
            //             id: 1, 
            //             title: "Fake Movie Title", 
            //             poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
            //             backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
            //             release_date: "2019-12-04", 
            //             overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", 
            //             average_rating: 6, 
            //             genres: ["Drama"], 
            //             budget:63000000, 
            //             revenue:100853753, 
            //             runtime:139, 
            //             tagline: "It's a movie!" 
            //         }
            //     }
            // })
            //mock network responses for errors?
    });
// cy.intercept({}) - sad path 400s
    // it("should alert the user of a 404 error", () => {
    //     cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2movies/1", {
    //         statusCode: 404,
    //         body: {
    //             id: 2,
    //             image: "https://ca.slack-edge.com/T029P2S9M-U37MJAV0T-007ccf2f5eb2-512",
    //             name: "Leta Keane"
    //         }
    //         })
    //     cy.get("h2")
    //         .contains("Something went wrong. Please try again later.")
    // })
// cy.intercept({}) - sad path 500s
    // it("should alert the user of a 500 error", () => {
    //     cy.get("#1")
    //         .click().should("include", "/1")
    //     cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v1/movies/1", {
    //             movie: {
    //                 id: 1, 
    //                 title: "Fake Movie Title", 
    //                 poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
    //                 backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
    //                 release_date: "2019-12-04", 
    //                 overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", 
    //                 average_rating: 6, 
    //                 genres: ["Drama"], 
    //                 budget:63000000, 
    //                 revenue:100853753, 
    //                 runtime:139, 
    //                 tagline: "It's a movie!" 
    //             }
    //         })
    //     cy.get("h2")
    //         .contains("Our servers are currently down. Please try again.")
    // })
// cy.intercept({}) - loading 
    // it("should tell user when the page is loading", () => {
    //     cy.get("#1")
    //         .click().should("include", "/1")
    //     cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v1/movies/1", {
    //             movie: {
    //                 id: 1, 
    //                 title: "Fake Movie Title", 
    //                 poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
    //                 backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
    //                 release_date: "2019-12-04", 
    //                 overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", 
    //                 average_rating: 6, 
    //                 genres: ["Drama"], 
    //                 budget:63000000, 
    //                 revenue:100853753, 
    //                 runtime:139, 
    //                 tagline: "It's a movie!" 
    //             }
    //         })
    //     cy.get("h2")
    //         .contains("Loading...")
    // })


    it("should show the user the page's title", () => {
        cy.get("h1")
            .contains("Rancid Tomatillos")
    })

    it("should show the user the movie they selected with movie details from the database", () => {
        //backdrop
        cy.get('.backdrop')
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
    
    it("should not show any other movie's data", () => {
        cy.get(".poster-container")
            .should("not.exist")
    })

    // it("should have a URL path", () => {
    //     cy.url().should("include", "/1")
    // })

    it("should have a return home button", () => {
        cy.get("button")
            .contains("Return Home")
            .click()
            .url().should("include", "/1")
    })
});


