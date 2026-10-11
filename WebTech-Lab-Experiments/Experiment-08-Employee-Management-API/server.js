const express = require('express');
const logger = require('./middleware/logger');
const employeesRoutes = require('./routes/employees');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.json({ message: 'Employee Management API is running.' });
});

app.use('/api/employees', employeesRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);

  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ message: 'Invalid JSON payload.' });
  }

  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Employee API running on http://localhost:${PORT}`);
});
