import { useState } from 'react';

const products = [
  { id: 1, name: 'Laptop Pro', price: 54000, category: 'Electronics', image: '💻' },
  { id: 2, name: 'Cotton Shirt', price: 1200, category: 'Fashion', image: '👕' },
  { id: 3, name: 'Coffee Maker', price: 3500, category: 'Home', image: '☕' },
  { id: 4, name: 'Running Shoes', price: 2800, category: 'Sports', image: '👟' },
  { id: 5, name: 'Smart Watch', price: 6500, category: 'Electronics', image: '⌚' },
  { id: 6, name: 'Backpack', price: 1600, category: 'Accessories', image: '🎒' },
];

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">{product.image}</div>
      <h3>{product.name}</h3>
      <p className="category">{product.category}</p>
      <p className="price">₹{product.price}</p>
    </div>
  );
}

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map((product) => product.category))];

  const filteredProducts = products.filter((product) => {
    const matchesText = product.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesText && matchesCategory;
  });

  return (
    <div className="catalog-page">
      <header>
        <h1>Online Product Catalog</h1>
      </header>

      <div className="toolbar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />

        <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <button type="button" onClick={() => {
          setSearchText('');
          setSelectedCategory('All');
        }}>Clear Filters</button>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="empty-state">No products match your filters. Try a different search.</div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
