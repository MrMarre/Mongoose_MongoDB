const Book = require('../models/bookModel');

const updateBookById = async (id, updateData) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!updatedBook) throw new Error('Book not found');

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

module.exports = { updateBookById, deleteBookById };
