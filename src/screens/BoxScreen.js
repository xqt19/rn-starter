import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const BoxScreen = () => {
    return(
        <View>
            {/* <View style={styles.viewStyle} >
                <Text style={styles.textOneStyle}>Box Screen 1!</Text>
                <Text style={styles.textTwoStyle}>Box Screen 2 Loooooooger!</Text>
                <Text style={styles.textThreeStyle}>Box Screen 3!</Text>
            </View>
             */}
            <View style={styles2.masterBox}>
                <View style = {styles2.redBox}/>
                <View style= {{ height:200, width:100, justifyContent:'flex-end', borderWidth: 0}}>
                    <View style = {styles2.greenBox}/>
                </View>
                <View style = {styles2.blueBox}/>
            </View>
        </View>
    )
}
const styles2 = StyleSheet.create({
    masterBox:{
        borderWidth:1,
        borderColor: 'black',
        height: 500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    redBox:{
        height: 100,
        width: 100,
        backgroundColor: 'red',
    },
    greenBox:{
        height: 100,
        width: 100,
        backgroundColor: 'green',

    },
    blueBox:{
        height: 100,
        width: 100,
        backgroundColor: 'blue'
    },
})

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:1,
        borderColor: 'black',
        height: 500,
        // alignItems: 'flex-start', //<< by default is 'stretch'
        // flexDirection: 'row', 
        // justifyContent: 'flex-end'
    },
    textOneStyle:{
        borderWidth: 1,
        borderColor: 'red',
        flex: 4
    },
    textTwoStyle:{
        borderWidth: 1,
        borderColor: 'red',
        flex: 4,
        // position: 'absolute' // means this child is ignored by other siblings but still obeys parents << by default is relative
        // alignSelf: 'center'
        // left: 30 // moves the child X px leftwards
        ...StyleSheet.absoluteFillObject //pre written style to fill up parent object
    },
    textThreeStyle:{
        borderWidth: 1,
        borderColor: 'red',
        flex: 2
    }
})

export default BoxScreen