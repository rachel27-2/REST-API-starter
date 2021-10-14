# REST-API-starter
REST API starter for LBG project using Node.js and Express.js


First, install the dependencies with this command:

$ npm install

To run the application, use the command:

$ npm start

To stop running, use ctrl+C.

To run all tests, use the following command:

$ npm test



REST API Commands:

CREATE 

To create a new product, use the following command:

$ curl -s -X POST http://localhost:8080/product/create -H 'Content-type:application/json' -d '{"name":"<your-product-name>", "description":"<your-description>", "price":<price>}'

READ

To perform a get request on all the products in the database, use the following command:

$ curl -s -X GET http://localhost:8080/product/read

  edit to test pipeline
To fetch a single product using its ID, use the following command:

$ curl -s -X GET http://localhost:8080/product/read/<id>

UPDATE

To perform a put request (edit a single product by ID), use the following command:

$ curl -s -X PUT http://localhost:8080/product/update/<id> -H 'Content-type:application/json'  -d '{"name":"<updated-name>", "description":"<updated-description>", "price":<updated-price>}'

DELETE

To delete a product from the database using its ID, use the following command:

$ curl -s -X DELETE http://localhost:8080/product/delete/<id>
