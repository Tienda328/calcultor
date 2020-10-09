import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Item extends PureComponent {
    render() {
        const { number, style, styleTxt, click } = this.props
        return (
            <TouchableOpacity style={[styles.container,style]} onPress={click}>
                <Text style={[styles.txt,styleTxt]}>{number}</Text>
            </TouchableOpacity>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#424242',
        height: 75,
        borderRadius: 4,
        width: 75,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginVertical: 4,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginHorizontal: 4,
        elevation: 5,
    },
    txt: {
        fontWeight: '300',
        fontWeight:'600',
        fontSize: 25,
        color: '#FF8000'
    }
});
