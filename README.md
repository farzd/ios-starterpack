# ios-starterpack
React Native, Redux, [Facebook Login](https://github.com/facebook/react-native-fbsdk) starter pack. Uses async actions in Redux to login with facebook and displays the users name/profile image. Shows Activity indicator component when loading and outputs any errors to the screen, along with logout functionality.

1. Download and install the [Facebook SDK for iOS](https://developers.facebook.com/docs/ios). The Xcode projects assume that they're installed in the standard location at ~/Documents/FacebookSDK.
2. You can either update the Frameworks path in Xcode by going to Build Settings and updating the Framework Search Paths or you can remove my instances and re-add them by :  [Drag FBSDKCoreKit/FBSDKLoginKit.framework files to Framwork folder in xcode project](https://developers.facebook.com/docs/ios/getting-started)
4. Make sure searchpath in build settings links to Facebook SDK folder
5. [Add react-native-fbsdkcore + react-native-fbsdklogin npm xcode files to Library](http://facebook.github.io/react-native/docs/linking-libraries-ios.html)
6. Make sure plist has YOUR facebook app id and allows required NSAppTransportSecurity[Copy from Sample in react-native-fbsdk]

npm start to run

![alt text](http://i.imgur.com/VDNjicp.gif, 'screenshot')
