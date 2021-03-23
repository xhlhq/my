var dbServer = require('../db/dbServer');
var emailServer = require('../db/emailServer');
const { signIn } = require('../server/signIn');

var singup = require('../server/signup');
var signin = require('../server/signIn');
var search = require('../server/search');
var user = require('../server/user');
var friend = require('../server/friend');
var index = require('../server/index');

module.exports = function(app){
    app.get('/test',(req,res) => {
        // res.send('用于测试')
        dbServer.findUser(res);
    });
    //邮箱测试
    app.post('/mail',(req,res) => {
        let mail = req.body.mail;
        emailServer.emailSignUp(mail,res);
        // res.send(mail);
    })
    //************注册页面
    //用户注册
    app.post('/singup/add',(req,res) => {
        singup.signUp(req,res);
    })

    //判断用户或邮箱是否被占用
    app.post('/singup/validate',(req,res) => {
        singup.userValidate(req,res);
    })

    //**********登陆页面
    //登录
    app.post('/signin/match',(req,res) => {
        signin.signIn(req,res);
    })
    //token验证测试
    // app.post('/signin/test',(req,res) => {
    //     signin.test(req,res);
    // })

    //**********搜索页面 */
    //搜索用户
    app.post('/search/user',(req,res) => {
        search.searchUser(req,res);
    })
    //判断是否为好友
    app.post('/search/isfriend',(req,res) => {
        search.isFriend(req,res);
    })
    //搜索群组
    app.post('/search/group',(req,res) => {
        search.searchGroup(req,res);
    })
    //判断是否加入了群组
    app.post('/search/isingroup',(req,res) => {
        search.isInGroup(req,res);
    })
    //用户详情
    app.post('/user/detail',(req,res) => {
        user.userDetail(req,res);
    })
     //修改用户详情
     app.post('/user/update',(req,res) => {
        user.userUpdate(req,res);
    })
    //修改好友昵称
    app.post('/user/getnickname',(req,res) => {
        user.getFriendNickname(req,res);
    })
     //修改好友昵称
     app.post('/user/remakenickname',(req,res) => {
        user.remakeFriendNickname(req,res);
    })
    
    //好友操作
    //好友申请
    app.post('/friend/apply',(req,res) => {
        friend.applyFriend(req,res);
    })
    //更新好友状态
    app.post('/friend/update',(req,res) => {
        friend.updateFriendState(req,res);
    })
    //拒绝或删除好友
    app.post('/friend/delete',(req,res) => {
        friend.deleteFriend(req,res);
    })

    //首页
    //获取好友列表
    app.post('/index/get_user_list',(req,res) => {
        index.getUserList(req,res);
    })
    //获取最后一条一对一消息
    app.post('/index/get_last_msg',(req,res) => {
        index.getLastMsg(req,res);
    })
    //获取未读消息数
    app.post('/index/unread_msg',(req,res) => {
        index.unreadMsgNumber(req,res);
    })
    //清空未读消息数
    app.post('/index/empty_msg',(req,res) => {
        index.emptyMsgNumber(req,res);
    })
    //获取群列表
    app.post('/index/get_group_list',(req,res) => {
        index.getGroupList(req,res);
    })
    //获取最后一条群消息
    app.post('/index/get_group_last_msg',(req,res) => {
        index.getGroupLastMsg(req,res);
    })
    //清空未读群消息
    app.post('/index/empty_group_msg',(req,res) => {
        index.emptyGroupMsgNumber(req,res);
    })
}