# Experiment 4: Student Profile Dashboard

## 1. Problem statement
Develop a Student Profile Dashboard using React functional components, props, state, and Hooks.

## 2. Aim and objectives
- Display student information.
- Create reusable React components.
- Update profile information with state.
- Add and remove skills dynamically.

## 3. Technologies used
- React
- Vite
- JavaScript
- CSS

## 4. Concepts demonstrated
- React functional components
- JSX
- Props
- useState
- useEffect
- Event handling
- Conditional rendering

## 5. Software requirements
- Node.js and npm
- Browser

## 6. Folder structure
```text
Experiment-04-Student-Profile-Dashboard/
├── package.json
├── index.html
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
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
1. Install dependencies.
2. Start the app with Vite.
3. Edit the fields and add/remove skills.
4. Confirm that the interface updates instantly.

## 9. Sample input and expected output
Sample profile data includes name, roll number, email, department, and year. The UI updates immediately after editing.

## 10. How it works
The app stores the profile data in React state and persists it to localStorage. Reusable components render the fields and the skill section.

## 11. Important components
- `ProfileField`
- `App`

## 12. Testing instructions
- Modify each field and verify re-rendering.
- Remove skills and check the list updates.
- Refresh the page to confirm localStorage persistence.

## 13. Common errors and solutions
- Browser cache issue: reload the page.
- Empty skill input: add only non-empty skill names.

## 14. Conclusion
This project demonstrates how to build a clean React dashboard using state-driven UI updates.
