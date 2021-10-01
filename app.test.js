const request = require('supertest');
const app = require('./app').app;
const build = require('./app').productBuilder;

// TEST THE REST API ENDPOINT FOR GET
describe('GET requests', () => {
    
    test('GET product/read endpoint, expect 200', async () => {
        const res = await request(app).get('/product/read');
        expect(res.statusCode).toBe(200);
    });

    test('GET bad endpoint, expect 404', async () => {
      const res = await request(app).get('/badEndPoint');
      expect(res.statusCode).toBe(404);
    });

});

// TEST THE REST API ENDPOINT FOR PUT
describe('CREATE request', () => {
    
    test('CREATE product test', async () => {
	const res = await request(app).post('/product/create');
    expect(res.statusCode).toBe(201);
    });

});

// UNIT TEST THE PRODUCT BUILDER
describe('Unit Tests', () => {

    test('product object builder', () => {
        const productName = "productName";
        const productDescription = "productDescription";
        const productPrice = "productPrice";
        const newProduct = build(productName, productDescription, productPrice);
        expect(newProduct.name).toBe("productName");
        expect(newProduct.description).toBe("productDescription");
        expect(newProduct.price).toBe("productPrice");
    });

});
