# Experiment 2: Online Ticket Booking Simulator

## 1. Problem statement
Design an Online Ticket Booking Simulator demonstrating asynchronous JavaScript programming.

## 2. Aim and objectives
- Simulate event booking with asynchronous operations.
- Demonstrate callbacks, Promises, and async/await.
- Show proper validation and booking errors.
- Display booking confirmation details.

## 3. Technologies used
- HTML5
- CSS3
- JavaScript ES6+

## 4. Concepts demonstrated
- Callbacks
- Promises
- async/await
- setTimeout
- try/catch
- Promise rejection and resolution

## 5. Software requirements
- Modern browser
- VS Code or similar editor

## 6. Folder structure
```text
Experiment-02-Online-Ticket-Booking/
├── index.html
├── style.css
├── script.js
├── README.md
```

## 7. Installation instructions
No installation is required. Open `index.html` in a browser.

## 8. Step-by-step execution
1. Open the page.
2. Choose an event and ticket quantity.
3. Click "Book Tickets".
4. Watch the booking flow in real time and observe success or error messages.

## 9. Sample input and expected output
Sample input:
- Event: Music Night
- Quantity: 2

Expected output:
- Booking is confirmed.
- Booking ID and total price appear.

## 10. How it works
The page uses a callback function to check availability, a Promise for booking processing, and async/await to wait for the result before updating the UI.

## 11. Important functions
- `checkAvailability(eventId, quantity, callback)`
- `processBooking(eventId, quantity)`
- `bookingForm.addEventListener(...)`

## 12. Testing instructions
- Try invalid quantity values.
- Book more than available tickets.
- Confirm no blocking synchronous code is used while simulating async behavior.

## 13. Common errors and solutions
- Quantity too high: reduce the selected count.
- Invalid event: choose a valid event.
- Booking failed: check available tickets.

## 14. Conclusion
This project clearly demonstrates asynchronous JavaScript behavior in a simple, practical example.

## 15. Viva questions and answers
1. What is asynchronous programming?  
   It allows tasks to run without blocking the main flow.
2. What is a callback?  
   A callback is a function passed to another function for later execution.
3. What is a Promise?  
   A Promise represents a future result of an async operation.
4. What are the states of a Promise?  
   Pending, fulfilled, and rejected.
5. What is async/await?  
   It makes asynchronous code easier to read and write.
6. What is the difference between callbacks and Promises?  
   Promises are easier to manage and avoid nested callback complexity.
7. What is try/catch used for?  
   It captures and handles errors in async code.
8. What is Promise rejection?  
   It means the Promise failed and an error is returned.
9. Why use setTimeout in this project?  
   It simulates real-world delay and booking processing.
10. How are booking errors handled?  
   Errors are displayed in the status box and prevent booking confirmation.
