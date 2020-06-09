
const chromedriver = require('chromedriver');
const path = require('path');

module.exports = {
    src_folders: "tests",
    test_settings: {
        desktopChrome: {
            webdriver: {
                start_process: true,
                server_path: chromedriver.path,
                port: 4444,
                cli_args: ['--port=4444']
            },
            desiredCapabilities: {
                browserName: 'chrome'
            },
            screenshots: {
                enabled: true,
                path: 'screenshots'
            }
        },
        androidChrome: {
            selenium_start_process: false,
            selenium_port: 4723,
            selenium_host: '127.0.0.1',
            desiredCapabilities: {
                automationName: "uiautomator1",
                browserName: 'chrome',
                platformName: 'Android',
                deviceName: 'emulator-5554'
            },
        },
        androidNative: {
            selenium_start_process: false,
            selenium_port: 4723,
            selenium_host: '127.0.0.1',
            desiredCapabilities: {
                automationName: 'uiautomator1',
                browserName: '',
                app: path.join(__dirname, 'app', 'android', 'ApiDemos-debug.apk'),
                appPackage: 'io.appium.android.apis',
                platformName: 'Android',
                deviceName: 'emulator-5554'
            },
        }
    }
};
