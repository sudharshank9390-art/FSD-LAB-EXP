# Experiment 7: Library Management REST API

## 1. Problem statement
Develop a RESTful backend service for a public library to manage books, members, and borrowing records using Node.js and Express.js.

## 2. Aim and objectives
- Manage books and members through REST endpoints.
- Track borrowing and returning books.
- Validate requests and return HTTP status codes.
- Practice middleware and Express routing.

## 3. Technologies used
- Node.js
- Express.js
- JavaScript
- JSON

## 4. Concepts demonstrated
- REST architecture
- Middleware
- Routing
- JSON request/response
- Input validation
- Error handling

## 5. Software requirements
- Node.js
- npm
- Postman or curl

## 6. Folder structure
```text
Experiment-07-Library-Management-API/
├── package.json
├── server.js
├── routes/
│   ├── books.js
│   ├── members.js
│   └── transactions.js
├── middleware/
│   ├── logger.js
│   └── validation.js
├── data/
│   └── store.js
├── README.md
```

## 7. Installation instructions
```bash
npm install
npm start
```

## 8. Step-by-step execution
1. Start the server.
2. Use Postman or curl to call the endpoints.
3. Test book creation, borrowing, and returns.
4. Validate error conditions.

## 9. Sample input and expected output
Example request:
```json
POST /api/books
{
  "title": "Node.js Guide",
  "author": "John Smith",
  "category": "Programming",
  "totalCopies": 3
}
```
Expected response: HTTP 201 and created book data.

## 10. How it works
The server stores in-memory library data. Routes manage books and members. Middleware logs requests, validates input, and handles errors.

## 11. Important endpoints
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/books` | Fetch all books |
| GET | `/api/books/:id` | Fetch a specific book |
| POST | `/api/books` | Add a new book |
| PUT | `/api/books/:id` | Update a book |
| DELETE | `/api/books/:id` | Remove a book |
| GET | `/api/members` | Fetch all members |
| POST | `/api/members` | Add a member |
| POST | `/api/borrow` | Borrow a book |
| POST | `/api/return` | Return a book |

## 12. Testing instructions
- Test with valid and invalid JSON.
- Try borrowing when no copies are available.
- Check HTTP status codes for 200, 201, 400, 404, and 500.

## 13. Common errors and solutions
- Empty request body: provide the required fields.
- Invalid email: use correct format.
- Borrow conflict: check available copies before borrowing.

## 14. Conclusion
The API demonstrates real-world library management with RESTful routes, validation, and data tracking.

## 15. Viva questions and answers
1. What is Node.js?  
   Node.js is a JavaScript runtime used to build server-side applications.
2. What is Express.js?  
   Express.js is a lightweight Node.js framework for building web APIs.
3. What is a REST API?  
   It is an application interface that follows REST principles and uses HTTP methods.
4. What is CRUD?  
   CRUD means Create, Read, Update, and Delete.
5. What is middleware?  
   Middleware handles request processing before reaching a route.
6. What is JSON?  
   JSON is a lightweight data format used for request and response communication.
7. What is the difference between GET and POST?  
   GET reads data while POST sends data for creation.
8. What is the purpose of PUT and DELETE?  
   PUT updates an existing record and DELETE removes it.
9. What are HTTP status codes 200, 201, 400, 404, and 500?  
   They represent success, created, bad request, not found, and server error.
10. How does the borrowing and returning process work?  
   Borrow checks stock and updates available copies; return restores availability.
