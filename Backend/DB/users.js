const mongoose = require('mongoose');
const usersSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    Cpassword: String,
});

module.exports = mongoose.model("users", usersSchema);
