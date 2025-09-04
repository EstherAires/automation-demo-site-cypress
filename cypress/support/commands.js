import './commands'

Cypress.Commands.add('openRegistrationPage', () => {
  const url = Cypress.env('REGISTRATION_URL') || 'https://demo.automationtesting.in/Register.html';
  cy.visit(url);
});