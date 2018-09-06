const Browser = require('zombie');
Browser.localhost('localhost', 3000);
describe('User visits signup page', function() {

    const browser = new Browser();

    before(function(done) {
        browser.visit('/', done);
    });

    describe('submits form', function() {

        before(function(done) {
            browser
                .fill('username',    'user')
                .fill('password', '123')
                .pressButton('登陆', done);
        });

        it('should be successful', function() {
            browser.assert.success();
        });

        it('should see welcome page', function() {
            browser.assert.text('title', '登录成功，账号密码为：user---123');
        });
    });
});
