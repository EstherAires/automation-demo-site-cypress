import { faker } from "@faker-js/faker";

class dataGenerator {
  generateFirstName() {
    const firstName = faker.person.firstName();
    return firstName;
  }

  generateLastName() {
    const lastName = faker.person.lastName();
    return lastName;
  }
  generateAddress() {
    const streetAddress = faker.location.streetAddress();
    const city = faker.location.city();
    const state = faker.location.state();
    const country = faker.location.country();
    return `${streetAddress}\n${city}, ${state}\n${country}`;
  }

  generateEmailAddress() {
    const emailAddress = faker.internet.email();
    return emailAddress;
  }

  generatePhone() {
    const areaCode = faker.number.int({ min: 10, max: 99 });
    const firstPart = faker.number.int({ min: 10000, max: 99999 });
    const secondPart = faker.number.int({ min: 1000, max: 9999 });
    return `(${areaCode}) ${firstPart}-${secondPart}`;
  }
}

export default new dataGenerator();
