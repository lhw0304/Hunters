var run = require('./controllers/callrun');
var user = require('./controllers/user');
module.exports=function(app){
	app.get('/',function(req,res){

		res.render('index');

	});
	app.get('/login',user.login);
	app.get('/dologin',user.dologin);
	app.get('/register',user.register);
	app.get('/doregister',user.doregister);
	app.get('/joinrun',run.joinrun);
	app.get('/callrun',run.callRun);
	app.get('/main',run.main);
	app.get('/startmap',run.startMap);
	app.get('/overmap',run.overMap);
	app.get('/savedata',run.saveData);
	app.get('/tojoin',run.tojoin);
}