//const cypress = require("cypress")


describe('My First Test', function(){
it('Verify title-positive', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq','OrangeHRM')
})

it('Verify title-negative', function() {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq','OrangeHRM123')
})
})



