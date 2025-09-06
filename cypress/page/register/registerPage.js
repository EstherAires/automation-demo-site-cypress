import { registerSelectors } from "./register-selectors";
import dataGenerator from "../../utils/dataGenerator";

class register {
  fillFirstName(firstName) {
    cy.get(registerSelectors.firstName)
      .if("exist")
      .then((field) => {
        if (firstName) {
          const generatedFirstName = dataGenerator.generateFirstName();
          cy.wrap(field).type(generatedFirstName);
        }
      })
      .else()
      .then(() => {
        throw new Error("First Name field not found");
      });
  }

  fillLastName(lastName) {
    cy.get(registerSelectors.lastName)
      .if("exist")
      .then((field) => {
        if (lastName) {
          const generatedLastName = dataGenerator.generateLastName();
          cy.wrap(field).type(generatedLastName);
        }
      })
      .else()
      .then(() => {
        throw new Error("Last Name field not found");
      });
  }

  fillAdress(adress) {
    cy.get(registerSelectors.address)
      .if("exist")
      .then((field) => {
        if (adress) {
          const generatedAddress = dataGenerator.generateAddress();
          cy.wrap(field).type(generatedAddress);
        }
      })
      .else()
      .then(() => {
        throw new Error("Adress field not found");
      });
  }

  fillEmail(email) {
    cy.get(registerSelectors.emailAdress)
      .if("exist")
      .then((field) => {
        if (email) {
          const generatedEmail = dataGenerator.generateEmailAddress();
          cy.wrap(field).type(generatedEmail);
        }
      })
      .else()
      .then(() => {
        throw new Error("Email address field not found");
      });
  }

  fillPhone(phone) {
    cy.get(registerSelectors.phone)
      .if("exist")
      .then((field) => {
        if (phone) {
          const generatedPhone = dataGenerator.generatePhone();
          cy.wrap(field).type(generatedPhone);
        }
      })
      .else()
      .then(() => {
        throw new Error("Email address field not found");
      });
  }

  selectGender(gender) {
    switch (gender) {
      case "male":
        cy.get(registerSelectors.maleGender).check().should("be.checked");
        break;

      case "female":
        cy.get(registerSelectors.femaleGender).check().should("be.checked");
        break;

      default:
        cy.log("No gender informed, skipping selection");
        break;
    }
  }

  selectHobbie(hobbie, cricket = false, movies = false, hockey = false) {
    if (hobbie) {
      if (cricket) {
        cy.get(registerSelectors.cricketHobbie).check().should("be.checked");
      }
      if (movies) {
        cy.get(registerSelectors.moviestHobbie).check().should("be.checked");
      }
      if (hockey) {
        cy.get(registerSelectors.hockeyHobbie).check().should("be.checked");
      }
    } else {
      cy.log("No hobbie informed, skipping selection");
    }
  }
}
export default new register();
