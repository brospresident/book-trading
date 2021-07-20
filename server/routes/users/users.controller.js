const {
    getLatestUserId,
    getUserByUsername,
    saveUser,
    getUserById
} = require('../../models/user.model');

/**
 * 
 * @param {*} req request parameter
 * @param {*} res response object
 * @returns an array with all users from the database
 */
function httpGetAllUsers(req, res) {
    
}

async function httpGetUserById(req, res) {
    const { id } = +req.params;

    if (id) {
        const userData = await getUserById(id);
        if (!userData) res.status(404).json({
            error: 'No user with that id'
        });

        return res.status(302).json(userData);
    }
    else return res.status(400).json({
        error: 'Bad request'
    })
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns the user information
 */
async function httpLoginUser(req, res) {
    const user = req.body;
    const dbUser = await getUserByUsername(user.username);

    if (dbUser.error) return res.status(404).json({
        error: 'The account information you supplied does not exist in our database'
    });

    if (user.password === dbUser.password) return res.status(200).json(dbUser);
    else return res.status(400).json({
        error: 'The account information you supplied does not exist in our database'
    });
}

/**
 * @returns the user information
 */
async function httpRegisterUser(req, res) {
    const user = req.body;

    const dbUser = await getUserByUsername(user.username);

    if (dbUser.error) {
        if (user.password && user.email) {
            const id = await getLatestUserId();
            const newUser = {
                id: id + 1,
                username: user.username,
                password: user.password,
                email: user.email,
                city: '',
                books: []
            };
            await saveUser(newUser);
            return res.status(201).json(newUser);
        }
        else return res.status(400).json({
            error: 'Some required fields are missing'
        });
    }
    else return res.status(400).json({
        error: 'There already exists an user with that information'
    });
}

module.exports = {
    httpGetAllUsers,
    httpGetUserById,
    httpLoginUser,
    httpRegisterUser
}