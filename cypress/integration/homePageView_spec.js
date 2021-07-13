
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
                        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2movies/', {
                            statusCode: 404, 
                            body: mockData
                        })
        
                        })
                    });
        it('Should have a "more info" button for each poster', () => {
            cy.get('button').should('have.length', 40).contains('More Info').click()
                // .contains()
            
            
            // .each((button, index, list) => {
            //     expect(button).to.have.length(40)
            // })
            
         });

         




    }); 

    // it('Should receive an error message when clicking submit button without filling out inputs', () => {
    //     cy.get('button').click()
    //     cy.contains('Please fill out both inputs')        

    // });


//     it(“posters should have a “more info” button”)
// cy.get(“button”)
// cy.contains(“more info”)
// cy.click()
// For after Router:      .url().should(“include”, “/movie name/id”)


    // it('should be able to fill out the email and password and click Submit, directing the user to a different page', () => {
    //     cy.intercept('POST', 'http://localhost:3001/api/v1/login', {
    //         statusCode: 201,
    //         body: {
    //           id: 2,
    //           image: "https://ca.slack-edge.com/T029P2S9M-U37MJAV0T-007ccf2f5eb2-512",
    //           name: "Leta Keane"
    //         }
    //       })
    //       .get('input[type="email"]')
    //         .type('leta@turing.io')
    //       .get('input[type="password"]')
    //         .type('keane20')
    //       
    //         .url().should('include', '/dashboard')
    //     //   cy.visit("http://localhost:3000/dashboard") This wouldn't work because it's like hard coding telling the test that you'll be going there and not actually testing that 
    //     //you are directed to the new page aaaaafter the above happens 
    //   });