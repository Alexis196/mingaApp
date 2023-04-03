import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home.jsx";
import MangasScreen from "../screens/Mangas.jsx";
import MangaDetailsScreen from "../screens/MangaDetail.jsx";
import ChapterScreen from "../screens/Chapter.jsx";


const MangasStackNavigator = createNativeStackNavigator();

function MangasStack() {
    return (
        <MangasStackNavigator.Navigator
            initialRouteName="MangasScreen"
        >
            
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
    )
}


const Tab = createMaterialBottomTabNavigator();

function BottomTabsNavigator() {
    return (
        <Tab.Navigator  initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: 'pink' }}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Mangas' component={MangasStack} />
        </Tab.Navigator>
    )
}

export default BottomTabsNavigator