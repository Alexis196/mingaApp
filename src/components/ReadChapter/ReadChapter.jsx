import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useState } from 'react';

function ReadChapter(props) {
    const id = props.CHAPTER
    const [pageNumber, setPageNumber] = useState(Number(''));
    function handleNext(){
        console.log('hola')
        setPageNumber (pageNumber +1)
        console.log(pageNumber)
    }
    function handlePrev(){
        console.log('hola')
        if(pageNumber > 0){
            setPageNumber (pageNumber -1)
        }
        console.log(pageNumber)
    }

    return (
        <View>
            <View>
                <Text>{id.order_}</Text>
                <Text>{id.title_}</Text>
            </View>
            <Image style={style.img} source={{ uri: id.pages[pageNumber] }} />
            <TouchableOpacity style={style.btn} onPress={handlePrev}>
                <Text>Prev</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn} onPress={handleNext}>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    img: {
        width: 'auto',
        height: 680
    },
    btn:{
        width: 50,
        height: 50,
        backgroundColor: 'green'
    },
})
export default ReadChapter