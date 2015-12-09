import React, { Component, PropTypes } from 'react-native';

const { Image, TouchableOpacity } = React;

export default class Login extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Image source={require('./assets/fb-login-button.png')}/>
            </TouchableOpacity>
        );
    }
}

Login.propTypes = {
    onPress: PropTypes.func.isRequired
};
