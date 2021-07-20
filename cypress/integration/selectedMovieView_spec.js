describe("Selected Movie View", () => {
  beforeEach(() => {
    cy.loadMain();
  });

  it("should show the user the page's title", () => {
    cy.fetchMovie();
    cy.visit("http://localhost:3000").get("#1").click();
    cy.get("h1").contains("Rancid Tomatillos");
  });

  it("should redirect the user home when title is clicked", () => {
    cy.fetchMovie();
    cy.visit("http://localhost:3000").get("#1").click();
    cy.get(".title-button").click();
    cy.url().should("include", "http://localhost:3000");
  });

  it("should show the user the movie they selected with movie details from the database", () => {
    cy.fetchMovie();
    cy.visit("http://localhost:3000").get("#1").click();
    cy.get(".backdrop")
    .should("be.visible");

    cy.get(".selected-movie-poster").should("be.visible");
    cy.get(".movie-title").contains("Fake Movie Title");
    cy.get(".overview").contains(
      "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!"
    );

    cy.get(".tagline").contains("It's a movie!");
    cy.get(".sidebar").contains("139");
    cy.get(".sidebar").contains("100,853,753");
    cy.get(".sidebar").contains("63,000,000");
    cy.get(".sidebar").contains("2019-12-04");
  });

  it("should not show any other movie's data", () => {
    cy.fetchMovie();
    cy.visit("http://localhost:3000").get("#1").click();
    cy.get(".poster-container").should("not.exist");
  });

  it("should have a URL path", () => {
    cy.fetchMovie();
    cy.visit("http://localhost:3000").get("#1").click();
    cy.url().should("include", "/1");
  });

  it("should have a return home button", () => {
    cy.fetchMovie();
    cy.visit("http://localhost:3000").get("#1").click();
    cy.get("button").contains("Return Home").click();
  });

  it("should be able to click on main title to return home ", () => {
    cy.fetchMovie();
    cy.visit("http://localhost:3000").get("#1").click();
    cy.get("button").contains("Rancid Tomatillos").click({ force: true });
  });

  it("should alert the user of a 404 error", () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2//movies/1",
      {
        statusCode: 404,
        body: {
          message: "Something went wrong. Please try again later.",
        }
      }
    );
    cy.get("#1").click();
    cy.get("h2").contains("Something went wrong. Please try again later.");
  });

  it("should alert the user of a 500 error", () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v1/movies/1",
      {
        statusCode: 500,
        body: {
          message: "Our servers are currently down. Please try again.",
        }
      }
    );
    cy.get("#1").click();
    cy.get("h2").contains("Our servers are currently down. Please try again.");
  });

});
