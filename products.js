var faker = require('faker');

var products = []
/////// Escriba aqui su codigo

for (let i = 0; i < 20; i++) {
  products.push({
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    img: faker.image.image(),
  })
  
}

///////////////////////////
module.exports = products;


