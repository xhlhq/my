var dbServer = require('../db/dbServer');
var emailServer = require('../db/emailServer');
const { signIn } = require('../server/signIn');

var singup = require('../server/signup');
var signin = require('../server/signIn');
var search = require('../server/search');

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
}