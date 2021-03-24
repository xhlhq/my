//处理数据库数据
var dbModel = require('../model/dbModel');
var User = dbModel.model('User');
var Friend = dbModel.model('Friend'); 
var Group = dbModel.model('Group');
var GroupMember = dbModel.model('GroupMember');
var Message = dbModel.model('Message');
var GroupMessage = dbModel.model('GroupMessage');


var bcrypt = require('../db/bcrypt');
var jwt = require('../db/jwt')

//用户注册，新建用户
exports.buildUser = function(name,email,password,res){
    //密码加密
    let psd = bcrypt.encryption(password);
    let data = {
        name: name,
        email: email,
        password: psd,
        time: new Date()
    }

    let user = new User(data);
    user.save((err,result) => {
        if(err){
            res.send({status: 500});
        }else{
            res.send({status: 200});
        }
    })
}


//匹配用户表项目元素个数,查看用户是否已存在
exports.countUserValue = function(data,type,res){
    let wherestr = {};
    wherestr[type] = data;

    //mongodb自带的查找文件个数函数
    User.countDocuments(wherestr, (err,result) => {
        if(err){
            res.send({status:500});
        }else{
            res.send({status:200,result});
        }
    })
}

//登陆页面，用户验证
exports.userMatch = function(data, password, res){
    //wherestr:输入的项，用于与数据库数据匹配
    //用户可能是用用户名或邮箱登录的
    let wherestr = {$or:[{'name':data},{'email':data}]};
    //out:输出的项,1:输出；0：不输出
    let out = {'name':1,'password':1,'imgurl':1};
    User.find(wherestr, out, (err, result) => {
        if(err){
            res.send({status:500});
        }else{
            if(result == ''){
                //没匹配到，用户不存在
                res.send({status:400});
            }else{
                result.map(function(e){
                    const psdMatch = bcrypt.decode(password,e.password);
                    if(psdMatch){
                        let token = jwt.generateToken(e._id);
                        let result = {
                            id: e._id,
                            name: e.name,
                            imgurl: e.imgurl,
                            token: token
                        }
                        res.send({status:200,result});
                    }else{
                        //密码错误
                        res.send({status:400});
                    }
                })
            }
        }
    })
}
////////////////////////搜索页面/////////////////////////
//搜索用户
exports.searchUser = function(data,res){
    if(data == 'mychat'){
        var wherestr = {};
    }else{
        //$regex,数据库中提供的正则表达式，用于模糊查找
        var wherestr = {$or:[{'name':{$regex:data}},{'email':{$regex:data}}]};
    }
    let out = {
        'name': 1,
        'email': 1,
        'imgurl': 1
    }
    User.find(wherestr,out,(err,result) => {
        if(err){
            res.send({status:500});
        }else{
            res.send({status:200,result});
        }
    })
}
//判断是否为好友
exports.isFriend = function(uid,fid,res){
    let wherestr = {'userId':uid,'friendId':fid,'status':0}
    Friend.findOne(wherestr,(err,result) => {
        if(err){
            res.send({status:500});
        }else{
            if(result){
                //找到，是好友
                res.send({status:200});
            }else{
                //没找到，不是好友
                res.send({status:400})
            }
        }
    })
}
//搜索群组
exports.searchGroup = function(data,res){
    if(data == 'mychat'){
        var wherestr = {};
    }else{
        var wherestr = {'name':{$regex:data}};
    }
    let out = {
        'name': 1,
        'imgUrl': 1
    };
    Group.find(wherestr,out,(err,result) => {
        if(err){
            res.send({status:500});
        }else{
            res.send({status:200,result});
        }
    })
}
//判断是否在群里
exports.isInGroup = function(uid,gid,res){
    let wherestr = {'userId':uid,'groupId':gid};
    GroupMember.findOne(wherestr,(err,result) => {
        if(err){
            res.send({status:500});
        }else{
            if(result){
                //在群内
                res.send({status:200});
            }else{
                //不在群内
                res.send({status:400});
            }
        }
    })
}
/////////////////////// 用户详情页 ////////////////
exports.userDetial = function(id,res){
    let wherestr = {'_id':id};
    let out = {'password':0};
    User.findOne(wherestr,out,(err,result) => {
        if(err){
            res.send({status:500,message:'用户详情查询失败'});
        }else{
            res.send({status:200,result});
        }
    })
}

