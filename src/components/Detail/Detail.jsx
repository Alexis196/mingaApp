import React, { useState, useEffect } from "react";
import { Image, Text, View, StyleSheet, ImageBackground, TouchableOpacity, TextInput} from "react-native";
import { useSelector,useDispatch } from "react-redux";
import getManga from '../../store/Manga/actions'
import getChapters from '../../store/Chapters/actions'
const {get_manga} = getManga
const {get_chapters} = getChapters

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
            <View>
                <Image style={styles.img} source={{ uri: imageManga }}/>
                <Text>{titleManga}</Text>
                <Text>{descriptionManga}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 150,
        height: 200,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
})