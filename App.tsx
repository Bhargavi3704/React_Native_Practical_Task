import * as React from "react";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Toast from "react-native-toast-message";
import LoginScreen from "./Assets/Screens/LoginScreen";
import ListScreen from "./Assets/Screens/ListScreen";
import DetailsScreen from "./Assets/Screens/DetailsScreen";
import CounterScreen from "./Assets/Screens/CounterScreen";

enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
      </Stack.Navigator>
      <Toast/>
    </NavigationContainer>
  );
}
