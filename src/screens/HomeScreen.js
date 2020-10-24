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
        <Text style={styles.touchStyle}>Go to List Demo</Text>
        <Text style={styles.touchStyle}>Go to List Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Image')}}>
        <Text style={styles.touchStyle}>Go to Image Demo</Text>
        <Text style={styles.touchStyle}>Go to Image Demo</Text>
        <Text style={styles.touchStyle}>Go to Image Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Counter')}}>
        <Text style={styles.touchStyle}>Go to Counter Demo</Text>
        <Text style={styles.touchStyle}>Go to Counter Demo</Text>
        <Text style={styles.touchStyle}>Go to Couner Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Colour')}}>
        <Text style={styles.touchStyle}>Go to Colour Demo</Text>
        <Text style={styles.touchStyle}>Go to Colour Demo</Text>
        <Text style={styles.touchStyle}>Go to Colour Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Square')}}>
        <Text style={styles.touchStyle}>Go to Changing Square</Text>
        <Text style={styles.touchStyle}>Go there</Text>
        <Text style={styles.touchStyle}>Go there</Text>
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
