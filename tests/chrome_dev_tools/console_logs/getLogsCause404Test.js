
module.exports = {
    '@tags': ['getLogsCause404', 'chromeDevTools', 'chromeDevToolsConsoleLogs'],
    'Test getLogs functionality': function (client) {
        client
            .url('https://devtools.glitch.me/console/log.html')
            .waitForElementVisible('body', 48000)
            .assert.title('Get Started With Logging Messages')
            .assert.visible('#network')
            .click('#network')
            .pause(1000)
            .getLog('browser', function (logEntriesArray) {
                console.log('Log length: ' + logEntriesArray.length);
                logEntriesArray.forEach(function (log) {
                    console.log('[' + log.level + '] ' + log.timestamp + ' : ' + log.message);
                });
            })
            .end();
    }
}
