import React, { Component } from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

const { StyleSheet, View, Text, TouchableOpacity } = React;

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    position: 'relative'
  },
  button: {
    marginTop: 40,
      position: 'absolute',
      left: 100,
  },
  text: {
    fontSize: 30,
    color: '#e74c3c'
  }
});

class starterpack extends Component {
    render() {
        const { actions, login } = this.props;
        let loginText = null;
        let loginId = null;
        if (login.loggingIn) {
            loginText= 'logging in...';
        }
        if (login.id) {
            loginId= 'LOGIN ID=' + login.id;
        }
        return (
            <View style={styles.wrapper}>

                <TouchableOpacity style={styles.button} onPress={() => actions.login()}>
                        <Text style={styles.text}>log in</Text>
                </TouchableOpacity>
                <Text style={styles.text}>{loginText}</Text>
                <Text style={styles.text}>{loginId}</Text>
            </View>
        );
    }
}

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
