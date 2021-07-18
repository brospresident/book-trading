const API_URL = 'http://localhost:3001/api'

async function getAllTradeableBooks() {
    // TODO: a request to get all tradeable books from mongoDB to client
}

// TODO: a request to check if the user exists in the database, if it exists and password is correct it should login the user
async function loginUser(user) {
    return await fetch(`${API_URL}/users/login`, {
        method: 'POST',
        body: JSON.stringify(user)
    });
}

// TODO: a request to check if a user already exists in database. If it exists should return an error code, else should POST the user
async function registerUser(user) {
    return await fetch(`${API_URL}/users/login`, {
        method: 'POST',
        body: JSON.stringify(user)
    });
}

export {
    getAllTradeableBooks,
    loginUser,
    registerUser
}