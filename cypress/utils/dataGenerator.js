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
  generateAdress() {
    const streetAddress = faker.location.streetAddress()
    const city = faker.location.city()
    const state = faker.location.state()
    const country = faker.location.country()
    return (`${streetAddress}\n${city}, ${state}\n${country}`);
  }

  generateEmailAdress() {
    const emailAdress = faker.internet.email()
    return emailAdress;
  }

  generatePhone() {
    const phone = faker.phone.number("(##) #####-####");
    return phone;
  }
}

export default new dataGenerator();
