const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();

class User {
  constructor() {
    this.id = faker.datatype.uuid();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phone = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this.id = faker.datatype.uuid();
    this.name = faker.company.companyName();
    this.address = {
      street: faker.address.streetName(),
      city: faker.address.cityName(),
      state: faker.address.stateAbbr(),
      postal: faker.address.zipCodeByState(this.state),
      country: faker.address.country(),
    };
  }
}

app.get("/api/users/new", (req, res) => {
  res.send(new User());
});

app.get("/api/companies/new", (req, res) => {
  res.send(new Company());
});

app.get("/api/company", (req, res) => {
  res.send({
    user: new User(),
    company: new Company(),
  });
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
