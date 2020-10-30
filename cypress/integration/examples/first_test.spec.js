const { describe } = require("mocha");

describe('MyTestSuite', function() {
    it('Verify title of the page', function() {
        cy.visit('https://zk-yelpcamp.herokuapp.com/')
        cy.title().should('eq', 'YelpCamp')
    })
})