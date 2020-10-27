import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

const TextScreen = () => {
    const[name, setName] = useState('')
    return(
        <View>
            <Text style={styles.headerStyle}>Enter Password:</Text>

            <TextInput 
            style={styles.inputStyle}
            autoCapitalize = "none"
            autoCorrect = {false}
            value = {name}
            onChangeText = {(newValue) => { setName(newValue)} } 
            />
            {name.length <= 5 
            ? <Text style={styles.headerStyle}>Password must be longer than 5 characters</Text> 
            : null}
            {/* {name != '' && <Text style={styles.headerStyle}>My name is {name}</Text>} */}
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        textAlign: "center",
        fontSize: 30
    },
    inputStyle: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        height: 50
    }
})

export default TextScreen