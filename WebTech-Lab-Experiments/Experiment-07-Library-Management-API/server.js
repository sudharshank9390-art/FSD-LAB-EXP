const express = require('express');
const requestLogger = require('./middleware/logger');
const booksRoutes = require('./routes/books');
const membersRoutes = require('./routes/members');
const transactionRoutes = require('./routes/transactions');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(requestLogger);

app.get('/', (req, res) => {
  res.json({ message: 'Library Management API is running.' });
});

app.use('/api/books', booksRoutes);
app.use('/api/members', membersRoutes);
app.use('/api', transactionRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);

  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ message: 'Invalid JSON payload.' });
  }

  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Library API running on http://localhost:${PORT}`);
});
