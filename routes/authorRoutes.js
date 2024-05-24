const express = require('express');
const router = express.Router();
const { Author } = require('../models/authorModel');

router.post('/', async (req, res) => {
  const { name, birthYear, nationality } = req.body;

  const author = new Author({ name, birthYear, nationality });
  try {
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
