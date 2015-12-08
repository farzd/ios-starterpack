import React, { Component, PropTypes } from 'react-native';

const { StyleSheet, View, Text, Image, TouchableOpacity } = React;
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#01579B'
    }
});

export default class Login extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>{this.props.login.name}</Text>
                <Image source={{uri: this.props.login.profileURL}} style={{width: this.props.login.profileWidth, height: this.props.login.profileHeight}}/>
                <TouchableOpacity onPress={this.props.onPress}>
                        <Text style={styles.text}>logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

Login.propTypes = {
    onPress: PropTypes.func.isRequired,
    login: PropTypes.object.isRequired
};
