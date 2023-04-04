import React from 'react'
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet } from 'react-native'
import LogOutButton from '../LogOutButton/LogOutButton'


export default function Portada({ }) {
    const [token, setTokenExists] = useState("");
    const [reload, setReload] = useState(false)

    useFocusEffect(
        useCallback(() => {
            AsyncStorage.getItem('token')
            .then(token => {
                if (token) {
                setTokenExists(true);
                }
            })
            .catch(err => console.log(err))
        }, [!reload]
        )
    )

    return (
        <View>
            <Text style={style.texto}>
                Live the emotion of the manga
            </Text>
            <Text style={style.texto2}>
                Find the perfect manga for you
            </Text>
                {token ? <LogOutButton/>:
            <View style={style.btnCont}>
                <Text style={style.btnTexto}>
                    Explore
                </Text> 
            </View>
}
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
