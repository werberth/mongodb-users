const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required.']
    },
    postCount:Number
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
