const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../controllers/thoughtController');

// Get all Thoughts: /api/thoughts
router.route('/').get(getThoughts);

// Get single Thought by ID: /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought);

// Create new Thought: /api/thoughts
router.route('/').post(createThought);

// Update existing Thought by ID: /api/thoughts/:thoughtId
router.route('/:thoughtId').put(updateThought);

// Delete existing Thought by ID: /api/thoughts/:thoughtId
router.route('/:thoughtId').delete(deleteThought);

// Add Reaction: /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// Remove Reaction: /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;