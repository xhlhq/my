var mongoose = require('mongoose');
var db = require('../config/db');
var Schema = mongoose.Schema;

// 用户表
var UserSchema = new Schema({
    name: {type: String},        //姓名
    sex: {type: String,default: 'asexual'},        //性别
    email: {type: String},        //邮箱
    phone: {type: Number},        //手机号
    password: {type: String},        //密码
    birthday: {type: Date},        //出生日期
    explain: {type: String},        //自我介绍
    registerdate: {type: Date},        //注册时间
    imgurl: {type: String,default:'user.png'},        //头像地址
});
//好友表
var FriendSchema = new Schema({
    userId: {type: Schema.Types.ObjectId,ref:'User'},  //用户id
    friendId: {type: Schema.Types.ObjectId,ref:'User'},  //好友id
    status: {type: String},        //状态 0已成为好友 1请求中 2申请好友
    nickName: {type: String},
    time: {type: Date},        //交友时间
});
//一对一发送信息表
var MessageSchema = new Schema({
    userId: {type: Schema.Types.ObjectId,ref:'User'},  //用户id
    friendId: {type: Schema.Types.ObjectId,ref:'User'},  //好友id
    message: {type: String},        //内容
    type: {type: String},        //类型
    time: {type: Date},        //发送时间
    status: {type: Number},    //消息状态  
});
//群表
var GroupSchema = new Schema({
    userId: {type: Schema.Types.ObjectId,ref:'User'},  //用户id
    name: {type: String},        //群名
    imgUrl: {type: String,default:'group.png'},        //群封面
    time: {type: Date},        //发送时间
    notice: {type: String},      //公告 
});
//群成员表
var GroupMemberSchema = new Schema({
    groupId: {type: Schema.Types.ObjectId,ref:'Group'},  //用户id
    userId: {type: Schema.Types.ObjectId,ref:'User'},  //用户id
    name: {type: String},        //群内名称
    tip: {type: Number},         //未读消息数
    time: {type: Date},        //发送时间
    shield: {type: Number},     //是否屏蔽
});
//
var GroupMessageSchema = new Schema({
    userId: {type: Schema.Types.ObjectId,ref:'User'},  //用户id
    groupId: {type: Schema.Types.ObjectId,ref:'Group'},  //群id
    message: {type: String},        //内容
    type: {type: String},        //类型
    time: {type: Date},        //发送时间
});

module.exports = db.model('User', UserSchema);
module.exports = db.model('Friend', FriendSchema);
module.exports = db.model('Message', MessageSchema);
module.exports = db.model('Group', GroupSchema);
module.exports = db.model('GroupMember', GroupMemberSchema);
module.exports = db.model('GroupMessage', GroupMessageSchema);