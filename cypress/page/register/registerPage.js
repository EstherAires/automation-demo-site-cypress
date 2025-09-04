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
    cy.get(registerSelectors.adress).if("exist").then((field) => {
        if (adress) {
            const generatedAdredd = dataGenerator.generateAdress();
            cy.wrap(field).type(generatedAdredd);
        }
    }).else().then(() => {
        throw new Error("Adress field not found");
    })
  }
}
export default new register();
