const { Schema, model, Types} = require('mongoose');
const User = require('./User');
const reactionSchema = require('./Reaction');
const moment = require('moment');

// Schema to create Thought Model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            // Set default to current timestamp
            default: Date.now,
            // Get method to format timestamp on query
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    },
);

// Virtual to retrieve length of thought's reaction array on query
// thoughtSchema.virtual('reactionCount').get(() => {
//     return this.reactions.length;
// });

// Initialize Thought Model
const Thought = model('thought', thoughtSchema);
// Export Thought Model
module.exports = Thought;