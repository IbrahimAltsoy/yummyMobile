import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./LoginScreen.Style";
import { LoginModel } from "./Login.Model";

function LoginScreen() {
  const navigation = useNavigation();
  const loginModel = new LoginModel();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  loginModel.email = "ali@gmail.com";
  loginModel.password = "123";
  return (
    <View style={styles.container}>
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
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          title="Giriş yap"
          color="#FF6347"
          onPress={() => {
            if (email === "ali@gmail.com" && password === "123") {
              navigation.navigate("anasayfa");
            } else {
              alert("Hatalı bilgi girdiniz");
            }
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Üye ol"
          onPress={() => navigation.navigate("register")}
          color="#FF6347"
        />
      </View>
    </View>
  );
}

export default LoginScreen;
