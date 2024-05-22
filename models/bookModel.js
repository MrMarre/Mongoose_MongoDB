const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: Number,
  genre: String,
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
