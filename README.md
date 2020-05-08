# Basic structure to use WebDriverIO and Appium to test Ionic Applications


These are the configurations of the environment variables that I had to do in my .bash_profile:

export JAVA_HOME=`/usr/libexec/java_home -v 1.8`

export ANDROID_HOME=/Users/fernandoteixeira/Library/Android/sdk
export ANDROID_SDK_ROOT=/Users/fernandoteixeira/Library/Android/sdk
PATH=$JAVA_HOME:$PATH
PATH=$ANDROID_HOME:$PATH
PATH=$JAVA_HOME/bin:$PATH
export PATH


# Commands to be executed

* Clone this repository
* > npm install
* Recommended: To verify if appium and all the environment variables are configured as expected, install the dependency appium-doctor and run: 
    > appium-doctor
* Inside the folder AppiumTest, execute the following commands: 
    * > cordova platform add android 
    * > cordova build android
    * > cordova platform add ios 
    * > cordova build ios
* Check if the chrome driver is compatible with the chrome browser that your device have
* > npm test


# Other important information

* More information on how to inspect the elements on a webview: https://developers.google.com/web/tools/chrome-devtools/remote-debugging?utm_campaign=2016q3&utm_medium=redirect&utm_source=dcc

* more information about chrome driver compatibility:
    * https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/web/chromedriver.md
    * https://appiumpro.com/editions/93-managing-chromedriver-for-android-chrome-and-webview-testing


* Appium Cli arguments: http://appium.io/docs/en/writing-running-appium/server-args/

* Appium Desired capabilities: http://appium.io/docs/en/writing-running-appium/caps/