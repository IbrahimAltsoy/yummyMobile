import { Button, Text, View, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./HomeScreen.Style";
import AuthForm from "@/app/components/AuthInput/AuthInput";
import axios from "axios";
function HomeScreen() {
  const [values, setValues] = useState({ email: "", password: "" });
  const navigation = useNavigation();
  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://yummyapplication.com/api/Auth/authenticate",
        {
          email: values.email,
          password: values.password,
        }
      );
      if (response.data.accessToken) {
        await AsyncStorage.setItem("accessToken", response.data.accessToken);
        await AsyncStorage.setItem("refreshToken", response.data.refreshToken);
        await AsyncStorage.setItem(
          "expiresIn",
          response.data.expiresIn.toString()
        );

        navigation.navigate("register");
        Alert.alert("Başarılı", "Giriş yapıldı", "");
      } else {
        Alert.alert("Hatalı bilgi girdiniz");
      }
    } catch (error) {
      Alert.alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };
  // const [accessToken, setAccessToken] = useState("");
  // const [expiresIn, setExpiresIn] = useState("");
  // const [refreshToken, setRefreshToken] = useState("");
  // async function handleTakeToken() {
  //   const token = await AsyncStorage.getItem("accessToken");
  //   setAccessToken(token);
  //   const refreshToken = await AsyncStorage.getItem("refreshToken");
  //   setRefreshToken(refreshToken);
  //   const expiresIn = await AsyncStorage.getItem("expiresIn");
  //   setExpiresIn(expiresIn);
  // }
  // function handleLogout() {
  //   // setAccessToken("");
  //   // setRefreshToken("");
  //   // setExpiresIn("");
  //   AsyncStorage.clear();

  //   navigation.navigate("Yummy Application");
  // }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.formContainer}>
          <AuthForm
            fields={[
              { name: "email", placeholder: "Email", secureTextEntry: false },
              {
                name: "password",
                placeholder: "Password",
                secureTextEntry: true,
              },
            ]}
            values={values}
            onChange={handleChange}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("register")}
          >
            <Text style={styles.buttonText}>Kayıt ol</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: "red", textAlign: "left" }}>
          Üye değil misiniz
        </Text>
      </View>
      <Footer />
    </View>
  );
}

export default HomeScreen;
