# What is Nightwatch

![build](https://img.shields.io/badge/build-success-brightgreen.svg)
[![npm-version](https://img.shields.io/badge/nightwach-v1.1.11-important.svg)](https://www.npmjs.com/package/nightwatch/v/1.0.19)
[![npm-nightwatch](https://img.shields.io/badge/weekly%20downloads-155k%2B-brightgreen.svg?style=social&logo=appveyor)](https://www.npmjs.com/package/nightwatch)

[![author-linkedin](https://img.shields.io/badge/author-Jagadeesh%20Shetty-success.svg)](https://www.linkedin.com/in/jagadeesh-c-2a3a9423)

Nightwatch.js is an automated testing framework for web applications and websites, written in Node.js and using the [W3C WebDriver](https://www.w3.org/TR/webdriver/) API (formerly [Selenium WebDriver](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol)).

It is a complete End-to-End testing solution which aims to simplify writing automated tests and setting up Continuous Integration. Nightwatch can also be used for writing Node.js unit and integration tests.

_The name Nightwatch was inspired by the famous painting The Night Watch by Dutch artist Rembrandt van Rijn. The masterpiece is prominently displayed in the Rijksmuseum, in Amsterdam - The Netherlands._

# Overview of WebDriver

WebDriver is a general purpose library for automating web browsers. It was started as part of the [Selenium](https://docs.seleniumhq.org/projects/webdriver/) project, which is a popular and comprehensive set of tools for browser automation initially written for Java but now with support for most programming languages.

Nightwatch uses the [WebDriver API](https://www.w3.org/TR/webdriver/) to perform the browser automation related tasks, like opening windows and clicking links for instance.

WebDriver is now a W3C specification aiming to standardize browser automation. WebDriver is a remote control interface that enables introspection and control of user agents. It provides a platform and a restful HTTP api as a way for web browsers to be remotely controlled.

# Theory of Operation

Nightwatch works by communicating over a restful HTTP API with a WebDriver server (such as ChromeDriver or Selenium Server). The protocol is defined by the W3C WebDriver spec, which is derived from [JSON Wire protocol](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol). See below for an example workflow for browser initialization.

![alt text](images/operation.png)

Most of the times, Nightwatch needs to send at least 2 requests to the WebDriver server in order to perform a command or assertion.
...The first one being the request to locate an element given a CSS selector (or Xpath expression)
...Next to perform the actual command/assertion on the given element.

# Setup

1. **Node.js** should be installed.
2. **NPM** should be installed.
3. Create a directory with **nightwatchjs-basic** name.
4. Run `npm init` and complete with basic details.
5. Run `npm install nightwatch` to install nightwatch within workspace.
6. Download `selenium` and `chrome` drivers and copy to `bin` directory.
7. Create `nightwatch.json` file within working directory. The nightwatch test runner binary expects a configuration file.
8. Create `tests` directory and create `homepage.js` file.
9. Update `package.json` with test runner for `scripts` value.

# Screenshots

## nightwatch.conf.js

![alt text](images/nightwatch.conf.js.png)

## tests/homepage.js

![alt text](images/homepage.png)

## package.json

![alt text](images/package.png)

# Run

`$ npm run test`

![alt text](images/test-execution.png)

# Run with tags

- Single test case
  - `npm run test -- getLogsCause404`
  - `npm run test -- getLogsLogInfo`
- Multiple test cases
  - `getLogsCause404` and `getLogsLogInfo` both linked with `chromeDevTools` tag.
  - `npm run test -- chromeDevTools`

# Version changes

# 1.3.0

- Updated dependencies
  - Nightwatch `1.4.3`
  - Chromedriver `85.0.1`
- Updated test run command
- Updated readme with test run screenshot.

## 1.2.0

- Preserved with `1.2.0` tag.
- Nightwatch `1.1.11`, Chromedriver `74.0.0` version

## 1.1.0

- No need of individual driver download on mac and windows os. Removed explicit dependency on drivers. Now automatically download required drivers during `npm i` run.

## 1.0.0

- Basic project setup with Nightwatch framework and run.
- Depends on Selenium and Chrome web driver.

# Reference

[Official Nightwatch](http://nightwatchjs.org/gettingstarted)
