let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

//登录接口
router.post('/loginByMySQL', function (req, res, next) {
    let name = req.body.username;
    let pwd = req.body.password;
    let mysql = require('mysql');
    //配置连接
    let connection = mysql.createConnection({
        host: 'localhost',//主机地址
        user: 'root',//登录名
        password: '',//密码，我这里是空
        database:'nodejsdb'//数据库
    });
    //输入验证
    if (!name || name == "") {
        console.log("用户名不能为空");
        res.send('用户名不能为空');
        return;
    }
    if (!pwd || pwd == "") {
        console.log("密码不能为空");
        res.send('密码不能为空');
        return;
    }
    //查库比较
    connection.connect();
    connection.query('SELECT COUNT(*) checkNum FROM `t_user` WHERE name = \'' + name + '\' AND psw =\'' + pwd + '\'', function (err, rows, fields) {
        if (err) throw err;
        let checkNum = rows[0].checkNum;
        console.log('结果为: ', rows[0].checkNum);
        if (checkNum == 0) {
            console.log('账号或密码不正确');
            res.send('账号或密码不正确');
        } else {
            console.log('登录成功');
            //返回结果
            res.send('登录成功，账号密码为：' + name + "---" + pwd);
        }
    });
    //关闭连接
    connection.end();
});

//登录接口
router.post('/login', function (req, res, next) {
    let name = req.body.username;
    let pwd = req.body.password;
    //输入验证
    if (!name || name == "") {
        console.log("用户名不能为空");
        res.send('用户名不能为空');
        return;
    }
    if (!pwd || pwd == "") {
        console.log("密码不能为空");
        res.send('密码不能为空');
        return;
    }
    //硬编码比较
    if('user' === name && '123' === pwd) {
        console.log('登录成功');
        //返回结果
        res.send('登录成功，账号密码为：' + name + "---" + pwd);
    } else {
        console.log('账号或密码不正确');
        res.send('账号或密码不正确');
    }

});

module.exports = router;
