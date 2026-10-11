const express = require('express');
const router = express.Router();
const { books, members, borrowRecords } = require('../data/store');

router.post('/borrow', (req, res) => {
  const { bookId, memberId } = req.body;
  const book = books.find((item) => item.id === Number(bookId));
  const member = members.find((item) => item.id === Number(memberId));

  if (!book || !member) {
    return res.status(404).json({ message: 'Book or member not found.' });
  }

  if (book.availableCopies <= 0) {
    return res.status(400).json({ message: 'Book is currently unavailable.' });
  }

  book.availableCopies -= 1;
  borrowRecords.push({
    id: Date.now(),
    bookId: book.id,
    memberId: member.id,
    action: 'borrowed',
    date: new Date().toISOString(),
  });

  res.status(200).json({ success: true, message: 'Book borrowed successfully.' });
});

router.post('/return', (req, res) => {
  const { bookId, memberId } = req.body;
  const book = books.find((item) => item.id === Number(bookId));
  const member = members.find((item) => item.id === Number(memberId));

  if (!book || !member) {
    return res.status(404).json({ message: 'Book or member not found.' });
  }

  book.availableCopies += 1;
  borrowRecords.push({
    id: Date.now(),
    bookId: book.id,
    memberId: member.id,
    action: 'returned',
    date: new Date().toISOString(),
  });

  res.status(200).json({ success: true, message: 'Book returned successfully.' });
});

module.exports = router;
