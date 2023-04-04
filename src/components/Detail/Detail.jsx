import React, { useState, useEffect } from "react";
import { Image, Text, View, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import getManga from '../../store/Manga/actions'
import getChapters from '../../store/Chapters/actions'
const { get_manga } = getManga
const { get_chapters } = getChapters

export default function Detail(props) {
    const id = props._id

    const [pageNumber, setPageNumber] = useState(1);

    const dispatch = useDispatch();
    const [MANGA, setManga] = useState(null);

    useEffect(() => {
        dispatch(get_manga({ inputId: id, inputPage: pageNumber }))
            .then((response) => {
                setManga(response.payload.manga);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id, pageNumber]);

    let titleManga = useSelector((store) => store.manga.manga.title);
    let descriptionManga = useSelector(
        (store) => store.manga.manga.decription
    );
    let imageManga = useSelector(
        (store) => store.manga.manga.cover_photo
    );


    return (
        <View>
            <Image style={styles.img} source={{ uri: imageManga }} />
            <Text style={styles.title}>{titleManga}</Text>
            <View style={styles.description}>
                <Text style={styles.text}>{descriptionManga}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        justifyContent:'center',
        alignSelf: 'center',
        alignItems: 'center',
        margin: 10,
        width: '80%',
        height: 400,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    title:{
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 500,
        marginBottom: 10,
    },
    description: {
        width: '90%',
        alignSelf: 'center',
    },
    text:{
        fontSize: 15,
        lineHeight: 22
    }
})