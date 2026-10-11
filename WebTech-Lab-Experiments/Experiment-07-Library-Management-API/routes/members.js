const express = require('express');
const router = express.Router();
const { members } = require('../data/store');
const { validateMember } = require('../middleware/validation');

router.get('/', (req, res) => {
  res.json({ success: true, data: members });
});

router.post('/', validateMember, (req, res) => {
  const newMember = {
    id: Date.now(),
    ...req.body,
  };

  members.push(newMember);
  res.status(201).json({ success: true, data: newMember });
});

module.exports = router;
