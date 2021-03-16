//注册页面的服务处理
var dbServer = require('../db/dbServer');

//用户注册
exports.signUp = function(req,res){
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    // console.log('req:',req)
    // res.send({name,email,password});
    dbServer.bulidUser(name,email,password,res);
}

//用户或邮箱是否占用判断
exports.userValidate = function(req,res){
    let data = req.body.data;
    let type = req.body.type;

    dbServer.countUserValue(data,type,res);
}