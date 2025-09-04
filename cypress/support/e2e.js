import "./commands";
import "cypress-if";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
