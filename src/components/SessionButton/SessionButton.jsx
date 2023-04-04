import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function SessionButton() {
    return (
        <View style={style.cont}>
            <View style={style.btn}>
                <Text style={style.text}>
                    You must be logged in to view this section
                </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    cont: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        height: 800
    },
    btn:{
        width: 'auto',
        height: 78,
        backgroundColor: '#fff',
        borderRadius: 500
    },
    text: {
        paddingTop: 10,
        fontSize: 24,
        fontWeight: 500,
        color: '#000',
        textAlign: 'center'
    }
})

export default SessionButton