import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const ColourScreen = () => {
    return(
        <Text style={styles.headerStyle}>Colour Screen!</Text>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        textAlign: "center",
        fontSize: 30
    }
})

export default ColourScreen