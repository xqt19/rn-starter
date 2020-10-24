import React, {useState} from 'react'
import {View, Text, StyleSheet, Button, FlatList} from 'react-native'

const ColourScreen = () => {
    const [colours, setColours] = useState([])
    return(
        <View>
            <Text style={styles.headerStyle}>Colour Screen!</Text>
            <Button title="Add a Colour" onPress={()=>{
                setColours([...colours, randomRGB()])
            }}/>
            
            <FlatList
            keyExtractor ={item=>item}
            data = {colours}
            renderItem ={ (props) => {
                return(
                    <View style={{height:100, width:100, backgroundColor: `${props.item}`}} />
                )
            }}/>
        </View>
    )
}

const randomRGB = () =>{
    const red = Math.floor(Math.random() *256);
    const green = Math.floor(Math.random() *256);
    const blue = Math.floor(Math.random() *256);
    return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create({
    headerStyle: {
        textAlign: "center",
        fontSize: 30
    }
})

export default ColourScreen