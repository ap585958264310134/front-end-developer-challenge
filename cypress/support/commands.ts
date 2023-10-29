/// <reference types="cypress" />
Cypress.Commands.add('clickOnIcon', (id: string) => {
  cy.get(`#${ id }`)
    .click();
});

Cypress.Commands.add('rightClickOnIcon', (id: string) => {
  cy.get(`#${id}`)
    .rightclick();
});

Cypress.Commands.add('checkCounter', (text: string) => {
  cy.get('[data-cy="counter"]')
    .should('have.text', text);
});

declare global {
  namespace Cypress {
    interface Chainable {
      clickOnIcon(id: string): Chainable<void>;
      rightClickOnIcon(id: string): Chainable<void>;
      checkCounter(text: string): Chainable<void>;
    }
  }
}

export {};