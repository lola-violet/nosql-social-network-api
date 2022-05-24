const { User, Thought } = require('../models');

module.exports = {
    // Get all Thoughts
    getThoughts(req, res) {
        Thought.find({})
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    // Get one Thought by ID
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params._id })
        .select('-__v')
        .then((foundThought) => {
            !foundThought
                ? res.status(404).json({ msg: "No thought with that ID" })
                : res.json(foundThought)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // Create new Thought
    createThought(req, res) {
        Thought.create(req.body)
        .then((newThought) => {
            User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: newThought._id } },
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
        })
    },
    // Update existing Thought by ID
    // Delete existing Thought by ID
    // Create new Reaction
    // Delete existing Reaction by ID

}