/// <reference types="Cypress" />

context("Logging in to OLB Stage", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture(REPLACE_FIXTURE_FILE_WITH_YOURS_CHRIS).as("users");
  });

  // https://on.cypress.io/interacting-with-elements

  it(".type() - type into a DOM element", () => {
    // alias the users fixtures
    cy.get("@users").then(users => {
      const user = users;

      // https://on.cypress.io/type
      cy.get("#son_lrd_accessIdInput")
        .type(user.username)
        

      cy.get("#son_lrd_passwordInput")
        .type(user.password)
    

      cy.get("#son_lrd_submitButton").click();
      cy.wait(2000);
      cy.get("#tfr_qt_sourceAccountsInput").select("S01");

      cy.get("#tfr_qt_targetAccountsInput").select("2");
      cy.get('#tfr_qt_amountInput').type('.03')
      cy.get('#tfr_qt_commentInput').type('testing')
      cy.get('#tfr_qt_submitButton').click()
      cy.get('#tfr_atcrd_titleHeader').should('be.visible')
      cy.get('#tfr_atcrd_submitButton').click()
      cy.get('#tfr_atfrd_messageSuccess').should('be.visible')
      cy.get('#tfr_atfrd_closeButton').click()
    });
  });
});
