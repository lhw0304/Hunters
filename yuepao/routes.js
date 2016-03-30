
/*
 * GET home page.
 */

// exports.index = function(req, res){
//   res.render('index', { title: 'laoshan' });
// };
var routes=require('./controllers/index.js');

module.exports=function(app){
	app.get('/',routes.index)
}
