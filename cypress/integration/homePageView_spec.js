describe("User visits the homepage tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should show the user a page title and directive text", () => {
    cy.contains("h1", "Rancid Tomatillos");
  });

  it("Should show the user a random movie image", () => {
    cy.get("img").should("have.class", "random-movie-backdrop");
  });

  it("Should show the user a search bar", () => {
    cy.get("input").should("have.class", "search-box");
  });

  it('Should have a "more info" button for each poster', () => {
    cy.wait(2000);
    cy.get("button").should("have.length", 43).contains("More Info").click();
  });

  it("Should show the user a selection of movies from a database upon page load", () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2", {
      statusCode: 201,
      delay: 100,
    });
    cy.visit("http://localhost:3000");
    cy.get("img").should("have.class", "movie-poster");
  });

  it("Should show the user an error message if a 400 error is encountered", () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api//v2/movies/",
      {
        statusCode: 404,
        body: {
          message: "Something went wrong. Please try again later.",
        },
      }
    );
    cy.visit("http://localhost:3000");
    cy.get("h2").contains("Something went wrong. Please try again later.");
  });
});
