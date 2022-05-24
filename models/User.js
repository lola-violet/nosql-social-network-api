const { Schema, model, Types} = require('mongoose');
const Thought = require('./Thought');
const reactionSchema = require('./Reaction');

// Schema to create User Model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            // Validate email with Regex
            validate: {
                validator: function (v) {
                    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
                },
                message: props => `${props.value} is not a valid email address.`
            },
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: { 
            virtuals: true,
        },
        id: false,
    },
);

// Virtual to retrieve length of user's friends array on query
// userSchema.virtual('friendCount').get(() => {
//     return this.friends.length;
// });

// Initialize User Model
const User = model('user', userSchema);
// Export User Model
module.exports = User;