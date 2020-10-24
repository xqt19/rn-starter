import React, {useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const ColourCounter = (props) => {
    return(
        <View>
            <Text style={styles.headerStyle}>{props.hue}</Text>
            <Button title={`Increase ${props.hue}`} onPress={()=>{props.function(props.value+20)} }/>
            <Button title={`Decrease ${props.hue}`} onPress={()=>{props.function(props.value-20)} } />
        </View>
    
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        textAlign: "center",
        fontSize: 30
    }
})

export default ColourCounter