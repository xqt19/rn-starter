import React from 'react'
import {Text, StyleSheet, View, FlatList} from 'react-native'

const ListScreen =()=>{
    return(
        <View>
            <Text style={styles.textStyle}>List Screen</Text>
            <FlatList
                horizontal= {false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={friend=>friend.name} 
                data={friends} 
                renderItem={(element) =>{
                    // element == { item: {name:"John"}, index:0 }
                    return (
                    <Text style={styles.listStyle}>{element.item.name} - Age {element.item.age}</Text>
                    )
                }} 
            />
        </View>
    )
}

const styles = StyleSheet.create({ 
    textStyle: {
        fontSize: 30,
        textAlign: "center"
    },
    listStyle: {
        fontSize: 40,
        textAlign: "center",
        marginVertical: 50
    }
})

const friends = [
    {name: "Abdul", age: 5},
    {name: "Boris", age: 6},
    {name: "Charlie", age: 7},
    {name: "Delaney", age: 8},
    {name: "Eris", age: 9},
    {name: "Fiona", age: 10},
    {name: "Galt", age: 11},
    {name: "Humphrey", age: 12},
    {name: "Indigo", age: 13},
    {name: "Jonas", age: 14},
    {name: "Kingston", age: 15},
    {name: "Lay", age: 16},
]

export default ListScreen