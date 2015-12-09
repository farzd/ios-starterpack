import React, { Component, PropTypes } from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import Login from '../components/login/login';
import Profile from '../components/profile/profile';

const { StyleSheet, View, Text, ActivityIndicatorIOS } = React;

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        backgroundColor: '#EF6C00',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        color: '#01579B'
    }
});

class Starterpack extends Component {
    render() {
        const { actions, login, profile } = this.props;
        let profileComponent = <Profile onPress={() => actions.logout()} profile={profile} />;
        let loginComponent = <Login onPress={() => actions.login()} />;

        if (login.error) {
            loginComponent = <View><Login onPress={() => actions.login()} /><Text style={styles.text}>{login.error}</Text></View>;
        }

        if (login.loading) {
            loginComponent = <ActivityIndicatorIOS size="large" color="#3b5998" />;
            profileComponent = <ActivityIndicatorIOS size="large" color="#3b5998" />;
        }
        return (
            <View style={styles.wrapper}>
            { login.loggedIn ? profileComponent : loginComponent }
            </View>
        );
    }
}

Starterpack.propTypes = {
    login: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        login: state.login,
        profile: state.profile
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Starterpack);
