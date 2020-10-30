
describe('Yelpcamp first testsuite', () => {
    it('Verify URL and title', function() {
        //cy.visit()

        //cy.url("https://zk-yelpcamp.herokuapp.com").should('contain', 'yelpcamp')

        cy.title().should('eq', 'YelpCamp')
    })

    it('Verify user can login', () => {
        cy.get(':nth-child(1) > .nav-link').click()
        //enter username
        cy.get(':nth-child(1) > .form-control')
            .type('zak')
            .should('have.value', 'zak')
        cy.get(':nth-child(2) > .form-control')
            .type('pass')
            .should('have.value', 'pass')
        cy.get('.btn').click()

    })

    it('Verify user can add new campground', function() {
        
    })


})

