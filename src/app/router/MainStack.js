import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/homeScreeen/HomeScreen";

const Stack = createNativeStackNavigator();

function MainRouter({ isAuthenticated }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* Diğer sayfalar burada olacak */}
    </Stack.Navigator>
  );
}

export default MainRouter;
