const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: (name) => name.length > 2,
            message: 'Name must be longer than 2 caracters.'
        },
        required: [true, 'Name is required.']
    },
    postCount:Number
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
