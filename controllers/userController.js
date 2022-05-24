const { User, Thought } = require('../models');

module.exports = {
    // Get all Users
    getUsers(req, res) {
        User.find({})
        .select('-__v')
        .then((users) => res.json(users))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // Get one User by ID
    getSingleUser(req, res) {
        User.findOne({ _id: req.params._id })
        .select('-__v')
        .then((foundUser) => {
            !foundUser
                ? res.status(404).json({ msg: "No user with that ID" })
                : res.json(foundUser)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // Create a new User
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    // Update existing User by ID
    // Delete existing User by ID
    // Add friend to User's friend list
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $push: { friends: req.params.friendId } },
            { new: true },
        )
        .then((user) => {
            !user
                ? res.status(404).json({ msg: "No user with that ID" })
                : res.json(user)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // Remove friend from User's friend list
}