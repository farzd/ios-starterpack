import React from 'react-native';
import FBSDKLogin from 'react-native-fbsdklogin';
import FBSDKCore from 'react-native-fbsdkcore';
const { FBSDKLoginButton } = FBSDKLogin;
const { FBSDKAccessToken, FBSDKGraphRequest } = FBSDKCore;

const { AppRegistry, StyleSheet, View, Text, TouchableOpacity } = React;
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
    onLoginFinished(error, result) {
        if (error) {
            alert('Error logging in.');
        } else {
            if (result.isCancelled) {
                alert('Login cancelled.');
            } else {
                alert('Logged in.');
            }
        }
    }

    onLogoutFinished() {
        alert('Logged out.');
    }

    getAccessToken() {
        FBSDKAccessToken.getCurrentAccessToken((token) => {
            if (token) {
                return alert(JSON.stringify(token));
            }
            alert('no token');
        });
    }

    getInfo() {
        const fetchFriendsRequest = new FBSDKGraphRequest((error, result) => {
            if (error) {
                alert('Error making request.');
            } else {
                // Data from request is in result
                alert(JSON.stringify(result));
            }
        }, '/me/');
        // Start the graph request.
        fetchFriendsRequest.start();
    }

    refreshToken() {
        FBSDKAccessToken.refreshCurrentAccessToken((response) => {
            alert(JSON.stringify(response));
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <FBSDKLoginButton
                    onLoginFinished={this.onLoginFinished}
                    onLogoutFinished={this.onLogoutFinished}
                    readPermissions={['public_profile', 'email', 'user_friends']}
                    publishPermissions={['publish_actions']}/>

                <TouchableOpacity onPress={this.getAccessToken}>
                    <Text>Get Accesstoken</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.refreshToken}>
                    <Text>Refresh token</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.getInfo}>
                    <Text>Get info</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

AppRegistry.registerComponent('starterpack', () => starterpack);
