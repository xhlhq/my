//首页
var dbServer = require('../db/dbServer');

//获取好友列表
exports.getUserList = function(req,res){
    let data = req.body;
    dbServer.getUserList(data,res);
}
//获取最后一条一对一消息
exports.getLastMsg = function(req,res){
    let data = req.body;
    dbServer.getLastMsg(data,res);
}
//获取未读消息数
exports.unreadMsgNumber = function(req,res){
    let data = req.body;
    dbServer.unreadMsgNumber(data,res);
}
//清空消息数
exports.emptyMsgNumber = function(req,res){
    let data = req.body;
    dbServer.emptyMsgNumber(data,res);
}
//获取群列表
exports.getGroupList = function(req,res){
    let uid = req.body.uid;
    dbServer.getGroupList(uid,res);
}
//获取群最后一条消息
exports.getGroupLastMsg = function(req,res){
    let gid = req.body.gid;
    dbServer.getGroupLastMsg(gid,res);
}
//清空未读群消息
exports.emptyGroupMsgNumber = function(req,res){
    let data = req.body;
    dbServer.emptyGroupMsgNumber(data,res);
}