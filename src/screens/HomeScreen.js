import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button 
        title="Go to Components Demo"
        onPress={()=>{props.navigation.navigate('Component')}}
      />
      <TouchableOpacity onPress={()=>{props.navigation.navigate('List')}}>
        <Text style={styles.touchStyle}>Go to List Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Image')}}>
        <Text style={styles.touchStyle}>Go to Image Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Counter')}}>
        <Text style={styles.touchStyle}>Go to Counter Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Colour')}}>
        <Text style={styles.touchStyle}>Go to Colour Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Square')}}>
        <Text style={styles.touchStyle}>Go to Changing Square</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('SquareReducer')}}>
        <Text style={styles.touchStyle}>Go to Changing Square W Reducer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('CounterReducer')}}>
        <Text style={styles.touchStyle}>Go to CounterScreen W Reducer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Text')}}>
        <Text style={styles.touchStyle}>Go to TextScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Box')}}>
        <Text style={styles.touchStyle}>Go to Box Screen</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontStyle: "italic",
    textAlign: "center"
  },
  touchStyle:{
    fontSize:25,
    textAlign: "center"
  }
});

export default HomeScreen;
