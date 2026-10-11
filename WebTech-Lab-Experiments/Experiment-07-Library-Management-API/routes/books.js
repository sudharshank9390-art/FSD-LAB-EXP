const express = require('express');
const router = express.Router();
const { books } = require('../data/store');
const { validateBook } = require('../middleware/validation');

router.get('/', (req, res) => {
  res.json({ success: true, data: books });
});

router.get('/:id', (req, res) => {
  const book = books.find((item) => item.id === Number(req.params.id));
  if (!book) {
    return res.status(404).json({ message: 'Book not found.' });
  }
  res.json({ success: true, data: book });
});

router.post('/', validateBook, (req, res) => {
  const { title, author, category, totalCopies } = req.body;
  const newBook = {
    id: Date.now(),
    title,
    author,
    category,
    totalCopies: Number(totalCopies),
    availableCopies: Number(totalCopies),
  };

  books.push(newBook);
  res.status(201).json({ success: true, data: newBook });
});

router.put('/:id', validateBook, (req, res) => {
  const book = books.find((item) => item.id === Number(req.params.id));
  if (!book) {
    return res.status(404).json({ message: 'Book not found.' });
  }

  const { title, author, category, totalCopies } = req.body;
  const updatedAvailableCopies = Math.max(0, Number(totalCopies) - (book.totalCopies - book.availableCopies));

  book.title = title;
  book.author = author;
  book.category = category;
  book.totalCopies = Number(totalCopies);
  book.availableCopies = updatedAvailableCopies;

  res.json({ success: true, data: book });
});

router.delete('/:id', (req, res) => {
  const index = books.findIndex((book) => book.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: 'Book not found.' });
  }

  books.splice(index, 1);
  res.json({ success: true, message: 'Book deleted successfully.' });
});

module.exports = router;
