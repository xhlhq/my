//token
//引入token
var jwt = require('jsonwebtoken');


let secret = 'my_chat';
//生成token
exports.generateToken = function(e){
    let payload = {id: e,time: new Date()};
    //expiresIn:token保存的时间
    let token = jwt.sign(payload,secret,{expiresIn: 60 * 60 * 24 * 30});
    return token;
}

//解码token
exports.verifyToken = function(e){
    let payload;
    jwt.verify(e,secret,function(err,result){
        if(err){
            //token验证未通过
            payload = 0;
        }else{
            //token验证通过
            payload = 1;
        }
    });
    return payload;
}