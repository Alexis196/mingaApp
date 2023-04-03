import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useState } from 'react';

function ReadChapter(props) {
    const id = props.CHAPTER
    const [pageNumber, setPageNumber] = useState(page);
    function handleNext(){
        console.log('hola')
        setPageNumber +1
        console.log(pageNumber)
    }

    return (
        <View>
            <View>
                <Text>{id.order_}</Text>
                <Text>{id.title_}</Text>
            </View>
            <Image style={style.img} source={{ uri: id.pages[page] }} />
            <TouchableOpacity onPress={handleNext}>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    img: {
        width: 'auto',
        height: 680
    }
})
export default ReadChapter