import React, { useState } from "react";
import {Text, SafeAreaView, TouchableOpacity, StyleSheet, View} from 'react-native'


const App = () => {
    const [number, setNumber] = useState(0)
    function handleNumber (){
        const new_number = Math.floor(Math.random() * 100)
        setNumber(new_number)
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={{marginBottom:30}}>
                <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize:35}}>Welcome!</Text>
            </View>
        <Text style={style.number}>{number}</Text>
        <TouchableOpacity onPress={handleNumber} style={style.button}>
            <Text>Generate Number</Text>
        </TouchableOpacity>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#FF0000',
        fontSize: 24,
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    number:{
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    button: {
        backgroundColor: '#FFF',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent:'center',
        alignItems: 'center',
    }
})

export default App;