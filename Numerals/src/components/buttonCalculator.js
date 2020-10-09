import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text, StyleSheet
} from 'react-native';

export default class ButtonCalculator extends Component {

    render() {
        return (
            <TouchableOpacity style={[styles.inputButton, this.props.highlight ? styles.inputButtonHighlighted : null]}
                                underlayColor="#193441"
                                onPress={this.props.onPress}>
                <Text style={styles.inputButtonText}>{this.props.value}</Text>
            </TouchableOpacity>
        )
    }
} 

const styles = StyleSheet.create({
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#91AA9D',
      
    },
    inputButtonHighlighted: {
        backgroundColor: '#EB960E'
    },
    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
});