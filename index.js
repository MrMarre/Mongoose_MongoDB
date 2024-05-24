const express = require('express');
const mongoose = require('mongoose');
const ENV = require('dotenv').config();
const BookRoutes = require('./routes/bookRoutes');
const AuthorRoutes = require('./routes/authorRoutes');
const books = require('./bookData');
const Book = require('./models/bookModel');

const app = express();
app.use(express.json());
const PORT = 3000;

mongoose.connect(process.env.DB_URI).then(() => {
  console.log('Connected to DB.');

  app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
  });
});

app.use('/books', BookRoutes);
app.use('/authors', AuthorRoutes);
