const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel');

const bookService = require('../services/bookServices');

router
  .post('/', async (req, res) => {
    const { title, author, year, genre } = req.body;
    const book = new Book({ title, author, year, genre });
    try {
      const savedBook = await book.save();
      res.status(201).json(savedBook);
      console.log(savedBook);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  })
  .get('/', async (req, res) => {
    try {
      const books = await Book.find({});
      res.status(200).json(books);
      console.log(books);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  })
  .put('/:id', async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
      const updatedBook = await bookService.updateBookById(id, updateData);
      res.status(200).json(updatedBook);
    } catch (err) {
      if (err) {
        res.status(404).json({ error: err.message });
      } else {
        res.status(500).json({ error: err.message });
      }
    }
  })
  .delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const deleteBook = await bookService.deleteBookById(id);
      const response = {
        message: 'Denna bok har raderats framgångsrikt',
        title: deleteBook.title,
        author: deleteBook.author,
      };
      res.status(200).json(response);
      console.log(response);
    } catch (err) {
      if (err) {
        res.status(404).json({ error: err.message });
      } else {
        res.status(500).json({ error: err.message });
      }
    }
  });

module.exports = router;
