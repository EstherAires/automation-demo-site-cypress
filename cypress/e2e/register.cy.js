import registerPage from "../page/register/registerPage";

describe("Register", () => {
  beforeEach(() => {
    cy.openRegistrationPage();
  });

  it("Register: form complete filling", () => {
    cy.fixture("register.json").then(
      ({
        firstName: { fillFirstName },
        lastName: { fillLastName },
        address: { fillAddress },
        phone: { fillPhone },
        email: { fillEmail },
        gender: { female },
        hobbies: {
          selectHobbie: { addHobbie, cricket, movies, hockye },
        },
      }) => {
        registerPage.fillFirstName(fillFirstName);
        registerPage.fillLastName(fillLastName);
        registerPage.fillAdress(fillAddress);
        registerPage.fillEmail(fillEmail);
        registerPage.fillPhone(fillPhone);
        registerPage.selectGender(female);
        registerPage.selectHobbie(addHobbie, cricket, movies, hockye);
      }
    );
  });
});
