var mongoose=require('mongoose');

var db=mongoose.connection;

//schema defination
var UserSchema=mongoose.Schema({
	username:{
		type:String,
		index:true
	},
	password:{
		type:String
	},
	email:{
		type:String
	},
	name:{
		type:String
	},
	profileimage:{
		type:String
	}
});

var user=module.exports=mongoose.model('User',UserSchema);

module.exports.createUser=function(newUser,callBack){
	newUser.save(callBack);
}