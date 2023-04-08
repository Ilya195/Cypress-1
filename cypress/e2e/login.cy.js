describe('Test booksApp on localhost:3000, Tests from lection ', () => {
  beforeEach( () => {
    cy.visit("http://localhost:3000");
  });

  it('Should open the main page', () => {
    cy.contains("Books list");
  })

  it("Should successfully login", () => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123"); 
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  })

  it("Should not login with empty login", () => {
    cy.login(" ", "pass"); 
    cy.get('#mail').then($el => $el[0].checkValidity()).should('be.false')
  })

  it("Should not login with empty password", () => { 
    cy.visit("/");    
    cy.contains('Log in').click();    
    cy.get("#mail").type("bropet@mail.ru");        
    cy.contains("Submit").click(); 
    cy.get('#pass').then($el => $el[0].checkValidity()).should('be.false')})
})
  
describe('Test three functions favorites', () => {
  beforeEach( () => {
    cy.visit("http://localhost:3000");
    cy.login("bropet@mail.ru", "123");
      });

  it('Should add book to favorites', () => {
    cy.addToFavorite(
     "Дракула",
     "Роман",
     "Брем Стокер"
  );
    cy.contains('Favorites').click();
    cy.contains("Дракула").should("be.visible");
  })
    
  it('Should remove book from favorite', () => {
    cy.contains('Delete from favorite').click();
    cy.contains('Favorites').click();
    cy.get('.card-body > card-title h5').should('not.exist');
  })
    
  it('Should have download book button from favorites', () => {
    cy.addToFavorite(
      "Властелин колец",
      "Роман-эпопея",
      "Дж. Р. Р. Толкин"
  );       
    cy.contains('Favorites').click();
    cy.contains('Властелин колец').click();
    cy.contains('Dowload book').should('exist');
  })
    
  it('restart test', () => {
    cy.contains('Delete from favorite').click();
  });
  });