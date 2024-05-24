const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Author } = require('./authorModel');
const AuthorSchema = require('./authorModel');
// author: { type: String, required: true },
// { type: mongoose.Schema.Types.ObjectId, refs: 'Author' }
const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, refs: 'Author' },
  year: Number,
  genre: String,
});
const Book = mongoose.model('Book', BookSchema);

BookSchema.pre('save', function (next) {
  const book = this;
  if (book.isModified('year')) {
    if (this.year > new Date().getFullYear())
      return next(new Error('Invalid year input'));
  }
  if (book.isModified('title')) {
    book.title = book.title.charAt(0).toUpperCase() + book.title.slice(1);
  }
  if (book.isModified('genre')) {
    let firstWord = book.genre;

    if (firstWord.includes('-') || firstWord.includes(' ')) {
      let parts = firstWord.split(/[- ]/);
      let converter = parts
        .map((part) => part.charAt(0).toUpperCase())
        .join('');
      book.genre = converter;
    }
  }
  next();
});

module.exports = { Book };
