//链接数据库
var mongoose = require('mongoose')

var db = mongoose.createConnection('mongodb://localhost:27017/mychat',{useUnifiedTopology: true,useNewUrlParser: true,useFindAndModify: false})
db.on('error', console.error.bind(console, '数据库连接失败:'));
db.once('open', function() {
  console.log('数据库连接成功')
});

module.exports = db