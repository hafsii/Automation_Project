describe("Assertions demo",() =>{
 
    it("Implicit assertions",() =>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     
    // should and
    //  cy.url().should('include','orangehrmlive.com')   // should assertions 
    //  cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //  cy.url().should('contain','orangehrmlive')

   /* cy.url().should('include','orangehrmlive.com')
     .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //  .should('contain','orangehrmlive')*/   //Mutiple assertions in one URL


    //   cy.url().should('include','orangehrmlive.com')
    //  .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //  .and('contain','orangehrmlive')   // and assertions

    cy.url().should('include','orangehrmlive.com')
     .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     .and('not.contain','greenhrmlive')   // Negative assertion (not.)
    
// Validate the title (should => be supported keywords of eq,contain)
     cy.title().should('include','Orange') //title is the current page of your web  //orange is main part of page,should is multipe assertion
    .and('eq',"OrangeHRM")  ///and verify actual name
      .and('contain',"HRM")
                                    
//I want to check logo have or not.Icon on cypress is an inspect and also validate the logo element

cy.get('.orangehrm-login-branding > img').and('be.visible') //cy.get is an element and should verify the element is visible or not
     //element is exist or not with use of keyword use should
//.and('exist')          // using and keyword.


    })



})