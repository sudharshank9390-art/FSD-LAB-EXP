# Experiment 6: Course Registration Portal

## 1. Problem statement
Develop a college course registration portal using React Router, controlled components, form validation, and API integration.

## 2. Aim and objectives
- Build multi-page navigation.
- Create a controlled registration form.
- Validate name, email, roll number, phone number, and course selection.
- Show a success screen with details after registration.

## 3. Technologies used
- React
- React Router DOM
- Vite
- JavaScript
- CSS

## 4. Concepts demonstrated
- React functional components
- React Router
- Controlled form components
- useState
- Form validation
- Navigation
- Conditional rendering

## 5. Software requirements
- Node.js and npm
- Browser

## 6. Folder structure
```text
Experiment-06-Course-Registration-Portal/
├── package.json
├── index.html
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── components/
│   ├── pages/
│   └── styles/
│       └── index.css
├── README.md
```

## 7. Installation instructions
```bash
npm install
npm run dev
```

## 8. Step-by-step execution
1. Run the project.
2. Open the Home page.
3. Navigate to Courses and Registration.
4. Submit a form with valid details.
5. Observe the success page.

## 9. Sample input and expected output
A valid student email and a 10-digit phone number will pass validation and redirect to the success page.

## 10. How it works
The app uses client-side routing to navigate between pages without a full reload. Form values are managed using state and validated before submission.

## 11. Important components and routes
- `HomePage`
- `CoursesPage`
- `RegistrationPage`
- `SuccessPage`
- `/`, `/courses`, `/registration`, `/success`

## 12. Testing instructions
- Submit empty fields.
- Enter invalid email or phone number.
- Confirm that invalid submissions are blocked.

## 13. Common errors and solutions
- Invalid email: use `name@example.com` format.
- Phone number not accepted: use exactly 10 digits.
- Missing course: select one from the dropdown.

## 14. Conclusion
This project shows how React Router and validation can build a practical college registration portal.
