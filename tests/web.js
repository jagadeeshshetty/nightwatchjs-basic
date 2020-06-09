
module.exports = {
    tags: ['desktopChrome', 'androidChrome'],
    '@disabled': false,

    'Test login': function (client) {
        client
            .url('http://the-internet.herokuapp.com/login')
            .waitForElementVisible('body', 48000)
            .assert.title('The Internet')
            .assert.visible('#username')
            .setValue('#username', 'tomsmith')
            .pause(1000)
            .setValue('#password', 'SuperSecretPassword!')
            .useXpath()
            .click('//button[@type="submit"]')
            .useCss()
            .waitForElementVisible('.flash.success', 48000)
            .assert.elementPresent('.flash.success')
            .end()
    }
}
