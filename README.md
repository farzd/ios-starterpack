# ios-starterpack
React Native, Redux, Facebook Login [https://github.com/facebook/react-native-fbsdk]

npm start to run

1. Facebook SDK should be located in the same level as the project root in folder 'FacebookSDK'
2. For now both the FacebookSDK and your project need to be in the 'Documents' folder.
3. [Drag FBSDKCoreKit/FBSDKLoginKit.framework files to Framwork folder in xcode project](https://developers.facebook.com/docs/ios/getting-started)
4. Make sure searchpath in build settings links to Facebook SDK folder
5. [Add react-native-fbsdkcore + react-native-fbsdklogin npm xcode files to Library](http://facebook.github.io/react-native/docs/linking-libraries-ios.html)
6. Make sure plist has facebook app id and allows required NSAppTransportSecurity[Copy from Sample in react-native-fbsdk]
7. Update Appdelegate.m [Copy from Sample in react-native-fbsdk]

![alt text](http://i.imgur.com/VDNjicp.gifv, 'screenshot')
