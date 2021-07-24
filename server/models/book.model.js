const bookMongo = require('./book.mongo');

const DEFAULT_BOOK_ID = 0;

async function getLatestBookId() {
    const book = await bookMongo.findOne()
                                .sort('-id')

    if (!book) return DEFAULT_BOOK_ID;

    return Number(book.id) + 1;
}

async function getUserBooksByName(name) {
    return await bookMongo.find({
        owner: name
    });
}

async function saveBook(book) {
    return await bookMongo.findOneAndUpdate({
        id: book.id
    },
    book,
    {
        upsert: true
    });
}

async function getAllBooks() {
    return await bookMongo.find();
}

module.exports = {
    getLatestBookId,
    getUserBooksByName,
    saveBook,
    getAllBooks
}
