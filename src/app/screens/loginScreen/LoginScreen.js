import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import styles from "./LoginScreen.Style";
import { LoginModel } from "./Login.Model";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://yummyapplication.com/api/Auth/authenticate",
        {
          email: email,
          password: password,
        }
      );
      if (response.data.accessToken) {
        // Access token ve diğer bilgileri AsyncStorage içinde saklıyoruz
        await AsyncStorage.setItem("accessToken", response.data.accessToken);
        await AsyncStorage.setItem("refreshToken", response.data.refreshToken);
        await AsyncStorage.setItem(
          "expiresIn",
          response.data.expiresIn.toString()
        );

        navigation.navigate("anasayfa");
        Alert.alert("Giriş yapıldı", response.data.accessToken);
      } else {
        Alert.alert("Hatalı bilgi girdiniz");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Hoşgeldiniz</Text>
        </View>
        <Image
          style={styles.image}
          source={require("../../assets/images/yummyapp.jpg")}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Giriş yap" color="#FF6347" onPress={handleLogin} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Kaydol"
            onPress={() => navigation.navigate("register")}
            color="#FF6347"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
