//处理数据库数据
var dbModel = require('../model/dbModel');
var User = dbModel.model('User');
var Friend = dbModel.model('Friend'); 
var Group = dbModel.model('Group');
var GroupMember = dbModel.model('GroupMember');


var bcrypt = require('../db/bcrypt');
var jwt = require('../db/jwt')

//用户注册，新建用户
exports.bulidUser = function(name,email,password,res){
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
            res.send({status:200},result)
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
                res.send({status:400,message:'用户不存在'});
            }else{
                result.map(function(e){
                    const psdMatch = bcrypt.decode(password,e.password);
                    if(psdMatch){
                        let token = jwt.generateToken(e._id);
                        let back = {
                            id: e._id,
                            name: e.name,
                            imgurl: e.imgurl,
                            token: token
                        }
                        res.send({status:200,back});
                    }else{
                        //密码错误
                        res.send({status:400,message:'密码错误'});
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
            res.send({status:500});
        }else{
            res.send({status:200,result});
        }
    })
}

///////////////////// 用户修改页 /////////////////
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
                            }else{
                                updateStr[data.type] = data.data;
                            }
                            User.findByIdAndUpdate(data.id,updateStr,function(err,resove){
                                if(err){
                                    //修改失败
                                    res.send({status:500});
                                }else{
                                    //修改成功
                                    res.send({status:200});
                                }
                            })
                        }else{
                            //密码错误
                            res.send({status:400,message:'密码错误'});
                        }
                    })
                }
            }
        })
    }else{
        //要设置的不是密码
        updateStr[data.type] = data.data;
        User.findByIdAndUpdate(data.id,updateStr,function(err,resove){
            if(err){
                //修改失败
                res.send({status:500});
            }else{
                //修改成功
                res.send({status:200});
            }
        })
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