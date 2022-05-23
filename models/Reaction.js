const { Schema, model, Types} = require('mongoose');
const Thought = require('./Thought');
const User = require('./User');
const moment = require('moment');

// Reaction Schema
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String, 
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            // Set default to current timestamp
            default: Date.now,
            // Get method to format timestamp on query
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    },
);

// Export Reaction Schema
module.exports = reactionSchema;