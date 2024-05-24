const Book = require('../models/bookModel');

const updateBookById = async (id, updateData) => {
  try {
    const book = await Book.findById(id);
    if (!book) throw new Error('Book not found');

    Object.assign(book, updateData);
    const updatedBook = await book.save();
    return updatedBook;
  } catch (err) {
    throw err;
  }
};

const deleteBookById = async (id) => {
  try {
    const deleteDocument = await Book.findByIdAndDelete(id, { new: true });
    if (!deleteDocument) throw new Error('Item not found');
    return deleteDocument;
  } catch (err) {
    throw err;
  }
};
const searchAndSortByAsc = async () => {
  try {
  } catch (err) {
    throw err;
  }
};

module.exports = { updateBookById, deleteBookById, searchAndSortByAsc };
