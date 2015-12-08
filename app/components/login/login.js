import React, { Component, PropTypes } from 'react-native';

const { StyleSheet, Image, TouchableOpacity } = React;
const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: '#01579B'
    }
});

export default class Login extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Image style={styles.text} source={require('./assets/fb-login-button.png')}/>
            </TouchableOpacity>
        );
    }
}

Login.propTypes = {
    onPress: PropTypes.func.isRequired
};
