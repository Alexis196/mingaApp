import { Text, View, Image, StyleSheet } from 'react-native'
import React from 'react'
import Portada from '../Portada/Portada'
import { ImageBackground } from 'react-native'
import Navbar from '../Navbar/Navbar'

const Index = (props) => {
    return (
        <View style={style.altura}>
            <ImageBackground
                source={require('../../../assets/img/narutoFondo.png')}
                style={{ width: '100%', height: '100%' }}>
                <Navbar />
                <View style={style.div}>
                    <Portada />
                </View>
            </ImageBackground>
        </View>
    )
}
const style = StyleSheet.create({
    altura:{
        height: 790
    },
    div: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Index