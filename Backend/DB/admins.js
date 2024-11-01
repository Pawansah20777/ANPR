const mongoose = require('mongoose');
const adminsSchema = mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    password: String,
    Cpassword: String,
});

module.exports = mongoose.model("admins", adminsSchema);