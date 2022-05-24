const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    addReaction,
} = require('../controllers/thoughtController');

// Get all Thoughts: /api/thoughts
router.route('/').get(getThoughts);

// Get single Thought by ID: /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought);

// Create new Thought: /api/thoughts
router.route('/').post(createThought);

// Add Reaction
router.route('/:thoughtId/reactions').post(addReaction);

module.exports = router;