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
