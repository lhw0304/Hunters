
/*
 * GET home page.
 */
function run(){}
run.callRun = function(req,res){
	res.render('callrun');
};
run.startMap = function(req,res){
	res.render('startmap');
};
run.overMap = function(req,res){
	res.render('overmap');	
};
run.saveData = function(req,res){
    var start = req.query.start;console.log(start);
    var over = req.query.over;

}
module.exports = run;