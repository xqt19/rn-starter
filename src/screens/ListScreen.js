import React from 'react'
import {Text, StyleSheet, View, FlatList} from 'react-native'

const ListScreen =()=>{
    return(
        <View>
            <Text style={styles.textStyle}>List Screen</Text>
            <FlatList
                keyExtractor={friend=>friend.name} 
                data={friends} 
                renderItem={(element) =>{
                    // element == { item: {name:"John"}, index:0 }
                    return (
                        <Text style={styles.listStyle}>{element.item.name}</Text>
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
        fontSize: 20,
        textAlign: "center"
    }
})

const friends = [
    {name: "John"},
    {name: "Paul"},
    {name: "Mary"},
    {name: "Mike"},
    {name: "Amy"},
    {name: "Lay"},
]

export default ListScreen