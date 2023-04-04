import { NavigationContainer } from "@react-navigation/native";
import ButtonTabNavigator from "./src/navigation/ButtonTabNavigator";
import { Provider } from "react-redux";
import { store } from "./src/store/store.js";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ButtonTabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
