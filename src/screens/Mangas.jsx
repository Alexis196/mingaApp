import React from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import SignUp from '../components/SignUp/SignUp'

function MangasScreen() {
  return (
    <SafeAreaView style={style.content}>
      <View>
        <SignUp />
      </View>
    </SafeAreaView>
  )
}
  const style = StyleSheet.create({
    content: {
      fix: 1,
      paddingTop: StatusBar.currentHeight
    }
  })
export default MangasScreen