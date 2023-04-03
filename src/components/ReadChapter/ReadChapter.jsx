import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

function ReadChapter(props) {
    const navigation = useNavigation()
    const id = props.CHAPTER
    const [pageNumber, setPageNumber] = useState(0);

    function handleNext(){
        if (pageNumber > id.pages.length - 1) {
            navigation.goBack();
        } else {
            setPageNumber(pageNumber + 1)
        }
    }

    function handlePrev() {
        if (pageNumber > 0) {
            setPageNumber(pageNumber - 1);
        } else {
            navigation.goBack();
        }
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
