import React, { Component, PropTypes } from 'react-native';

const { StyleSheet, View, Text, Image, TouchableOpacity } = React;
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#01579B'
    }
});

export default class Profile extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>{this.props.profile.name}</Text>
                <Image source={{uri: this.props.profile.profileURL}} style={{width: this.props.profile.profileWidth, height: this.props.profile.profileHeight}}/>
                <TouchableOpacity onPress={this.props.onPress}>
                        <Text style={styles.text}>logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

Profile.propTypes = {
    onPress: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};
