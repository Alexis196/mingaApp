import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function TextSignIn() {
    return (
        <View>
            <View style={style.title}>
                <Text style={style.welcome}>Welcome <Text style={style.textRose}>back</Text>!</Text>
            </View>
            <View style={style.textR}>
                <Text style={style.subText}>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</Text>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    title: {
        marginBottom: 20,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    textR: {
        marginBottom: 20,
        width: '90%',
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 32,
        fontWeight: 500
    },
    textRose: {
        fontSize: 32,
        fontWeight: 500,
        color: '#F9A8D4',
    },
    subText: {
        textAlign: 'center',
    }
})
export default TextSignIn
