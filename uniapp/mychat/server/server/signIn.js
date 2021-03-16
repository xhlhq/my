//登录页面
var dbServer = require('../db/dbServer');
var jwt = require('../db/jwt');

//登录
exports.signIn = function(req,res){
    let data = req.body.data;
    let password = req.body.password;
    dbServer.userMatch(data,password,res);
}
//token测试
// exports.test = function(req,res){
//     let token = req.body.token;
//     let result = jwt.verifyToken(token);
//     res.send(result);
// }