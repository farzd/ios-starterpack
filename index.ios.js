import React from 'react-native';
import FBSDKLogin from 'react-native-fbsdklogin';
const { FBSDKLoginButton } = FBSDKLogin;

const { AppRegistry, StyleSheet, Text, View } = React;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
class starterpack extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FBSDKLoginButton
                         onLoginFinished={(error, result) => {
                           if (error) {
                             alert('Error logging in.');
                           } else {
                             if (result.isCancelled) {
                               alert('Login cancelled.');
                             } else {
                               alert('Logged in.');
                             }
                           }
                         }}
                         onLogoutFinished={() => alert('Logged out.')}
                         readPermissions={[]}
                         publishPermissions={['publish_actions']}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('starterpack', () => starterpack);
