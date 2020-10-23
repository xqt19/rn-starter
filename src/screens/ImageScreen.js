import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return(
        <View>
            <Text style={styles.headerStyle}>Image Screen!</Text>
            <ImageDetail imageTitle="Mountain" imageSource={require('../../assets/mountain.jpg')} imageScore={9}/>
            <ImageDetail imageTitle="Beach" imageSource={require('../../assets/beach.jpg')} imageScore={8}/>
            <ImageDetail imageTitle="Forest" imageSource={require('../../assets/forest.jpg')} imageScore={7}/>
        </View>
        

    )
}

const styles = StyleSheet.create({
    headerStyle: {
        textAlign: "center",
        fontSize: 30
    }
})

export default ImageScreen