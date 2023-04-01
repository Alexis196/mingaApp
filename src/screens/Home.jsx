import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Index from '../components/Index/Index'
import SignIn from '../components/SignIn/SignIn'
import Navbar from '../components/Navbar/Navbar'

export default function home() {
  return (
    <ScrollView>
      <Navbar/>
      <Index/>
      <SignIn/>
    </ScrollView>
  )
}
