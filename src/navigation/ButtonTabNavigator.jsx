import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home.jsx";
import MangasScreen from "../screens/Mangas.jsx";
const tab = createBottomTabNavigator()

function ButtonTabNavigator(){
    return (
        <tab.Navigator>
            <tab.Screen name='Home' component={HomeScreen}/>
            <tab.Screen name='Mangas' component={MangasScreen}/>
        </tab.Navigator>
    )
}

export default ButtonTabNavigator