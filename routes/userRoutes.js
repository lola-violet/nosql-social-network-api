const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    addFriend,
} = require('../controllers/userController');

// Get all Users: /api/users
router.route('/').get(getUsers);

// Get single User by ID: /api/users/:userId
router.route('/:userId').get(getSingleUser);

// Create new user: /api/users
router.route('/').post(createUser);

// Add friend
router.route('/:userId/friends/:friendId').post(addFriend);



module.exports = router;