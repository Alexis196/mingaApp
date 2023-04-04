import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function MangaCard(props) {
    const navigation = useNavigation();

    function handleRead() {
        navigation.navigate('Details', { manga: props })
    }

    return (
        <View style={styles.cardContainer}>
            <View style={[styles.spanCard, { backgroundColor: props.category_.name.includes('shonen') ? 'red' : props.category_.name.includes('comic') ? 'orange' : props.category_.name.includes('shojo') ? 'green' : props.category_.name.includes('seinen') ? 'purple' : '' }]}></View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{props.title_}</Text>
                <Text style={styles.category}>{props.category_.name}</Text>
                <TouchableOpacity style={styles.btnCont} onPress={handleRead}>
                    <View>
                        <Text style={styles.btnTexto}>Read</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Image style={styles.img} source={{ uri: props.photo }} />
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#fff',
        width: '85%',
        margin: 10
    },
    spanCard: {
        width: 3,
        height: 170,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        marginRight: 10
    },
    infoContainer: {
        padding: 1,
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 5,
        color: '#fff'
    },
    category: {
        fontSize: 18,
        marginLeft: 5,
        color: '#fff'
    },
    img: {
        width: 150,
        height: 200,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
    },
    btnCont: {
        marginTop: 15,
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
    btn:{
        width: 50,
        height: 50,
        backgroundColor: 'green'
    },
});