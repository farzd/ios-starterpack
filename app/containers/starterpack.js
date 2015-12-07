import React, { Component, PropTypes } from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

const { StyleSheet, View, Text, Image, TouchableOpacity } = React;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#EF6C00',
        position: 'relative',
        justifyContent: 'center'
    },
    button: {
        fontSize: 30,
        color: '#01579B',
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
                <View>
                <Text style={styles.text}>welcome {login.name}({login.id})</Text>
                <TouchableOpacity onPress={() => actions.logout()}>
                        <Text style={styles.button}>logout</Text>
                </TouchableOpacity>
                </View> :
                <TouchableOpacity onPress={() => actions.login()}>
                    <Image style={styles.button} source={require('./assets/fb-login-button.png')}/>
                </TouchableOpacity> }
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
