var User_model=require('../models/User_model.js');
exports.register = function(req,res){
	res.render('login/register');

};
exports.doregister = function(req,res){
	var name = req.query.username;
	var pass = req.query.password;
	console.log(name);
	User_model.register(name,pass,function(err,data){
		if(data){
			res.redirect('/login');
		}
	});
};
exports.login = function(req,res){
	res.render('login/login');
};
exports.dologin = function(req,res){
	var name = req.query.username;
	var pass = req.query.password;
	var nowx = req.query.nowx;
	var nowy = req.query.nowy;

	console.log(name);
	User_model.checklogin(name,pass,nowx,nowy,function(err,data){
		if(data==null){		
			res.redirect('/login');
		}else{
			// req.session.user=data;
			// console.log(req.session.user);
			// var today = new Date();
			// var time = today.getTime() + 60*1000;
			// var time2 = new Date(time);
			// var timeObj = time2.toGMTString();
			// res.writeHead({
			//    'Set-Cookie':'name='+name+';pass='+pass+';Expires='+timeObj
			// });
			res.redirect('/joinrun');
		}
	});
}