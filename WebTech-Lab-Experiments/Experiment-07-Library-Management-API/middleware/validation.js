function validateBook(req, res, next) {
  const { title, author, category, totalCopies } = req.body;

  if (!title || !author || !category || !totalCopies) {
    return res.status(400).json({ message: 'Title, author, category, and totalCopies are required.' });
  }

  if (Number(totalCopies) <= 0) {
    return res.status(400).json({ message: 'totalCopies must be greater than zero.' });
  }

  next();
}

function validateMember(req, res, next) {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'Name, email, and phone are required.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }

  next();
}

module.exports = { validateBook, validateMember };
