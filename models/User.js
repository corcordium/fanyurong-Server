var config = require('../config');
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
var Mongoosedao = require('mongoosedao');

var UserSchema = new Schema({
	user: {
		unique: true,
		type: String
	},
	password: String,
	tel: String,
	qq: String,
	email: String,
	gender: Number,
	avatar: String,
	region: String,
	store_count: {
		type: Number,
		default: 0
	},
	reply_count: {
		type: Number,
		default: 0
	}
});

UserSchema.pre('save', function (next) {
	next();
})

UserSchema.path('name').validate(function (v) {
	return v && v > 4;
}, err);

UserSchema.path('password').validate(function (v) {
	return v && v > 5;
});

var UserModel = mongoose.model('User', UserSchema);
modules.export = new Mongoosedao(UserModel);