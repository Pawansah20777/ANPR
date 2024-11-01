const mongoose = require('mongoose');
const propertiesSchema = mongoose.Schema({
	houseId:Number,
	houseName:String,
	houseType:String,
	houseCountry:String,
	housePrice:Number,
	houseAddress:String,
    name: String,
    email: String,
	phone:Number,
	message:String
});

module.exports = mongoose.model("properties", propertiesSchema);
