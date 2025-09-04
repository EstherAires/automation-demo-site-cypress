import registerPage from "../page/register/registerPage";

describe("Register", () => {
  beforeEach(() => {
    cy.openRegistrationPage();
  });

  it("Registro: preenchimento completo do formulário", () => {
    cy.fixture("register.json").then(
      ({
        firstName: { fillFirstName },
        lastName: { fillLastName },
        address: { fillAddress },
      }) => {
        registerPage.fillFirstName(fillFirstName);
        registerPage.fillLastName(fillLastName);
        registerPage.fillAdress(fillAddress);
      }
    );
  });
});
