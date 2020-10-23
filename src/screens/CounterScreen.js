import React, {useState, Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

// const CounterScreen = () => {
//     const [counter,slasher] = useState(0)
//     return(
    //     <View>
    //         <Text style={styles.headerStyle}>Counter Screen!</Text>
    //         <Button title="Increase" onPress={ ()=>{slasher(counter+1)} }/>
    //         <Button title="Decrease" onPress={ ()=>{slasher(counter-1)} }/>
    // <Text style={styles.headerStyle}>Current Count: {counter}</Text>
    //     </View>
//     )
// }
class CounterScreen extends Component{
    constructor(props){
        super(props)
        this.state ={
            counter: 0
        }
    }
    slasher(delta){
        let num = this.state.counter + delta
        this.setState({
            counter: num
        })
    }
    render(){
        return(
            <View>
                <Text style={styles.headerStyle}>Counter Screen!</Text>
                <Button title="Increase" onPress={ ()=>{this.slasher(1)} }/>
                <Button title="Decrease" onPress={ ()=>{this.slasher(-1)} }/>
                <Text style={styles.headerStyle}>Current Count: {this.state.counter}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        textAlign: "center",
        fontSize: 30
    }
})

export default CounterScreen