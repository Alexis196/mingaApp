import React from 'react'
import { View, Text, StyleSheet } from 'react-native'



export default function Portada({ }) {
    return (
        <View>
            <Text style={style.texto}>
                Live the emotion of the manga
            </Text>
            <Text style={style.texto2}>
                Find the perfect manga for you
            </Text>
            <View style={style.btnCont}>
                <Text style={style.btnTexto}>
                    Explore
                </Text>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    texto: {
        padding: 10,
        fontSize: 40,
        fontWeight: 700,
        color: '#fff',
        textAlign: 'center',
    },
    texto2: {
        padding: 10,
        fontSize: 20,
        fontWeight: 400,
        color: '#fff',
        textAlign: 'center',
    },
    btnCont:{
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 363,
        height: 69,
        backgroundColor: '#F9A8D4',
        borderRadius: 5000,
    },
    btnTexto: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 500,
    }
})
