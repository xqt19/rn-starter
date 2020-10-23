import React, {Component} from 'react'
import {Text, StyleSheet,View} from 'react-native'

//this const cant access the styles.nameStyle for some reason
const name = "Stephen"


const ComponentScreen =()=>{
    return(
        <View>
            <Text style ={styles.textStyle}>Getting started with React Native!</Text>
            <Text style={styles.nameStyle}>My name is {name}</Text>
            <Text>Learn more at: 
                https://cognizant.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15706432#overview
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    nameStyle:{
        fontSize: 20
    }
})

export default ComponentScreen