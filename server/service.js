/*
 * @Author: zhanghui rem486@qq.com
 * @Date: 2022-09-23 14:47:08
 * @LastEditors: zhanghui rem486@qq.com
 * @LastEditTime: 2022-09-26 10:54:32
 * @FilePath: \dns-new\service.js
 * @Description: 本地预览，具体看 README.md
 */
const express = require('express')
const axios = require('axios');
const app = express();
var cors = require('cors');
app.use(cors());


// 处理单页应用路由
// app.use(history())

// 代理对象地址
app.get('/a', (req, res) => {
  console.log(req);
  // const id1 = req.query.id1;
  const id = req.query.id;
  const id1 = req.query.id1;
  const id2 = req.query.id2;
  const id3 = req.query.id3;
  const id4 = req.query.id4;
  const id5 = req.query.id5;
  const id6 = req.query.id6;
  if (!id) {
    res.send({
      code: -1,
      msg: "缺少名字"
    });
    return
  }
  axios.post(
    'http://www.yishuzi.com/a/re.php', {
      id: id,
      id1: id1,
      id2: id2,
      id3: id3,
      id4: id4, 
      id5: id5,
      id6: id6,
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Referer: 'http://www.yishuzi.com/'
      }
    }
  ).then((result) => {
    if (result.status == 200) {
      let img = "";
      if (result.data) {
        try {
          img = result.data.match(/<img src="(\S*)">/)[1];
          res.send({
            code: 0,
            msg: "ok",
            data: img
          });
          return
        } catch (error) {
          console.error(error);
          res.send({
            code: -1,
            msg: "请求失败"
          });
          return
        }
      }
    }
    res.send({
      code: -1,
      msg: "请求失败"
    });
  }).catch((err) => {
    console.error(err);
    res.send({
      code: -1,
      msg: "请求失败"
    });
  });
})

// 加载静态资源

// 启动服务
app.listen(5677, () => {
  console.log('success => http://localhost:5677')
})