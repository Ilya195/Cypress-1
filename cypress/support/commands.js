
Cypress.Commands.add("login", (email, password) => {
    cy.contains("Log in").click();
    if (email) {
      cy.get("#mail").type(email);
    }
    if (password) {
      cy.get("#pass").type(password);
    }
    cy.contains("Submit").click();
  });
  
  Cypress.Commands.add("addBook", (title, description, authors) => {
    cy.contains("Add new").click();
    cy.get("#title").type(title);
    cy.get("#description").type(description);
    cy.get("#authors").type(authors);
    cy.contains("Submit").click();
  });
  
  Cypress.Commands.add("addToFavorite", (title, description, authors) => {
    cy.contains("Add new").click();
    cy.get("#title").type(title);
    cy.get("#description").type(description);
    cy.get("#authors").type(authors);
    cy.get("#favorite").click();
    cy.contains("Submit").click();
  });
  
Cypress.Commands.add("deleteBook", (title) => {
  cy.contains(title);
  cy.contains("Delete from favorite").click();
});