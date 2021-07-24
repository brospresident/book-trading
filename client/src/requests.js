const API_URL = 'http://localhost:3001/api'

// A function that gets all the books and shows them on the /books route.
async function getAllTradeableBooks() {
    const resp = await fetch(`${API_URL}/books`);
    return await resp.json();
}

// A function that gets a user by the provided id
async function getUserById(id) {
    const resp = await fetch(`${API_URL}/users/${id}`)
    return await resp.json();
}

// A function that sends a POST request to server with data provided by the login page. If the user is in the database and the password is correct then we login the user
async function loginUser(user) {
    const resp = await fetch(`${API_URL}/users/login`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(user)
    });
    return await resp.json();
}

// A function that sends a POST request to server and registers the user if the username isn't already taken and if the creditentials are alright
async function registerUser(user) {
    const resp = await fetch(`${API_URL}/users/register`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(user)
    });
    return await resp.json();
}

/**
 * 
 * @param userId the id of user we want to get the books
 * @returns user's books
 */
async function getUserBooks(userId) {
    const resp = await fetch(`${API_URL}/books/${userId}`);
    return await resp.json();
}

async function getAllUsers() {
    const resp = await fetch(`${API_URL}/users`);
    return await resp.json();
}

export {
    getAllTradeableBooks,
    getUserById,
    loginUser,
    registerUser,
    getUserBooks,
    getAllUsers
}