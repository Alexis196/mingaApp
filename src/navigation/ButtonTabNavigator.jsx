import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home.jsx";
import SettingScreen from "../screens/Setting.jsx";

const tab = createBottomTabNavigator()

function ButtonTabNavigator(){
    return (
        <tab.Navigator>
            <tab.Screen name='Home' component={HomeScreen}/>
            <tab.Screen name='Setting' component={SettingScreen}/>
        </tab.Navigator>
    )
}

export default ButtonTabNavigator