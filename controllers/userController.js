const mongoose = require('mongoose');
const { User, Thought } = require('../models');

module.exports = {
    // Get all Users
    getUsers(req, res) {
        User.find({})
        .populate([
            { path: 'thoughts', select: '-__v' },
            { path: 'friends', select: '-__v' }
        ])
        .select('-__v')
        .then((users) => res.json(users))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // Get one User by ID
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .populate([
            { path: 'thoughts', select: '-__v' },
            { path: 'friends', select: '-__v' }
        ])
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
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // Update existing User by ID
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true },
        )
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
    // Delete existing User by ID
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((delUser) => {
            !delUser
                ? res.status(404).json({ msg: "No user with that ID" })
                : Thought.deleteMany({ _id: { $in: delUser.thoughts } })
        })
        .then(() => res.json({ message: "User successfully deleted." }))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        }); 
    },
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
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
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
}