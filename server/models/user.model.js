const userMongo = require('./user.mongo');

const DEFAULT_USER_ID = 0;

/**
 * 
 * @returns latest user id from database
 */
async function getLatestUserId() {
    const foundUser = await userMongo.findOne().sort('-id');

    if (!foundUser) return DEFAULT_USER_ID;

    return Number(foundUser.id);
}

/**
 * @param id the id of the user you want to find
 * @returns the user data
 */
async function getUserById(id) {
    const user = await userMongo.findOne({
        id: id
    });   

    if (!user) return {
        error: `There's no user with that id.`
    };

    return user;
}

/**
 * @param username the name of the user you want to find
 * @returns the user data
 */
 async function getUserByUsername(username) {
    const user = await userMongo.findOne({
        username: username
    });   

    if (!user) return {
        error: `There's no user with that name.`
    };

    return user;
}

/**
 * 
 * @param user the user object you want to search for
 * @returns a promise with the result of the database operation
 */
async function saveUser(user) {
    await userMongo.findOneAndUpdate({
        id: user.id
    },
    user,
    {
        upsert: true
    });
}

module.exports = {
    getLatestUserId,
    getUserById,
    getUserByUsername,
    saveUser
}