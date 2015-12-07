import React, { Component, PropTypes } from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

const { StyleSheet, View, Text, TouchableOpacity } = React;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        position: 'relative'
    },
    button: {
        fontSize: 30,
        color: '#00FF00'
    },
    text: {
        fontSize: 20,
        color: '#e74c3c'
    }
});

class starterpack extends Component {
    render() {
        const { actions, login } = this.props;
        return (
            <View style={styles.wrapper}>
            { login.loggedIn ?
                <View>
                <Text style={styles.text}>login ID: {login.id}</Text>
                <TouchableOpacity onPress={() => actions.logout()}>
                        <Text style={styles.button}>logout</Text>
                </TouchableOpacity>
                </View> :
                <TouchableOpacity onPress={() => actions.login()}>
                    <Text style={styles.button}>log in</Text>
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
