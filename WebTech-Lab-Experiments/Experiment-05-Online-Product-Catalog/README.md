# Experiment 5: Online Product Catalog

## 1. Problem statement
Build an Online Product Catalog with search and category filtering using React event handling and conditional rendering.

## 2. Aim and objectives
- Display products with name, price, category, and image placeholder.
- Search products by name.
- Filter by category.
- Show a helpful empty-state message when nothing matches.

## 3. Technologies used
- React
- Vite
- JavaScript
- CSS

## 4. Concepts demonstrated
- React functional components
- Props and state
- useState
- Search handling
- Array filter and map methods
- Conditional rendering
- Event handling

## 5. Software requirements
- Node.js and npm
- Browser

## 6. Folder structure
```text
Experiment-05-Online-Product-Catalog/
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
1. Start the app.
2. Type a product name in the search box.
3. Choose a category.
4. Click "Clear Filters" to reset the page.

## 9. Sample input and expected output
Search for "Laptop" and category "Electronics". The catalog shows matching product cards only.

## 10. How it works
The products array is filtered using both search text and category selection. When the result list is empty, a helpful message is shown.

## 11. Important components
- `ProductCard`
- `App`

## 12. Testing instructions
- Search with partial words.
- Use different categories.
- Try a search with no result.

## 13. Common errors and solutions
- No products visible: clear filters or adjust the search text.
- Missing keys: the map function uses a unique `id` for each product.

## 14. Conclusion
This project demonstrates interactive filtering and reusable card-based UI design in React.

## 15. Viva questions and answers
1. What is conditional rendering?  
   It renders different UI elements based on a condition.
2. What is event handling?  
   It responds to actions such as clicks or typing.
3. How does a search filter work?  
   It checks whether the item text matches user input.
4. What does the filter() method do?  
   It returns a new array with matching values.
5. What does the map() method do?  
   It transforms each array item into a new value or JSX element.
6. What is a controlled input?  
   An input whose value is connected to state.
7. Why use keys when rendering lists?  
   Keys help React identify changed and reordered items.
8. What is component reuse?  
   It means reusing the same component for multiple items.
9. How are categories filtered?  
   By checking the selected category against each product.
10. What happens when no products match?  
   A no-results message is shown.
