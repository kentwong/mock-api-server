# Welcome to Mock API Server

The Mock API Server is used to quickly customise and mock the API responses to facilitate both happy path testing and negative testing. This project was created with:

- json-server
- Bootstrap

## Getting Started

In the `mock-api-server` project directory, you can run:

#### `npm install`

To install all the dependencies used in the project.

#### `npm start`

To run the server.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## Project Walkthrough

This is the homepage of Mock API Server where user can view all the endpoints and change the status of API responses.
![homepage](/demo/homepage.png)

Since we have changed the reponse's status to 400, we can test it out in Postman and we should be getting 400 Bad Request status as expected.
![sample-postman-response-400](/demo/sample-postman-response-400.png)

Once we change the status back to 201, the POST request should return 201 Created status as expected. Note that the id was not specified in the body of the POST request. It was added by json-server automatically.
![sample-postman-response-201](/demo/sample-postman-response-201.png)

The newly created record will be persisted in db.json as shown.
![data-persisted](/demo/data-persisted.png)

If we do a GET request, we can get all three records in db.json from the API response.
![sample-postman-response-200](/demo/sample-postman-response-200.png)
