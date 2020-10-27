import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const ColourCounterWReducer = ({colour, functionIncrease, functionDecrease}) => {
    return(
        <View>
            <Button title={`Increase ${colour}`} onPress={functionIncrease} />
            <Button title={`Decrease ${colour}`} onPress={functionDecrease}/>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        textAlign: "center",
        fontSize: 30
    }
})

export default ColourCounterWReducer