describe('CSSLocator',()=>{

it("csslocator",() =>{
cy.visit("http://www.automationpractice.pl/index.php")  // visit the website 

cy.get("#search_query_top").type("T-Shirts")  //id  tag is optional (locator defined)

cy.get("[name='submit_search']").click()    // click the button 

cy.get(".lighter").contains("T-Shirts")  //Assertions (match or verify true or false value)


})

})