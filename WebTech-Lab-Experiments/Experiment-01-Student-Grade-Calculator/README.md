# Experiment 1: Student Grade Calculator

## 1. Problem statement
Develop a Student Grade Calculator using JavaScript ES6+ features.

## 2. Aim and objectives
- Calculate total marks and average.
- Determine grade and pass/fail status.
- Practice ES6+ features like arrow functions, template literals, destructuring, and spread operators.
- Validate user inputs and display formatted results.

## 3. Technologies used
- HTML5
- CSS3
- JavaScript ES6+

## 4. Concepts demonstrated
- Arrow functions
- Template literals
- Destructuring
- Spread operators
- Arrays and objects
- Conditional statements
- Event handling
- Input validation

## 5. Software requirements
- Any modern browser
- VS Code or any code editor

## 6. Folder structure
```text
Experiment-01-Student-Grade-Calculator/
├── index.html
├── style.css
├── script.js
├── README.md
```

## 7. Installation instructions
No installation is required. Open `index.html` directly in a browser.

## 8. Step-by-step execution
1. Open the HTML file in a browser.
2. Enter the student name.
3. Type marks for all subjects.
4. Click "Calculate Grade".
5. Check total, average, grade, and pass/fail result.

## 9. Sample input and expected output
Sample input:
- Student Name: Ananya
- Mathematics: 85
- Physics: 78
- Chemistry: 90
- English: 70
- Computer Science: 92

Expected output: Total = 415, Average = 83.00, Grade = B, Result = Pass.

## 10. How it works
The script reads subject marks from the form, validates each mark, calculates the total and average, and then determines the grade using conditional logic.

## 11. Important functions
- `calculateGrade(average)`
- `validateMark(mark)`
- `renderResult(studentName, marks)`

## 12. Testing instructions
- Try blank names and marks.
- Check negative values and numbers above 100.
- Confirm correct grade and pass/fail output.

## 13. Common errors and solutions
- Empty fields: enter valid values.
- NaN values: use only numeric input.
- Out-of-range marks: keep values between 0 and 100.

## 14. Conclusion
This project helps students understand JavaScript logic, data handling, and input validation.
