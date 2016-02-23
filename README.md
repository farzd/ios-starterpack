# ios-starterpack
React-native, Redux, [Facebook Login](https://github.com/facebook/react-native-fbsdk) starter pack. Uses Redux async actions to login with facebook and displays the users profile. It shows 'activity indicator' component when loading and outputs any errors to the screen, along with logout functionality.

npm start to run

1. Download and install the [Facebook SDK for iOS](https://developers.facebook.com/docs/ios) in the standard location at ~/Documents/FacebookSDK.
2. Create an iOS app in developers.facebook.com and follow the on screen instructions, adding any required XML snippets to your plist file.

If you want to start from scratch

0. react-native init AwesomeProject
1. Follow [Facebook SDK for iOS - Getting Started](https://developers.facebook.com/docs/ios/getting-started) up till step #5
2. Connect Application Delegate, update AppDelegate.m to the one in this project 
3. rnpm link [react-native-fbsdkcore/react-native-fbsdklogin need to be in your package.json], [check](http://facebook.github.io/react-native/docs/linking-libraries-ios.html)
4. Update plist once more with [LSApplicationQueriesSchemes](https://developers.facebook.com/docs/ios/ios9)
    
![alt text](http://i.imgur.com/VDNjicp.gif, 'screenshot')
