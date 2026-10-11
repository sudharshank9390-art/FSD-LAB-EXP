# Experiment 3: Personal Expense Tracker Utility

## 1. Problem statement
Create a Personal Expense Tracker using JavaScript built-in objects, Map, Set, collections, and npm packages where appropriate.

## 2. Aim and objectives
- Add expenses with details such as title, amount, category, and date.
- Track spending totals.
- Filter and delete records.
- Use Map and Set for category grouping and unique categories.

## 3. Technologies used
- HTML5
- CSS3
- JavaScript ES6+
- LocalStorage

## 4. Concepts demonstrated
- JavaScript objects and arrays
- Map
- Set
- Array methods
- Date objects
- Form validation
- LocalStorage

## 5. Software requirements
- Modern browser
- VS Code or similar editor

## 6. Folder structure
```text
Experiment-03-Personal-Expense-Tracker/
├── index.html
├── style.css
├── script.js
├── README.md
```

## 7. Installation instructions
No installation is required. Open `index.html` in a browser.

## 8. Step-by-step execution
1. Fill in the expense form.
2. Select a category and date.
3. Click "Add Expense".
4. Use the filter dropdown to view category totals.
5. Delete any expense if needed.

## 9. Sample input and expected output
Sample expense:
- Title: Stationery
- Amount: 250
- Category: Education
- Date: 2026-10-11

Expected output: Expense is saved and total amount updates.

## 10. How it works
The application stores expenses in an array and uses a Map to calculate category totals. A Set ensures unique category names are collected for the filter and summary section.

## 11. Important functions
- `calculateTotals()`
- `renderSummary()`
- `renderExpenses()`
- `saveExpenses()`

## 12. Testing instructions
- Add duplicate categories.
- Test negative or zero amounts.
- Check filter output for each category.

## 13. Common errors and solutions
- Missing date: choose a valid date.
- Invalid amount: use positive numeric value.
- LocalStorage blank: the app initializes to an empty array.

## 14. Conclusion
This project is a practical demonstration of JavaScript data structures and client-side storage.

## 15. Viva questions and answers
1. What is an object in JavaScript?  
   An object stores related data as key-value pairs.
2. What is an array?  
   An array stores ordered values.
3. What is a Map?  
   A Map stores key-value pairs and preserves insertion order.
4. What is a Set?  
   A Set stores unique values only.
5. How does Map differ from a plain object?  
   Map allows any type as keys and preserves order more predictably.
6. How does Set maintain unique values?  
   It rejects duplicate entries automatically.
7. What is npm?  
   npm is the Node.js package manager.
8. What is package.json?  
   It stores metadata and dependencies for a project.
9. How is total expenditure calculated?  
   By summing the amount values of all saved expenses.
10. Why is input validation necessary?  
   It avoids invalid or misleading financial records.
