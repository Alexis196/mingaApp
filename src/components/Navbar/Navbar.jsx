import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

function Navbar() {
    return (
        <View>
            <Image style={style.menu1} source={require('../../../assets/img/Menu.png')}/>
            <Image style={style.menu2} source={require('../../../assets/img/Logo.png')}/>
        </View>
    )
}
    const style = StyleSheet.create({
        menu1:{
            position: 'absolute',
            top: 20,
            left: 20,
            width: 64,
            height: 64,
            zIndex: 50,
        },
        menu2:{
            position: 'absolute',
            top: 20,
            right: 20,
            width: 64,
            height: 64,
            zIndex: 50,
        }
    })
export default Navbar