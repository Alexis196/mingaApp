import React from 'react'
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';

function LogOutButton() {
    const navigation = useNavigation()
    const [token, setTokenExists] = useState("");

    useFocusEffect(
        useCallback(() => {
            AsyncStorage.getItem('token')
            .then(token => {
                if (token) {
                setTokenExists(true);
                }
            })
            .catch(err => console.log(err))
        }, []
        )
    )

    const handleLogout = async () => {
        console.log('hola')
        await AsyncStorage.removeItem("token");
        setTokenExists("");
        Alert.alert('User Offline!', 'Welcome back soon!', [
            {text: 'OK', onPress: () => navigation.navigate('Home')},
        ]);
    };

    return (
        <View style={style.cont}>
                <TouchableOpacity style={style.btn} onPress={handleLogout}>
                    <Text style={style.text}>
                        LogOut
                    </Text>
                </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    cont: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        height: 800,
        padding: 10,
    },
    btn: {
        width: 'auto',
        height: 78,
        backgroundColor: '#F9A8D4',
        borderRadius: 500
    },
    text: {
        paddingTop: 18,
        fontSize: 32,
        fontWeight: 500,
        color: '#000',
        textAlign: 'center'
    }
})
export default LogOutButton