const { Schema, model } = require('mongoose');
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
        }
    }
);



// Initialize Thought Model
const Thought = model('thought', thoughtSchema);
// Export Thought Model
module.exports = Thought;