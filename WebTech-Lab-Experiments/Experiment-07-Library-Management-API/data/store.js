const books = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', category: 'Programming', totalCopies: 5, availableCopies: 4 },
  { id: 2, title: 'Atomic Habits', author: 'James Clear', category: 'Self Help', totalCopies: 3, availableCopies: 2 },
  { id: 3, title: 'The Alchemist', author: 'Paulo Coelho', category: 'Fiction', totalCopies: 4, availableCopies: 4 },
];

const members = [
  { id: 1, name: 'Asha', email: 'asha@example.com', phone: '9876543210' },
  { id: 2, name: 'Rohan', email: 'rohan@example.com', phone: '9988776655' },
];

const borrowRecords = [];

module.exports = { books, members, borrowRecords };
