const bookMongo = require('./book.mongo');

const { getUserById } = require('./user.model');

const DEFAULT_BOOK_ID = 0;

async function getLatestBookId() {
    const book = await bookMongo.findOne()
                                .sort('-id')

    if (!book) return DEFAULT_BOOK_ID;

    return Number(book.id) + 1;
}

async function getUserBooksById(id) {
    const user = await getUserById(id);
    return await bookMongo.find({
        owner: user.username
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
    getUserBooksById,
    saveBook,
    getAllBooks
}
