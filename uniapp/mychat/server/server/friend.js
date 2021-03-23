//对好友的操作
var dbServer = require('../db/dbServer');

//好友申请
exports.applyFriend = function(req,res){
    let data = req.body;
    dbServer.applyFriend(data,res);
}
//更新好友状态
exports.updateFriendState = function(req,res){
    let data = req.body;
    dbServer.updateFriendState(data,res);
}
//拒绝或删除好友
exports.deleteFriend = function(req,res){
    let data = req.body;
    dbServer.deleteFriend(data,res);
}