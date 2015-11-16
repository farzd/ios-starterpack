# ios-starterpack
React Native, Redux, Facebook Login

npm start to run.

https://github.com/facebook/react-native-fbsdk

Facebook SDK should be located in the same level as the project root. Folder name FacebookSDK
Drag FBSDKCoreKit/FBSDKLoginKit.framework files to Framwork folder in xcode project
[https://developers.facebook.com/docs/ios/getting-started]
Make sure searchpath in build settings links to Facebook SDK folder
Add react-native-fbsdkcore + react-native-fbsdklogin npm xcode files to Library
[http://facebook.github.io/react-native/docs/linking-libraries-ios.html]
Make sure plist has facebook app id and allows required NSAppTransportSecurity 
[Copy from Sample in react-native-fbsdk]
Update Appdelegate.m [Copy from Sample in react-native-fbsdk]
