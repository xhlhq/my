//搜索页面
var dbServer = require('../db/dbServer');

//搜索用户
exports.searchUser = function(req,res){
    let data = req.body.data;
    dbServer.searchUser(data,res);
}
//判断是否为好友
exports.isFriend = function(req,res){
    let uid = req.body.uid;
    let fid = req.body.fid;
    dbServer.isFriend(uid,fid,res);
}
//搜索群组
exports.searchGroup = function(req,res){
    let data = req.body.data;
    dbServer.searchGroup(data,res);
}
//判断是否在群内
exports.isInGroup = function(req,res){
    let uid = req.body.uid;
    let gid = req.body.gid;
    dbServer.isInGroup(uid,gid,res);
}