import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/loginScreen/LoginScreen";
import RegisterScreen from "../screens/registerScreen/RegisterScreen";

const Stack = createNativeStackNavigator();

function AuthRouter({ isAuthenticated }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default AuthRouter;
