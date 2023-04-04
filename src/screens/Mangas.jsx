import React, { useState, useCallback } from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Mangas from '../components/Mangas/Mangas';
import SessionButton from '../components/SessionButton/SessionButton';

function MangasScreen() {
  const [tokenExists, setTokenExists] = useState(false);

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem('token')
        .then(token => {
          if (token) {
            setTokenExists(true);
          } else {
            setTokenExists(false);
          }
        })
        .catch(err => console.log(err));
    }, [])
  );

  return (
    <SafeAreaView style={style.content}>
      <ScrollView>
        {tokenExists ? <Mangas /> : <SessionButton />}
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  }
});

export default MangasScreen;
