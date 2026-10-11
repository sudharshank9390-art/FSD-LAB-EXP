# Experiment 8: Employee Management REST API

## 1. Problem statement
Implement a centralized employee information service using Express.js routing, middleware, and JSON-based request-response handling.

## 2. Aim and objectives
- Create, read, update, and delete employee records.
- Validate employee details.
- Use middleware for logging and validation.
- Handle missing or invalid requests with proper messages.

## 3. Technologies used
- Node.js
- Express.js
- JavaScript
- JSON

## 4. Concepts demonstrated
- REST endpoints
- Routing
- Middleware
- JSON parsing
- CRUD operations
- Validation
- Error handling

## 5. Software requirements
- Node.js and npm
- Postman or curl

## 6. Folder structure
```text
Experiment-08-Employee-Management-API/
├── package.json
├── server.js
├── routes/
│   └── employees.js
├── middleware/
│   ├── logger.js
│   └── validateEmployee.js
├── data/
│   └── employees.js
├── README.md
```

## 7. Installation instructions
```bash
npm install
npm start
```

## 8. Step-by-step execution
1. Start the API server.
2. Use curl or Postman to access endpoints.
3. Create, update, fetch, and delete employee records.
4. Verify validation errors and 404 responses.

## 9. Sample input and expected output
Request body:
```json
POST /api/employees
{
  "name": "Neha",
  "email": "neha@company.com",
  "department": "Marketing",
  "position": "Executive",
  "salary": 42000
}
```
Expected response: HTTP 201 and employee data.

## 10. How it works
The API keeps employee records in memory and exposes CRUD routes. Middleware logs every request and validates body content before processing.

## 11. Important endpoints
- GET `/api/employees`
- GET `/api/employees/:id`
- POST `/api/employees`
- PUT `/api/employees/:id`
- DELETE `/api/employees/:id`

## 12. Testing instructions
- Test missing fields.
- Try invalid email formats.
- Validate delete and update operations.

## 13. Common errors and solutions
- 400 invalid request: send all required fields.
- 404 missing employee: use an existing ID.
- Request body not parsed: ensure `express.json()` is used.

## 14. Conclusion
This API demonstrates a centralized employee record service using Express and middleware.

## 15. Viva questions and answers
1. What is an API endpoint?  
   An endpoint is a URL route used for API requests.
2. What is Express routing?  
   It maps HTTP requests to functions that process them.
3. What is middleware?  
   Middleware runs between the request and final handler.
4. What does express.json() do?  
   It parses incoming JSON request bodies.
5. What is request validation?  
   It checks if required fields match the expected format.
6. What is the difference between PUT and PATCH?  
   PUT replaces a resource, while PATCH partially updates it.
7. Why should errors be handled?  
   So the API returns clear and consistent responses.
8. How does an API identify an employee?  
   By using the employee ID in the request path.
9. What is a 404 response?  
   It means the requested resource was not found.
10. Why is logging useful in an API?  
   It helps monitor requests and debug issues efficiently.
