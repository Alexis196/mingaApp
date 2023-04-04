import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "../screens/Home.jsx";
import MangasScreen from "../screens/Mangas.jsx";
import MangaDetailsScreen from "../screens/MangaDetail.jsx";
import ChapterScreen from "../screens/Chapter.jsx";
import LogOutScreen from "../screens/LogOut.jsx";

const MangasStackNavigator = createNativeStackNavigator();

function MangasStack() {
    return (
        <MangasStackNavigator.Navigator initialRouteName="MangasScreen">
            <MangasStackNavigator.Screen
                name="MangasScreen"
                component={MangasScreen}
                options={{
                    headerShown: false,
                }}
            />
            <MangasStackNavigator.Screen
                name="Details"
                component={MangaDetailsScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false,
                }}
            />
            <MangasStackNavigator.Screen
                name="Chapter"
                component={ChapterScreen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
        </MangasStackNavigator.Navigator>
    );
}

const Tab = createMaterialBottomTabNavigator();

function BottomTabsNavigator() {
    const [token, setToken] = useState("");

    useFocusEffect(
        useCallback(() => {
            AsyncStorage.getItem("token")
                .then((token) => {
                    if (token) {
                        setToken(token);
                    }
                })
                .catch((err) => console.log(err));
        }, [token])
    );

    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: "pink" }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Mangas" component={MangasStack} />
            <Tab.Screen
                name="LogOut"
                component={LogOutScreen}
                options={{ tabBarVisible: token ? true : false }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabsNavigator;
