const expenseForm = document.getElementById('expenseForm');
const titleInput = document.getElementById('title');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const dateInput = document.getElementById('date');
const categoryFilter = document.getElementById('categoryFilter');
const totalAmount = document.getElementById('totalAmount');
const categorySummary = document.getElementById('categorySummary');
const expenseList = document.getElementById('expenseList');

const STORAGE_KEY = 'expense-tracker-items';
let expenses = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

const getCategoryOptions = () => {
  const categories = [...new Set(expenses.map((expense) => expense.category))];
  return ['All', ...categories];
};

const renderCategoryFilter = () => {
  const categories = getCategoryOptions();
  categoryFilter.innerHTML = categories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join('');
};

const saveExpenses = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
};

const calculateTotals = () => {
  const totals = new Map();
  expenses.forEach((expense) => {
    const currentTotal = totals.get(expense.category) || 0;
    totals.set(expense.category, currentTotal + Number(expense.amount));
  });

  return totals;
};

const renderSummary = () => {
  const totals = calculateTotals();
  const categoryEntries = [...totals.entries()];

  categorySummary.innerHTML = categoryEntries.length
    ? categoryEntries
        .map(([category, total]) => `<li><span>${category}</span><strong>₹${total.toFixed(2)}</strong></li>`)
        .join('')
    : '<li>No expense data available.</li>';
};

const renderExpenses = () => {
  const selectedCategory = categoryFilter.value;
  const filteredExpenses =
    selectedCategory === 'All'
      ? [...expenses]
      : expenses.filter((expense) => expense.category === selectedCategory);

  const total = filteredExpenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
  totalAmount.textContent = `Total: ₹${total.toFixed(2)}`;

  expenseList.innerHTML = filteredExpenses.length
    ? filteredExpenses
        .map(
          (expense) => `
          <li>
            <div>
              <strong>${expense.title}</strong><br>
              <small>${expense.category} • ${expense.date}</small>
            </div>
            <div>
              <strong>₹${Number(expense.amount).toFixed(2)}</strong><br>
              <button class="delete-btn" data-id="${expense.id}">Delete</button>
            </div>
          </li>
        `
        )
        .join('')
    : '<li>No expenses in this category.</li>';

  document.querySelectorAll('.delete-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
      const id = Number(event.target.dataset.id);
      expenses = expenses.filter((expense) => expense.id !== id);
      saveExpenses();
      renderAll();
    });
  });
};

const renderAll = () => {
  renderCategoryFilter();
  renderSummary();
  renderExpenses();
};

expenseForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = titleInput.value.trim();
  const amount = Number(amountInput.value);
  const category = categoryInput.value.trim();
  const date = dateInput.value;

  if (!title || !category || !date || !amount || amount <= 0) {
    alert('Please provide valid title, amount, category, and date.');
    return;
  }

  const newExpense = {
    id: Date.now(),
    title,
    amount,
    category,
    date,
  };

  expenses.unshift(newExpense);
  saveExpenses();
  expenseForm.reset();
  renderAll();
});

categoryFilter.addEventListener('change', () => {
  renderExpenses();
});

renderAll();
