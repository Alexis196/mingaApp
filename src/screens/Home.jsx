import React from 'react'
import { View, Text, ScrollView, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Index from '../components/Index/Index'
import SignIn from '../components/SignIn/SignIn'
import SignUp from '../components/SignUp/SignUp'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
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
    <SafeAreaView style={style.content}>
      <ScrollView>
        <Navbar />
        <Index />
        {token ? <></>: <SignIn />}
      </ScrollView>
    </SafeAreaView>
  )
}
  const style = StyleSheet.create({
    content:{
      flex: 1,
      paddingTop: StatusBar.currentHeight
    }
  })