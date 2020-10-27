import React, {useReducer} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ColourCounterWReducer from '../components/ColourCounterWReducer'

const COLOUR_INCREMENT= 15;

const reducer = (state,action) =>{
    //state = {red:number, green:number, blue: number}
    //action = {colourToChange: 'red' || 'green' || 'blue', amount: 15|| -15 }
    switch (action.colourToChange){
        case 'red':
            if (state.red + action.amount >= 0 && state.red + action.amount <= 255){
                return {...state, red: state.red + action.amount }
            }
            return state
            
        case 'green':
            if (state.green + action.amount >= 0 && state.green + action.amount <= 255){
                return {...state, green: state.green + action.amount }
            }
            return state

        case 'blue':
            if (state.blue + action.amount >= 0 && state.blue + action.amount <= 255){
                return {...state, blue: state.blue + action.amount }
            }
            return state

        default:
            return state
    }
}

const SquareScreenWReducer = () => {
    const [state,dispatch] = useReducer(reducer, {red:0, green:0, blue:0})
    return(
        <View>
            <Text style={styles.headerStyle}>Square Screen! W Reducer!</Text>
            <Text style={styles.headerStyle}>Red</Text> 
            <ColourCounterWReducer 
            functionIncrease={()=> dispatch({colourToChange:'red', amount: COLOUR_INCREMENT})}
            functionDecrease={()=> dispatch({colourToChange:'red', amount: -1* COLOUR_INCREMENT})}
            colour="Red"/>
            <Text style={styles.headerStyle}>Green</Text> 
            <ColourCounterWReducer 
            functionIncrease={()=> dispatch({colourToChange:'green', amount: COLOUR_INCREMENT})}
            functionDecrease={()=> dispatch({colourToChange:'green', amount: -1* COLOUR_INCREMENT})}
            colour="Green"/>
            <Text style={styles.headerStyle}>Blue</Text> 
            <ColourCounterWReducer 
            functionIncrease={()=> dispatch({colourToChange:'blue', amount: COLOUR_INCREMENT})}
            functionDecrease={()=> dispatch({colourToChange:'blue', amount: -1* COLOUR_INCREMENT})}
            colour="Blue"/>
            <View style={{height: 100, width:100, backgroundColor: `rgb(${state.red},${state.green},${state.blue})`}}>
            </View>
            <Text style={styles.headerStyle}>
                ({`${state.red},${state.green},${state.blue}`})
            </Text>

            
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        textAlign: "center",
        fontSize: 30
    }
})

export default SquareScreenWReducer