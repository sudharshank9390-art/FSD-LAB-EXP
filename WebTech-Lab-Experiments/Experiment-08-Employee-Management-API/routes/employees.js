const express = require('express');
const router = express.Router();
const employees = require('../data/employees');
const validateEmployee = require('../middleware/validateEmployee');

router.get('/', (req, res) => {
  res.json({ success: true, data: employees });
});

router.get('/:id', (req, res) => {
  const employee = employees.find((item) => item.id === Number(req.params.id));
  if (!employee) {
    return res.status(404).json({ message: 'Employee not found.' });
  }
  res.json({ success: true, data: employee });
});

router.post('/', validateEmployee, (req, res) => {
  const newEmployee = {
    id: Date.now(),
    ...req.body,
  };

  employees.push(newEmployee);
  res.status(201).json({ success: true, data: newEmployee });
});

router.put('/:id', validateEmployee, (req, res) => {
  const employee = employees.find((item) => item.id === Number(req.params.id));
  if (!employee) {
    return res.status(404).json({ message: 'Employee not found.' });
  }

  Object.assign(employee, req.body);
  res.json({ success: true, data: employee });
});

router.delete('/:id', (req, res) => {
  const index = employees.findIndex((employee) => employee.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: 'Employee not found.' });
  }

  const [deletedEmployee] = employees.splice(index, 1);
  res.json({ success: true, message: 'Employee deleted successfully.', data: deletedEmployee });
});

module.exports = router;
