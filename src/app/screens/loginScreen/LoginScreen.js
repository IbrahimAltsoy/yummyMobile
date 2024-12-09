import React, { useState } from "react";
import { View, Button, Alert } from "react-native";
import AuthForm from "../../components/AuthInput/AuthInput";
import styles from "./LoginScreen.Style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Footer from "@/app/components/Footer/Footer";
import ButtonCommon from "@/app/components/ButtonCommon/ButtonCommon";
import authService from "../../services/authService";
import toastService from "../../services/toastService";
import errorService from "@/app/services/errorService";

const LoginScreen = ({ navigation }) => {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleLogin = async () => {
    try {
      // authService üzerinden login çağrısı
      const data = await authService.login(values.email, values.password);

      if (!data || !data.accessToken || !data.refreshToken || !data.expiresIn) {
        errorService.handleError("Su ncu yok ");
      }

      // Veriler eksik değilse, AsyncStorage'a kaydet
      await AsyncStorage.setItem("accessToken", data.accessToken);
      await AsyncStorage.setItem("refreshToken", data.refreshToken);
      await AsyncStorage.setItem("expiresIn", data.expiresIn.toString());
      toastService.showSuccess("Giriş yapıldı! ibrahim");
      navigation.navigate("Home");
    } catch (error) {
      // authService'den gelen hataları yakalama
      //toastService.showError(error.message || "Bir şeyler ters gitti.");
    }
  };

  return (
    <View style={styles.container}>
      <AuthForm
        fields={[
          { name: "email", placeholder: "Email", secureTextEntry: false },
          { name: "password", placeholder: "Password", secureTextEntry: true },
        ]}
        values={values}
        onChange={handleChange}
      />
      <ButtonCommon
        title="Click Me"
        onPress={() => handleLogin()}
        style={styles.customButton}
        textStyle={styles.customButtonText}
      />
      <Footer />
    </View>
  );
};

export default LoginScreen;
