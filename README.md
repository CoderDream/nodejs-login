# nodejs-login

基于node.js 的 Express工程，使用mocha、zombie 进行跨页测试。



### 启动项目

```
安装最新的 PowerShell，了解新功能和改进！https://aka.ms/PSWindows
PS D:\04_GitHub\nodejs\nodejs-login> npm start
> nodejs-login@0.0.0 start D:\04_GitHub\nodejs\nodejs-login
> node ./bin/www
GET / 200 8.568 ms - 1219
GET /stylesheets/style.css 200 9.714 ms - 119
GET /stylesheets/bootstrap-theme.css 200 5.966 ms - 26719
GET /stylesheets/bootstrap.css 200 9.535 ms - 154230
GET /javascripts/bootstrap.js 200 6.099 ms - 71253
GET /javascripts/jquery.js 200 9.004 ms - 282988
GET /favicon.ico 404 1.953 ms - 1026
登录成功
POST /login 200 21.512 ms - 43
```



 ![image-20221025095625718](https://github.com/CoderDream/nodejs-login/blob/master/snapshot/image-20221025095625718.png)



## 登陆页面 ##



- 参数设置

![](https://github.com/CoderDream/nodejs-login/blob/master/snapshot/zombie_04.png)


- 登陆成功

![](https://github.com/CoderDream/nodejs-login/blob/master/snapshot/zombie_05.png)



- 登陆失败：密码不能为空

![](https://github.com/CoderDream/nodejs-login/blob/master/snapshot/zombie_06.png)



- 登陆失败：用户名或密码不正确

![](https://github.com/CoderDream/nodejs-login/blob/master/snapshot/zombie_07.png)


## 使用WebStorm的Mocha控件进行 web 测试 ##



- 参数设置

![](https://github.com/CoderDream/nodejs-login/blob/master/snapshot/zombie_01.png)



- 执行结果

![](https://github.com/CoderDream/nodejs-login/blob/master/snapshot/zombie_02.png)


## 使用命令行 ##

- 执行命令

```shell
mocha -u tdd -R spec test/zombie.js
```


- 运行结果

```shell
  User visits signup page
    submits form
      √ should be successful
      √ should see welcome page


  2 passing (264ms)
```

![](https://github.com/CoderDream/nodejs-login/blob/master/snapshot/zombie_03.png)

参考：
1. [Node.js学习（四）——实现用户登录功能](https://blog.csdn.net/flygoa/article/details/52767076)
2. [使用Zombie.js进行Web自动化测试](https://www.jianshu.com/p/0a0af07d95d1)
3. [nodejs实现登录注册系统](https://blog.csdn.net/cramon/article/details/54983591)
4. [用NodeJS完成简单的身份验证](https://blog.csdn.net/kuangruike/article/details/52607141)