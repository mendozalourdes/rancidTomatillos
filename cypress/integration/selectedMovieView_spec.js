// Describe(“User clicks on a movie to learn more details”) aka Selected Movie view
//import fixture here

describe("Selected Movie View", () => {
    beforeEach(() => {
        cy.loadMain()
    });
// cy.intercept({}) - sad path 400s
    it("should alert the user of a 404 error", () => {
        cy.get("#1")
            .click()
        cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2//movies/1", {
            statusCode: 404,
            body: {
                message: "Something went wrong. Please try again later."
            }
            })
        // cy.visit('http://localhost:3000')
        //     .get("#1")
        //     .click()
            // cy.get("#1")
            //   .click()
        cy.get("h2")
            .contains("Something went wrong. Please try again later.")
    })
// cy.intercept({}) - sad path 500s
    it("should alert the user of a 500 error", () => {
        cy.get("#1")
            .click()
        cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v1/movies/1", {
            statusCode: 500
            // body: {
            //     message: "Our servers are currently down. Please try again."
            // }
            })
        // cy.visit('http://localhost:3000')
        //     .get("#1")
        //     .click()
        cy.get("h2")
            .contains("Our servers are currently down. Please try again.")
    })
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

    //Happy path test for 201 fetch call

    it("should show the user the page's title", () => {
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
                    "revenue": 100853753, 
                    "runtime": 139, 
                    "tagline": "It's a movie!" 
                }}
        });
    
        cy.visit('http://localhost:3000')
            .get("#1")
            .click()
        cy.get("h1")
            .contains("Rancid Tomatillos")
    })

    it("should show the user the movie they selected with movie details from the database", () => {
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
                    "revenue": 100853753, 
                    "runtime": 139, 
                    "tagline": "It's a movie!" 
                }}
        });
    
        cy.visit('http://localhost:3000')
            .get("#1")
            .click()
        //backdrop
        cy.get('.backdrop')
            // .find("img")
            .should("be.visible")

        //poster
        cy.get(".selected-movie-poster")
            .should("be.visible")

        //movie title
        cy.get(".movie-title")
            .contains("Fake Movie Title")

        //overview
        cy.get(".overview")
            .contains("Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!")
        
        //tagline
        cy.get(".tagline")
            .contains("It's a movie!")

        //runtime
        cy.get(".sidebar")
            .contains("139")

        //revenue
        cy.get(".sidebar")
            .contains("100,853,753")

        //budget
        cy.get(".sidebar")
            .contains("63,000,000")

        //release date
        cy.get(".sidebar")
            .contains("2019-12-04")
    })
    
    it("should not show any other movie's data", () => {
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
                    "revenue": 100853753, 
                    "runtime": 139, 
                    "tagline": "It's a movie!" 
                }}
        });
    
        cy.visit('http://localhost:3000')
            .get("#1")
            .click()
        cy.get(".poster-container")
            .should("not.exist")
    })

    it("should have a URL path", () => {
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
                    "revenue": 100853753, 
                    "runtime": 139, 
                    "tagline": "It's a movie!" 
                }}
        });
    
        cy.visit('http://localhost:3000')
            .get("#1")
            .click()
        cy.url().should("include", "/1")
    })

    it("should have a return home button", () => {
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
                    "revenue": 100853753, 
                    "runtime": 139, 
                    "tagline": "It's a movie!" 
                }}
        });
    
        cy.visit('http://localhost:3000')
            .get("#1")
            .click()
        cy.get("button")
            .contains("Return Home")
            .click()
    })

    it("should be able to return home from ", () => {
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
            .contains("Return Home")
            .click()
    })
 
});


