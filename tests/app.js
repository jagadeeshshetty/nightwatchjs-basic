
module.exports = {
    tags: ['androidNative'],
    '@disabled': false,

    'Validate android app invoke.': function (client) {
        let appLocator = '//android.widget.TextView[@text="App"]';
        let alertDialogsLocator = '//android.widget.TextView[@text="Alert Dialogs"]';

        client
            .useXpath()
            .click(appLocator)
            .assert.elementPresent(alertDialogsLocator);
        client.end();
    }
};