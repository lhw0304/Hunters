// 加载数据库链接

var mongodb = require('./db');
function user_model(){

}
module.exports = user_model;

user_model.checklogin = function(name,pass,nowx,nowy,callback){
	mongodb.open(function(err,db){
		if(err){
			return callback(err);
		}
		db.collection('users',function(err,collection){
			if(err){
				mongodb.close();
			 	return callback(err);
			 }
			 // collection.findOne({'username':name,'password':pass},function(err,data){
			 	collection.update({'username':name,'password':pass},{$set:{'nowx':nowx,'nowy':nowy}},function(err,data){
				 	mongodb.close();
				 	if(err){
				 		return callback(err);
				 	}
				 	callback(err,data);
			 	});
			 // });

		});
	});
};

user_model.register = function(name,password,callback){//静态方法
	mongodb.open(function(err,db){
		if(err){
			return callback(err);
		}
		//读取user集合
		db.collection('users',function(err,collection){
			 if(err){
			 	mongodb.close();
			 	return callback(err);
			 }
			 collection.insert({'username':name,'password':password},function(err,data){
			 	mongodb.close();
			 	if(err){
			 		return callback(err);
			 	}
			 	callback(err,data);

			 });
		});
	});

};