const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let userSchema = new Schema({
	user:{ type: String , required: true},
	password: { type: String, required: true},
	email: {type: String, required: true},
	isAdmin: {type: Boolean, required: true}
});
//exportar modelo
module.exports = mongoose.model('User',userSchema )
