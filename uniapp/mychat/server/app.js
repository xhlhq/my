//用于解析body的插件
var bodyParser = require('body-parser');
var jwt = require('./db/jwt');

const express = require('express')
const app = express()
const port = 3001


//跨域解决方案
// app.all('*', function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     res.header('Access-Control-Allow-Methods', '*');
//     res.header('Content-Type', 'application/json;charset=utf-8');
//     next();
// });
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    if(req.method == "OPTIONS"){
        res.sendStatus(200);
    }else{
        next();
    }
});

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//token判断
app.use((req,res,next) => {
    if(typeof(req.body.token) == 'undefined'){
        //如果token没定义，也就是没携带token
        let token = req.body.token;
        let tokenMatch = jwt.verifyToken(token);
    }else{
        next();
    }
})

//引入路由
require('./router/index')(app);
//404页面
app.use((req,res,next) => {
    let err = new Error('Not Found!');
    err.status = 404;
    next(err);
})
//出现错误处理
app.use((req,res,next) => {
    res.status(err.status || 500);
    // 将错误发送给前端
    res.send(err.message);
})

app.listen(port, () => {
  console.log(`服务器已启动 http://localhost:${port}`)
})