var faker = require('faker');

// console.log(faker.internet.email());
// console.log(faker.date.past());


function genAddress() {
    console.log(faker.address.streetAddress());
    console.log(faker.address.city());
    console.log(faker.address.state());
}

genAddress();