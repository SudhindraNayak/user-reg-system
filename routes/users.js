var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.render('register',{
  	'title':'Register'
  });
});

router.get('/login', function(req, res, next) {
  res.render('login',{
  	'title':'Login'
  });
});

router.post('/register',function(req,res,next){
	var name=req.body.name;
	var email=req.body.email;
	var username=req.body.username;
	var password=req.body.password;
	var password2=req.body.password2;


//check for image field
	/*if(req.files.profileimage){
		console.log('uploading file');

		var profileimageOriginalname=req.files.profileimage.originalname;
		var profileImage=req.files.profileimage.name;
		var profiletype=req.files.profileimage.mimetype;
		var profilePath=req.files.profileimage.path;
		var profileExt=req.files.profileimage.extension;
		var profileSize=req.files.profileimage.size;
	} else{
		var profileImageName='noImage.png';
	}*/

//validation
	console.log(req);
	console.log(req.body.email);
	console.log(req.body.password);
	console.log(req.body.username);
	req.checkBody('name','Name should not be empty').notEmpty();
	req.checkBody('email','Email should not be empty').notEmpty();
	req.checkBody('email','Email not valid').isEmail();
	req.checkBody('username','User Name should not be empty').notEmpty();
	req.checkBody('password','Password should not be empty').notEmpty();
	req.checkBody('password2','Password do not match').equals(req.body.password);

	//check for error
	var errors=req.validationErrors();

	if(errors){
		res.render('register',{
			errors:errors,
			name:name,
			email:email,
			username:username,
			password:password,
			password2:password2
		});
	}
	else{
		var newuser=new User({
			name:name,
			email:email,
			username:username,
			password:password,
			profileimage:proofileImageName
		});

		// create user 
		/*User.createUser(newuser,function(err,user){
			if(err)throw err;
			console.log(user);
		});*/

		//success  message
		req.flash('success','You are now registered and may log in');

		/*req.location('/');
		res.redirect();*/
	}
});

module.exports = router;
