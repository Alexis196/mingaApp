import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import ChapterCard from "../ChapterCard/ChapterCard";
import getChapters from '../../store/Chapters/actions'

const {get_chapters} = getChapters

export default function Chapters(props) {
    const id = props._id

    const [pageNumber, setPageNumber] = useState(1);

    const increasePageNumber = () => {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
    };

    const decreasePageNumber = () => {
        setPageNumber(prevPageNumber => prevPageNumber - 1);
    };

    const dispatch = useDispatch();
    const [CHAPTERS, setChapters] = useState(null);

    useEffect(() => {
        dispatch(get_chapters({ inputId: id, inputPage: pageNumber }))
            .then((response) => {
                setChapters(response.payload.chapters);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id, pageNumber]);


    return (
        <View>
            <View style={styles.cardsContainer}>
                {CHAPTERS?.length ? (
                CHAPTERS.map((CHAPTER) => <ChapterCard key={CHAPTER._id} title_={CHAPTER.title} order_={CHAPTER.order} pages={CHAPTER.pages} description={CHAPTER.description} _id={CHAPTER._id}/>)
                ) : (
                <Text style={{ textAlign: 'center', marginTop: 20 }}>Not Found</Text>
                )}
            </View>
            <View style={styles.btnContainer}>
                {pageNumber === 1 ? null : (
                    <TouchableOpacity style={styles.btnPrev} onPress={decreasePageNumber}>
                    <Text style={styles.btnTexto}>Prev</Text>
                    </TouchableOpacity>
                )}
                {(CHAPTERS?.length === 4 || CHAPTERS?.length === 10) && (
                    <TouchableOpacity style={styles.btnNext} onPress={increasePageNumber}>
                    <Text style={styles.btnTexto}>Next</Text>
                    </TouchableOpacity>
                )}
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
    cardsContainer: {
        alignItems: 'center',
    },
    btnContainer: {
        width: 450,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        gap: 10
    },
    btnPrev: {
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 60,
        backgroundColor: '#F9A8D4',
        borderRadius: 5000,
    },
    btnNext: {
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 60,
        backgroundColor: '#F9A8D4',
        borderRadius: 5000,
    },
    btnTexto: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 500,
    },
})