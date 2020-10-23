import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const ImageDetail = ( {imageSource, imageTitle, imageScore} ) => {
    return(
        <View>
            <Image source={imageSource} />
            <Text style={styles.headerStyle}>{imageTitle}</Text>
            <Text style={styles.headerStyle}>Image Score: {imageScore}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 30
    }
})

export default ImageDetail