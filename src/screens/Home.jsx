import React from 'react'
import { View, Text, ScrollView, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import Index from '../components/Index/Index'
import SignIn from '../components/SignIn/SignIn'
import SignUp from '../components/SignUp/SignUp'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  return (
    <SafeAreaView style={style.content}>
      <ScrollView>
        <Navbar />
        <Index />
        <SignIn />
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