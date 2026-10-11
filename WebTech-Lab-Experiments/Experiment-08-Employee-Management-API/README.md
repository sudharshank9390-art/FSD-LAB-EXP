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
