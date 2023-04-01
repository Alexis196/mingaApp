import { NavigationContainer } from "@react-navigation/native";
import ButtonTabNavigator from "./src/navigation/ButtonTabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <ButtonTabNavigator />
    </NavigationContainer>
  );
}
