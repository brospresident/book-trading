const mongoose = require('mongoose');

const MONGO_URL = "mongodb+srv://book-trading:booktrading@cluster0.vsdwc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connection.once('open', () => {
    console.log('MongoDB connected');
});

mongoose.connection.on('error', (err) => {
    throw new Error('Mongo Error: ', err);
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL, {
        useFindAndModify: false,
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = {
    mongoConnect
}