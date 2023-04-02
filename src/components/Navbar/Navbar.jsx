import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

function Navbar() {
    return (
        <View>
            <Image style={style.menu2} source={require('../../../assets/img/Logo.png')}/>
        </View>
    )
}
    const style = StyleSheet.create({
        menu2:{
            position: 'absolute',
            top: 30,
            right: 30,
            width: 64,
            height: 64,
            zIndex: 50,
        }
    })
export default Navbar