//连接邮箱
//发送邮件的插件引入
var nodemailer = require('nodemailer');
var credential = require('../config/credential')

//创建传输方式
var transport = nodemailer.createTransport({
    service: 'qq',
    auth: {
        user: credential.qq.user,
        pass: credential.qq.pass
    }
})

// 写连接方法并抛出
//注册时发送邮件给用户
exports.emailSignUp = function(email,res){
    let options = {
        from: '2874864487@qq.com',
        to: email, //收件人（注册用户）
        subject: '邀请您在mychat注册！！',//标题
        // text: '你好啊。', //纯文本内容
        html: '<h5>欢迎加入mychat</h5>' //可用html表示的内容
    }
    transport.sendMail(options,function(err,msg){
        if(err){
            res.send('邮件发送失败:',res);
            console.log('邮箱发送错误',err)
        }else{
            res.send('邮件发送成功')
            console.log('邮箱发送成功')
        }
    })
}