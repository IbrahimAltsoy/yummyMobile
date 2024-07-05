import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../app/screens/loginScreen";
import RegisterScreen from "../app/screens/registerScreen";
import HomeScreen from "../app/screens/homeScreeen";

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="anasayfa" component={HomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default Router;
