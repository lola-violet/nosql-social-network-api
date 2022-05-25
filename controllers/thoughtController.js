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
        Thought.findOne({ _id: req.params.thoughtId })
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
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { new: true },
        )
        .then((updThought) => {
            !updThought
                ? res.status(404).json({ msg: "No thought with that ID" })
                : res.json(updThought)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // Delete existing Thought by ID
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((delThought) => {
            !delThought
                ? res.status(404).json({ msg: "No thought with that ID" })
                : User.findOneAndUpdate(
                    { thoughts: req.params.thoughtId },
                    { $pull: { thoughts: req.params.thoughtId } },
                    { new: true },
                )
        })
        .then(() => res.json({ message: "Thought successfully deleted." }))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // Create new Reaction
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { new: true },
        )
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
    // Delete existing Reaction by ID
    removeReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true },
        )
        .then((foundReaction) => {
            !foundReaction
                ? res.status(404).json({ msg: "No thought with that ID" })
                : res.json(foundReaction)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });        
    },
}