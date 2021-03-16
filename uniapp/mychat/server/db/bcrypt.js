// 对密码进行加密
var bcrypt =require('bcryptjs');

//生成hash密码
exports.encryption = function(e){
    //生成随机的字符串
    var salt = bcrypt.genSaltSync(10); 

    //生成hash密码
    var hash = bcrypt.hashSync(e, salt);

    return hash;
}

//对密码进行解密
exports.decode = function(e,hash){
    //验证对比，返回布尔值
    let isOk = bcrypt.compareSync(e, hash);
    //返回验证结果
    return isOk;
}