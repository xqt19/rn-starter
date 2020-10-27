import React, {useReducer} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const INCREMENTAL_VALUE = 10
const STARTING_VALUE = 5

const reducer= (state, action) => {
    switch (action.type){
        case 'INCREASE_NUMBER':
            return {...state, number: state.number + action.payload}

        case 'DECREASE_NUMBER':
            return {...state, number: state.number - action.payload}

        default:
            return state
    }
}
const CounterScreenWReducer = () => {
    const [state, dispatch] = useReducer(reducer, {number: STARTING_VALUE})
    return(
        <View>
            <Text style={styles.headerStyle}>Counter Screen! w Reducer!</Text>    
            <Text style={styles.headerStyle}>{`${state.number}`}</Text>
            <Button 
            title={`Plus ${INCREMENTAL_VALUE}`} 
            onPress={()=>{dispatch({ type:'INCREASE_NUMBER', payload:INCREMENTAL_VALUE })}}/>
            <Button 
            title={`Minus ${INCREMENTAL_VALUE}`}
            onPress = {()=>{ dispatch({ type:'DECREASE_NUMBER', payload:INCREMENTAL_VALUE })  }} />       
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        textAlign: "center",
        fontSize: 30
    }
})

export default CounterScreenWReducer