import FBSDKLogin from 'react-native-fbsdklogin';
import FBSDKCore from 'react-native-fbsdkcore';
import { config } from '../configuration';

const { FBSDKLoginManager} = FBSDKLogin;
const { FBSDKGraphRequest } = FBSDKCore;

function getInfo() {
    return new Promise((resolve, reject) => {
        const fetchFriendsRequest = new FBSDKGraphRequest((error, result) => {
            if (error) {
                reject('error making request. ' + error);
            } else {
                resolve(result);
            }
        }, config.facebookUserRequest);
        fetchFriendsRequest.start();
    });
}

export function facebookLogin() {
    return new Promise((resolve, reject) => {
        FBSDKLoginManager.logInWithReadPermissions(config.facebookReadPermissions, (error, result) => {
            if (error) {
                reject('error: ' + error);
            } else {
                if (result.isCancelled) {
                    reject('error: login cancelled');
                } else {
                    getInfo().then((userDetails) => {
                        resolve(userDetails);
                    }).catch((requestError) => {
                        reject(requestError);
                    });
                }
            }
        });
    });
}

export function facebookLogout() {
    return new Promise((resolve) => {
        FBSDKLoginManager.logOut();
        return resolve();
    });
}
