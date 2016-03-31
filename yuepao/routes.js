var run = require('./controllers/callrun');
module.exports=function(app){
	app.get('/callrun',run.callRun);
	app.get('/startmap',run.startMap);
	app.get('/overmap',run.overMap);
	app.get('/savedata',run.saveData);
}
