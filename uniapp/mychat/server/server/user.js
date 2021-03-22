//用户页
var dbServer = require('../db/dbServer');

//用户详情
exports.userDetail = function(req,res){
    let id = req.body.id;
    dbServer.userDetial(id,res);
}
//用户信息修改
exports.userUpdate = function(req,res){
    let data = req.body;
    dbServer.userUpdate(data,res);
}
//获取好友昵称
exports.getFriendNickname = function(req,res){
    let data = req.body;
    dbServer.getFriendNickname(data,res);
}
//修改好友昵称
exports.remakeFriendNickname = function(req,res){
    let data = req.body;
    dbServer.remakeFriendNickname(data,res);
}
