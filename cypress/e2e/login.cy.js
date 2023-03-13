

describe('Test booksApp on localhost:3000, Tests from lection ', () => {
    beforeEach( () => {
      cy.viewport(Cypress.env('viewportWidth'),Cypress.env('viewportHeight'));
    });
    it('Should open the main page', () => {
      cy.visit("/");
      cy.contains("Books list");
    })
  
    it("Should successfully login", () => {
      cy.login("test@test.com", "test"); 
      cy.contains("Добро пожаловать test@test.com").should("be.visible");
    })
  
    it("Should not login with empty login", () => {
      cy.login(" ", "test"); 
      cy.get('#mail').then($el => $el[0].checkValidity()).should('be.false')
    })
  
    it("Should not login with empty password", () => { //Here an error is occur  when use command, cypress can`t type empty string 
      cy.visit("/");    
      cy.contains('Log in').click();    
      cy.get("#mail").type("test@test.com");        
      cy.contains("Submit").click(); 
      cy.get('#pass').then($el => $el[0].checkValidity()).should('be.false')})
  })
  
  describe('Test three functions favorites', () => {
    beforeEach( () => {
      cy.viewport(Cypress.env('viewportWidth'),Cypress.env('viewportHeight'));
      cy.login("test@test.com", "test");
    });
    it('Should add book to favorites', () => {
      let bookTilte ="I, me and myself"; 
      cy.contains('Add to favorite').click();
      cy.contains('Favorites').click();
      cy.contains(bookTilte).should('exist');
    })
  
    it('Should remove book from favorite', () => {
      cy.contains('Delete from favorite').click();
      cy.contains('Favorites').click();
      cy.get('.card-body > card-title h5').should('not.exist');
    })
  
    it('Should have download book button from favorites', () => {
      cy.contains('Add to favorite').click();
      cy.contains('Favorites').click();
      cy.get('.mt-3').click();
      cy.contains('Dowload book').should('exist');
    })
  
    it('IT`S NOT A TEST, IT`S FOR CLEAR STATE FOR RESTART TEST', () => {
      cy.contains('Delete from favorite').click();
    });
  })