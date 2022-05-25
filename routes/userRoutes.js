const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../controllers/userController');

// Get all Users: /api/users
router.route('/').get(getUsers);

// Get single User by ID: /api/users/:userId
router.route('/:userId').get(getSingleUser);

// Create new user: /api/users
router.route('/').post(createUser);

// Update existing User by ID: /api/users/:userId
router.route('/:userId').put(updateUser);

// Delete existing User by ID: /api/users/:userId
router.route('/:userId').delete(deleteUser);

// Add friend: /api/users/:userId/friends/:friendID
router.route('/:userId/friends/:friendId').post(addFriend);

// Remove friend: /api/users/:userId/friends/:friendID
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;