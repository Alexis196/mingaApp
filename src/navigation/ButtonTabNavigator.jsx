import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home.jsx";
import MangasScreen from "../screens/Mangas.jsx";
import LogOut from "../screens/LogOut.jsx";
const tab = createBottomTabNavigator()

function ButtonTabNavigator(){
    return (
        <tab.Navigator>
            <tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
            <tab.Screen name='Mangas' component={MangasScreen} options={{ headerShown: false }}/>
        </tab.Navigator>
    )
}

export default ButtonTabNavigator