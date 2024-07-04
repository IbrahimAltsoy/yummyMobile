import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
  const navigation = useNavigation();
  const [accessToken, setAccessToken] = useState("");
  const [expiresIn, setExpiresIn] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  async function handleTakeToken() {
    const token = await AsyncStorage.getItem("accessToken");
    setAccessToken(token);
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    setRefreshToken(refreshToken);
    const expiresIn = await AsyncStorage.getItem("expiresIn");
    setExpiresIn(expiresIn);
  }
  function handleLogout() {
    // setAccessToken("");
    // setRefreshToken("");
    // setExpiresIn("");
    AsyncStorage.clear();

    navigation.navigate("Yummy Application");
  }

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Token Getir:" onPress={handleTakeToken} />
      <Button title="Çıkış yap:" onPress={handleLogout} />
      <Text>accessToken: {accessToken}</Text>
      <Text>refreshToken: {refreshToken}</Text>
      <Text>expiresIn: {expiresIn}</Text>
    </View>
  );
}

export default HomeScreen;
