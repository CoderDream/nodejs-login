const Browser = require('zombie');
Browser.localhost('localhost', 3000);
describe('User visits signup page', function() {

    const browser = new Browser();

    before(function(done) {
        browser.visit('/', done);
    });

    describe('submits form', function() {

        before(function(done) {
            // let b =browser.fill('username', 'user').then((a)=>{
            //     let d=a;
            //     let c=arguments;
            //     debugger;
            // });
            // if(b === browser) {
            //     console.log('ok');
            // }
            // else {
            //     console.log('b: ' + JSON.stringify(b));
            //     console.log('browser: ' + JSON.stringify(browser));
            // }
            // browser.fill('username', 'user').then(function(){
            //     let a=arguments;
            //     debugger;
            //     browser.fill('password', '123').then(function(){
            //         let a=arguments;
            //         debugger;
            //         browser.pressButton('login', done);
            //         // .then(function(){
            //         //     let a=arguments;
            //         //     debugger;
            //         // });
            //     });
            // });

            browser.fill('username', 'user');
            browser.fill('password', '123');
            browser.pressButton('login', done);

/*            browser
                .fill('username', 'user')
                .fill('password', '123')
                .pressButton('login', done);*/
        });

        it('should be successful', function() {
            browser.assert.success();
        });

        it('should see welcome page', function() {
            //browser.assert.text('title', '登录成功，账号密码为：user---123');
            browser.assert.text('body', '登录成功，账号密码为：user---123');
        });
    });
});
