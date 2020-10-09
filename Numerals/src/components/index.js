import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Item from './item';

export default class Index extends PureComponent {
    constructor(props){
        super(props);
        this.state= {
            displayNumber:null,
        }
    }

    onC =() =>{
        const {displayNumber} =this.state;
        this.setState({
            displayNumber: null
        })
    }
    onOne =() =>{
        const {displayNumber} =this.state;
        this.setState({
            displayNumber: 1
        })
    }
    onTwe =() =>{
        const {displayNumber} =this.state;
        this.setState({
            displayNumber: 2
        })
    }
    onThree =() =>{
        const {displayNumber} =this.state;
        this.setState({
            displayNumber: 3
        })
    }
    onFour =() =>{
        const {displayNumber} =this.state;
        this.setState({
            displayNumber: 4
        })
    }
    onFive =() =>{
        const {displayNumber} =this.state;
        this.setState({
            displayNumber: 5
        })
    }
    onSix =() =>{
        const {displayNumber} =this.state;
        this.setState({
            displayNumber: 6
        })
    }
    onSever =() =>{
        const {displayNumber} =this.state;
        this.setState({
            displayNumber: 7
        })
    }
    onEight =() =>{
        const {displayNumber} =this.state;
        this.setState({
            displayNumber: 8
        })
    }
    onNine =() =>{
        const {displayNumber} =this.state;
        this.setState({
            displayNumber: 9
        })
    }
    render() {
        const {displayNumber} =this.state;
        return (
            <View style={styles.container}>

                <View style={styles.containerDisplays}>
                <Text style={styles.txtNumber}></Text>
                    <Text style={styles.txtNumber}>{displayNumber}</Text>
                </View>
                <View style={styles.straight}></View>
                <View style={styles.containerNumber}>
                    <View style={styles.containerLine}>
                        <Item number='C' style={{backgroundColor:'#fff'}} styleTxt={{color:'#FF8000'}} click={this.onC}/>
                        <Item number='+/-' click={this.onC}/>
                        <Item number='ce' style={{backgroundColor:'red'}} styleTxt={{color:'#fff'}} click={this.onC}/>
                        <Item number='/' style={{backgroundColor:'#FF8000'}} styleTxt={{color:'#fff'}} click={this.onC}/>
                    </View>
                    <View style={styles.containerLine}>
                        <Item number='7' click={this.onSever}/>
                        <Item number='8' click={this.onEight}/>
                        <Item number='9' click={this.onNine}/>
                        <Item number='+' style={{backgroundColor:'#FF8000'}} styleTxt={{color:'#fff'}} click={this.onC}/>
                    </View>
                    <View style={styles.containerLine}>
                        <Item number='4' click={this.onFour}/>
                        <Item number='5' click={this.onFive}/>
                        <Item number='6' click={this.onSix}/>
                        <Item number='-' style={{backgroundColor:'#FF8000'}} styleTxt={{color:'#fff'}} click={this.onC}/>
                    </View>
                    <View style={styles.containerLine}>
                        <Item number='1' click={this.onOne}/>
                        <Item number='2' click={this.onTwe}/>
                        <Item number='3' click={this.onThree} />
                        <Item number='x'  click={this.onC} style={{backgroundColor:'#FF8000'}} styleTxt={{color:'#fff'}}/>
                    </View>
                    <View style={styles.containerLine}>
                        <Item number='0' style={{width: 154}} click={this.onC}/>
                        <Item number='.' click={this.onC}/>
                        <Item number='=' style={{backgroundColor:'#fff'}} styleTxt={{color:'#000'}}click={this.onC}/>
                    </View>
                </View>

            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#151515',
        flex: 1,
    },
    straight:{
        height: 3,
        backgroundColor:'#FF8000',
        width:'100%',
    },
    test: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTitle: {
        backgroundColor: '#000'
    },
    containerLine: {
        flexDirection: 'row'
    },
    txtNumber:{
        fontSize: 55,
        fontWeight: '500',
        color:'#fff',
        marginBottom:6
    },
    txtTilte: {
        fontSize: 35,
        fontWeight: '500',
        color: '#FF8000'
    },
    containerNumber: {
        // justifyContent: 'center',
        alignItems: 'center',
    },
    containerDisplays: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection:'row',
        height: 350,
        flex: 1,
        marginHorizontal: 10,
        borderRadius: 12
    }
});
