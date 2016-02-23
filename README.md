# ios-starterpack
React-native, Redux, [Facebook Login](https://github.com/facebook/react-native-fbsdk) starter pack. Uses Redux async actions to login with facebook and displays the users profile. It shows 'activity indicator' component when loading and outputs any errors to the screen, along with logout functionality.

npm start to run

1. Download and install the [Facebook SDK for iOS](https://developers.facebook.com/docs/ios) in the standard location at ~/Documents/FacebookSDK.
2. You can either update the frameworks path in Xcode by going to 'Build Settings' and updating the 'Framework Search Paths' or you can remove my instances and re-add them by :  [Dragging FBSDKCoreKit/FBSDKLoginKit.framework files to Framwork folder in Xcode](https://developers.facebook.com/docs/ios/getting-started)
4. React-native facebook login npm libs are already linked : [Adding react-native-fbsdkcore + react-native-fbsdklogin npm Xcode files to Library](http://facebook.github.io/react-native/docs/linking-libraries-ios.html)
6. Create an iOS app in developers.facebook.com and follow the on screen instructions, adding any required XML snippets to your plist file and supplying the facebook iOS app with the bundle identifer. Dont forget [LSApplicationQueriesSchemes](https://developers.facebook.com/docs/ios/ios9)

If you want to start from scratch

0. react-native init AwesomeProject
1. Follow [Facebook SDK for iOS - Getting Started](https://developers.facebook.com/docs/ios/getting-started) up till step #5
2. Connect Application Delegate, update AppDelegate.m to the one in this project 
3. rnpm link [react-native-fbsdkcore/react-native-fbsdklogin need to be in your package.json], [check](http://facebook.github.io/react-native/docs/linking-libraries-ios.html)
4. Update plist once more with [LSApplicationQueriesSchemes](https://developers.facebook.com/docs/ios/ios9)
    
![alt text](http://i.imgur.com/VDNjicp.gif, 'screenshot')
