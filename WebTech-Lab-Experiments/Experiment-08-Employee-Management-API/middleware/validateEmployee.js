function validateEmployee(req, res, next) {
  const { name, email, department, position } = req.body;

  if (!name || !email || !department || !position) {
    return res.status(400).json({ message: 'Name, email, department, and position are required.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: 'Please provide a valid email address.' });
  }

  next();
}

module.exports = validateEmployee;
