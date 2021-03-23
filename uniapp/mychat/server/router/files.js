//专门处理上传的文件
var multer  = require('multer');
var mkdir = require('../db/mkdir');

//有两个选项可用，destination 和 filename。他们都是用来确定文件存储位置的函数。
//destination 是用来确定上传的文件应该存储在哪个文件夹中
//filename 用于确定文件夹中的文件名的确定
var storage = multer.diskStorage({
      destination: function (req, file, cb) {
      let url = req.body.url;
      //根据url自动创建文件
      mkdir.mkdirs('../data/' + url,err => {
          console.log('err:',err);
      })
      cb(null, './data/' + url);
    },
    filename: function (req, file, cb) {
      let name = req.body.name;
        //正则匹配后缀名
      let ext = file.originalname.replace(/.+\./,'.');
      cb(null, name + ext);
    }
  })
  
  var upload = multer({ storage: storage })

  module.exports = function(app){
      //前端文件上传
      app.post('/files/upload', upload.array('file', 9), function (req, res, next) {
        // req.files 是 `photos` 文件数组的信息
        // req.body 将具有文本域数据，如果存在的话
        let data = req.files[0];
        res.send(data);
      })
  }