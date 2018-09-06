# nodejs-login

基于node.js 的 Express工程，使用mocha、zombie 进行跨页测试。

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