var mongodb = require('./db');
function run_model(){

}
// run_model.getAll = function(callback){
// 	mongodb.open(function(err,db){
// 		if(err){
// 			return callback(err);
// 		}
// 		db.collection('callrun',function(err,collection){
// 			if(err){
// 				mongodb.close();
// 			 	return callback(err);
// 			 }
// 		 	collection.find({}).toArray(
// 		 		function(err,data){
// 			 	mongodb.close();
// 			 	if(err){
// 			 		return callback(err);
// 			 	}
// 			 	callback(err,data);
// 		 	}
// 		 	) ;
// 		});
// 	});
// };
run_model.getAll=function(callback){
	mongodb.open(function(err,db){
		if(err){
			return callback(err);
		}
		db.collection('callrun',function(err,collection){
			if(err){
				return callback(err);
			}
			collection.find({}).toArray(function(err,data){
				mongodb.close();
				if(err){
					return callback(err);
				}
				callback(err,data);
			});			
		});
	});
};
run_model.addInfo = function(start,over,fromyx,toyx,time,callback){
	mongodb.open(function(err,db){
		if(err){
			return callback(err);
		}
		db.collection('callrun',function(err,collection){
			if(err){
				return callback(err);
			}
			collection.insert({'form':start,'to':over,'formx':fromyx[1],'formy':fromyx[0],'tox':toyx[1],'toy':toyx[0],'time':time},function(err,data){
				mongodb.close();
				if(err){
					return callback(err);
				}
				callback(err,data);
			});			
		});
	});
}
module.exports=run_model;