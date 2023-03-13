Cypress.Commands.add('login', (email, password) => { 
    cy.visit("/");    
    cy.contains('Log in').click();    
    cy.get("#mail").type(email);    
    cy.get("#pass").type(password);    
    cy.contains("Submit").click();    
})