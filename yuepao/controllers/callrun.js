/*
 * GET home page.
 */
var run_model = require('../models/run_model');
function run(){}
run.callRun = function(req,res){
	res.render('callrun/callrun');
};
run.startMap = function(req,res){
	res.render('callrun/startmap');
};
run.overMap = function(req,res){
	res.render('callrun/overmap');	
};
run.saveData = function(req,res){
    var start = req.query.start;console.log(start);
    var over = req.query.over;
}
run.joinrun = function(req,res){

	run_model.getAll(function(err,runs){
			res.render('joinrun', 
			{
				runs: runs
			});
	});

}
run.tojoin = function(req,res){
	var start = req.query.start;
	var over = req.query.over;
	var fromyx = req.query.fromyx.split('/');
	var toyx = req.query.toyx.split('/');
	var time = req.query.time;
	run_model.addInfo(start,over,fromyx,toyx,time,function(err,data){
		res.redirect('/joinrun');
	});
}
run.main = function(req,res){
	res.render('main');
};
module.exports = run;