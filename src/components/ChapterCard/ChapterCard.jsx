import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ChapterCard(props) {
    const navigation = useNavigation();

    return (
        <View style={styles.cardContainer}>
        <View style={styles.infoContainer}>
            <Text style={styles.category}>{props.order}</Text>
            <Text style={styles.title}>{props.title_}</Text>
            <View style={styles.btnCont}>
                <Text style={styles.btnTexto} onPress={() => navigation.navigate('Chapter', { CHAPTER: props })}>
                    Read
                </Text>
            </View>
        </View>
        <Image style={styles.img} source={{ uri: props.pages[0] }} />
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        width: '85%',
        margin: 10
    },
    spanCard: {
        width: 15,
        height: 200,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        marginRight: 10
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 5
    },
    category: {
        fontSize: 18,
        marginLeft: 5
    },
    img: {
        width: 150,
        height: 200,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    btnCont:{
        marginTop: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 60,
        backgroundColor: '#F9A8D4',
        borderRadius: 5000,
    },
    btnTexto: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 500,
},
});