///////////////////// 用户修改页 /////////////////
function update(data,update,res){
    User.findByIdAndUpdate(data,update,function(err,resove){
        if(err){
            //修改失败
            res.send({status:500,messgae:'修改失败'});
        }else{
            //修改成功
            res.send({status:200,message:'修改成功'});
        }
    })
}
exports.userUpdate = function(data,res){
    let updateStr = {};
    if(typeof(data.password) != 'undefined'){
        User.find({'_id':data.id}, {'password':1}, (err, result) => {
            if(err){
                res.send({status:500});
            }else{
                if(result == ''){
                    res.send({status:400});
                }else{
                    result.map(function(e){
                        const psdMatch = bcrypt.decode(data.password,e.password);
                        if(psdMatch){
                            //密码验证成功
                            //如果为修改密码
                            if(data.type == 'password'){
                                let password = bcrypt.encryption(data.data);
                                updateStr[data.type] = password;
                                update(data.id,updateStr,res);
                            }else{
                                updateStr[data.type] = data.data;
                                //确保修改后的邮箱未重复
                                User.countDocuments(updateStr, (err,result) => {
                                    if(err){
                                        res.send({status:500});
                                    }else{
                                        //没有匹配项，可以修改
                                        if(result == 0){
                                            update(data.id,updateStr,res);
                                        }else{
                                            //修改后的邮箱已存在，不能使用
                                            res.send({status:300,message:'邮箱已存在'})
                                        }
                                    }
                                })
                            }
                        }else{
                            //密码错误
                            res.send({status:400,message:'密码错误'});
                        }
                    })
                }
            }
        })
    }else if(data.type == 'name'){
        updateStr[data.type] = data.data;
        //确保修改后的姓名未重复
        User.countDocuments(updateStr, (err,result) => {
            if(err){
                res.send({status:500});
            }else{
                //没有匹配项，可以修改
                if(result == 0){
                    update(data.id,updateStr,res);
                }else{
                    //修改后的姓名已存在，不能使用
                    res.send({status:300,message:'用户名已存在'})
                }
            }
        })
    }else{
        //一般项修改
        updateStr[data.type] = data.data;
        update(data.id,updateStr,res);
    }
}
////////////////////// 好友昵称修改 //////////////////////
//获取好友昵称
exports.getFriendNickname = function(data,res){
    let wherestr = {'userId':data.uid,'friendId':fid};
    let out = {'nickName':1};
    Friend.findOne(wherestr,out,(err,result) => {
        if(err){
            //修改失败
            res.send({status:500});
        }else{
            //修改成功
            res.send({status:200,result});
        }
    })
}
//修改好友昵称
exports.remakeFriendNickname = function(data,res){
    let wherestr = {'userId':data.uid,'friendId':fid};
    let updateStr = {'nickName':data.name};
    Friend.updateOne(wherestr,updateStr,(err,result) => {
        if(err){
            //修改失败
            res.send({status:500});
        }else{
            //修改成功
            res.send({status:200});
        }
    })
}
////////////////////////////// 好友操作//////////
//创建好友表
exports.buildFriend = function(uid,fid,status,res){
    let data = {
        userId: uid,
        friendId: fid,
        status: status,
        time: new Date(),
        lastTiem: new Date(),
    }

    let friend = new Friend(data);
    friend.save((err,result) => {
        if(err){
            // res.send({status: 500});
            console.log('好申请出错');
        }else{
            // res.send({status: 200});
        }
    })
}
//添加一对一消息表
exports.buildFriendMessage = function(uid,fid,msg,type,res){
    let data = {
        userId: uid,
        friendId: fid,
        message: msg, // 0文字 1图片链接 2音频资源…
        types: type,
        status: 1,  //0已读 1未读
        time: new Date(),
    }

    let message = new Message(data);
    message.save((err,result) => {
        if(err){
            res.send({status: 500});
        }else{
            res.send({status: 200,message:msg});
        }
    })
}
//好友最后通讯时间
exports.friendLastMessageTime = function(data){
    let wherestr = {$or:[{'userId':data.uid,'friendId':data.fid},{'userId':data.fid,'friendId':data.uid}]};
    let updateStr = {'lastTime': new Date()};
    Friend.updateMany(wherestr,updateStr,(err,result) => {
        if(err){
            // res.send({status: 500});
            console.log('好友最后通讯时间更新出错');
        }else{
            // res.send({status: 200});
        }
    })
}
//好友申请
exports.applyFriend = function(data,res){
    //判断是否已经申请过好友
    let wherestr = ({'userId':data.uid,'friendId':data.fid});
    Friend.countDocuments(wherestr,(err,result) => {
        if(err){
            res.send({status:500});
        }else{
            if(result == 0){
                //初次申请
                this.buildFriend(data.uid,data.fid,2);
                this.buildFriend(data.fid,data.uid,1);
            }else{
                //已经申请过好友，更新最后通话时间
                this.friendLastMessageTime(data);
                // this.friendLastMessageTime(data.fid,data.uid);
            }
            //添加消息
            this.buildFriendMessage(data.uid,data.fid,data.msg,0,res);
        }
    })
}
//更新好友状态（好友通过）
exports.updateFriendState = function(data,res){
    let wherestr = {$or:[{'userId':data.uid,'friendId':data.fid},{'userId':data.fid,'friendId':data.uid}]};
    //改为已为好友 status:0
    Friend.updateMany(wherestr,{'status':0},(err,result) => {
        if(err){
            res.send({status:500});
        }else{
            res.send({status:200});
        }
    })
}
//拒绝或删除好友
exports.deleteFriend = function(data,res){
    let wherestr = {$or:[{'userId':data.uid,'friendId':data.fid},{'userId':data.fid,'friendId':data.uid}]};
    //改为已为好友 status:0
    Friend.deleteMany(wherestr,(err,result) => {
        if(err){
            res.send({status:500});
        }else{
            res.send({status:200,message:'好友删除成功'});
        }
    })
}
/////////////////////////////// 首页 /////////////////
//获取好友列表
exports.getUserList = function(data,res){
    let query = Friend.find({});
    //查询条件
    query.where({'userId':data.uid,'status':data.status});
    //查找与uid关联的user对象
    query.populate('friendId');
    //排序方式 根据最后一次通话进行倒叙排列
    query.sort({'lastTime':-1});
    //查询结果
    query.exec().then(e => {
        let result = e.map(item => {
            return {
                id: item.friendId._id,
                name: item.friendId.name,
                nickName: item.nickName,
                imgurl: item.friendId.imgurl,
                lastTime: item.lastTiem
            }
        })
        res.send({status:200,result});
    }).catch(err => {
        res.send({status:500});
    })
}
//获取最后一条一对一消息
exports.getLastMsg = function(data,res){
    let query = Message.findOne({});
    //查询条件
    query.where({$or:[{'userId':data.uid,'friendId':data.fid},{'userId':data.fid,'friendId':data.uid}]});
    //排序方式 根据最后一次通话进行倒叙排列
    query.sort({'time':-1});
    //查询结果
    query.exec().then(item => {
        let result = {
                message: item.message,
                types: item.types,
                time: item.time
            }
        res.send({status:200,result});
    }).catch(err => {
        res.send({status:500});
    })
}
//未读消息数
exports.unreadMsgNumber = function(data,res){
    //条件
    let wherestr = ({'userId':data.uid,'friendId':data.fid,'status':1});
    Message.countDocuments(wherestr,(err,result) => {
        if(err){
            res.send({status:500});
        }else{
            res.send({status:200,result});
        }
    })
}
//查看消息使未读消息数变为0
exports.emptyMsgNumber = function(data,res){
    //条件
    let wherestr = ({'userId':data.uid,'friendId':data.fid,'status':1});
    // 修改内容
    let updateStr = {'status':0};
    Message.updateMany(wherestr,updateStr,(err,result) => {
        if(err){
            res.send({status:500});
        }else{
            res.send({status:200});
        }
    })
}
//获取群列表
exports.getGroupList = function(uid,res){
    let query = GroupMember.find({});
    //查询条件
    query.where({'userId':uid});
    //查找与uid关联的群表对象
    query.populate('GroupId');
    //排序方式 根据最后一次通话进行倒叙排列
    query.sort({'lastTime':-1});
    //查询结果
    query.exec().then(e => {
        let result = e.map(item => {
            return {
                gid: item.groupId._id,
                groupName: item.groupId.name,
                userName: item.name,
                imgurl: item.groupId.imgUrl,
                lastTime: item.lastTiem,
                tip: item.tip
            }
        })
        res.send({status:200,result});
    }).catch(err => {
        res.send({status:500});
    })
}
//获取群最后一条消息数
exports.getGroupLastMsg = function(gid,res){
    let query = GroupMessage.findOne({});
    //查询条件
    query.where({'groupId':gid});
    //关联用户
    query.populate('userId');
    //排序方式 根据最后一次通话进行倒叙排列
    query.sort({'time':-1});
    //查询结果
    query.exec().then(item => {
        let result = {
                message: item.message,
                types: item.types,
                time: item.time,
                name: item.name
            }
        res.send({status:200,result});
    }).catch(err => {
        res.send({status:500});
    })
}
//查看消息使未读消息数变为0
exports.emptyGroupMsgNumber = function(data,res){
    //条件
    let wherestr = ({'userId':data.uid,'groupId':data.gid});
    // 修改内容
    let updateStr = {'tip':0};
    Message.updateOne(wherestr,updateStr,(err,result) => {
        if(err){
            res.send({status:500});
        }else{
            res.send({status:200});
        }
    })
}