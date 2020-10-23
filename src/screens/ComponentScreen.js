import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'

const ComponentScreen =()=>{
    return(
        <Text style ={styles.textStyle}>Hello World! This is the ComponentScreen</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentScreen