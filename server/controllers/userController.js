const mongoose = require('mongoose');
const { UserSchema } = require('../models/user');
const User = mongoose.model('user', UserSchema);

exports.getUsers = async() => {
    try {
        const users = await User.find({});
        return users;
    }
    catch (err) {
        console.log(err);
    }
}

exports.getUser = async(id) => {
    try {
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
    }
}

// exports.addUser = async(req) => {
//     try {
//         const user = new User(req);
//         const newUser = await user
//     } catch (err) {
//         console.log(err);
//     }
// }