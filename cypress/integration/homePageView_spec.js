describe("User visits the homepage tests", () => {
  beforeEach(() => {
    cy.loadMain()
  });

  it("Should show the user a page title", () => {
    cy.contains("h1", "Rancid Tomatillos");
  });

  it("Should reload the page when title is clicked", () => {
    cy.get(".title-button").click();
    cy.url().should("include", "http://localhost:3000");
  });

  it("Should show the user a random movie image", () => {
    cy.get("img").should("have.class", "random-movie-backdrop");
  });

  it("Should have a more info button on random movie image", () => {
    cy.get(".random-info-button").contains("More Info").click();
  })

  it("Should redirect the user once more info button is clicked", () => {
    cy.get(".random-info-button").contains("More Info").click();
    cy.url().should("include", "movies/");
  })

  it("Should show the user a search bar", () => {
    cy.get("input").should("have.class", "search-box");
  });

  it('Should have a "more info" button for each poster', () => {
    cy.get(".info-button").should("have.length", 41).contains("More Info").click();
  });

  it('Should redirect user to selected movie view when more info is clicked', () => {
    cy.get("#1").click();
    cy.url().should("include", "movies/");
  });

  it("Should show the user a selection of movies from a database upon page load", () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2", {
      statusCode: 201,
      delay: 100,
    });
    cy.visit("http://localhost:3000");
    cy.get("img").should("have.class", "movie-poster");
    cy.get(".movie-poster").should("have.length", 41);
  });

  it("Should show the user an error message if a 400 error is encountered", () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api//v2/movies/",
      {
        statusCode: 404,
        body: {
          message: "Something went wrong. Please try again later.",
        }
      }
    );
    cy.get("h2").contains("Something went wrong. Please try again later.");
  });

  it("Should show the user an error message if a 500 error is encountered", () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v1/movies/",
      {
        statusCode: 500,
        body: {
          message: "Our servers are currently down. Please try again.",
        }
      }
    );
    cy.get("h2").contains("Our servers are currently down. Please try again.");
  });
});
