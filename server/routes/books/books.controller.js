const { getUserBooksById,
    getLatestBookId,
    saveBook,
    getAllBooks
} = require('../../models/book.model');

async function httpGetAllUserBooks(req, res) {
    const id = +req.params.id;
    if (!id) {
        const data = await getAllBooks();
        return res.status(200).json(data);
    }
    const data = await getUserBooksById(id);
    return res.status(200).json(data);
}

async function httpAddNewUserBook(req, res) {
    const book = req.body;

    if (!book) return res.status(400).json({
        error: 'You did not provide a correct book format'
    });

    const bookId = await getLatestBookId();
    const newBook = {
        id: bookId,
        name: book.name,
        owner: book.owner
    }
    await saveBook(newBook);
    return res.status(201).json(newBook);
}

module.exports = {
    httpGetAllUserBooks,
    httpAddNewUserBook,
}