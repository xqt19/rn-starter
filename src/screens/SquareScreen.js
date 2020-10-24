import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ColourCounter from '../components/ColourCounter'

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    return(
        <View>
            <Text style={styles.headerStyle}>Square Screen!</Text>
            <ColourCounter hue="Red"  function={setRed} value={red} />
            <ColourCounter hue="Green" function={setGreen} value={green}/>
            <ColourCounter hue="Blue" function={setBlue} value={blue}/>
            <View style={{width: 100, height:100, backgroundColor:`rgb(${red},${green},${blue})`}} />
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        textAlign: "center",
        fontSize: 30
    }
})

export default SquareScreen