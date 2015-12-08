import React, { Component, PropTypes } from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import Login from '../components/login/login';
import Profile from '../components/profile/profile';

const { StyleSheet, View, Text } = React;

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

class starterpack extends Component {
    render() {
        const { actions, login } = this.props;
        return (
            <View style={styles.wrapper}>
            { login.loggedIn ?
                <Profile onPress={() => actions.logout()} login={login} /> :
                <Login onPress={() => actions.login()} /> }
                { login.loading ? <Text style={styles.text}>loading...</Text> : null }
            </View>
        );
    }
}

starterpack.propTypes = {
    login: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        login: state.login
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(starterpack);
