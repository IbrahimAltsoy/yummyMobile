import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./HomeScreen.Style";
import AuthForm from "@/app/components/AuthInput/AuthInput";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import ButtonCommon from "@/app/components/ButtonCommon/ButtonCommon";

function HomeScreen({ navigate }) {
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

  // return (
  //   <View style={styles.container}>
  //     {/* <Header /> */}
  //     <View>
  //       <Text style={styles.title}>Yummy Application</Text>
  //     </View>
  //     <View style={styles.content}>
  //       <Image
  //         source={require("../../assets/images/logo.jpg")}
  //         style={styles.logo}
  //       />
  //       <View style={styles.formContainer}>
  //         <AuthForm
  //           fields={[
  //             {
  //               name: "email",
  //               placeholder: "Email",
  //               secureTextEntry: false,
  //             },
  //             {
  //               name: "password",
  //               placeholder: "Password",
  //               secureTextEntry: true,
  //             },
  //           ]}
  //           values={values}
  //           onChange={handleChange}
  //         />
  //       </View>
  //       <View style={styles.buttonContainer}>
  //         <TouchableOpacity style={styles.button} onPress={handleLogin}>
  //           <Text style={styles.buttonText}>Giriş Yap</Text>
  //         </TouchableOpacity>
  //         <TouchableOpacity
  //           style={styles.secondaryButton}
  //           onPress={() => navigation.navigate("register")}
  //         >
  //           <Text style={styles.secondaryButtonText}>Kayıt ol</Text>
  //         </TouchableOpacity>
  //       </View>
  //       <Text style={styles.footerText}>Üye değil misiniz</Text>
  //     </View>
  //     <Footer />
  //   </View>
  // );
  return (
    <LinearGradient colors={["#F8F8FF", "#F8F8FF"]} style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.appName}>YUMMY</Text>
        <Text style={styles.appName}>APPLICATION</Text>

        <Image
          source={require("../../assets/images/logo.jpg")}
          style={styles.logo}
        />

        <Text style={styles.tag}>Experience</Text>
        <Text style={styles.tagline}>me first</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonCommon
          title="Sign In"
          onPress={() => navigation.navigate("login")}
          style={styles.button}
          textStyle={styles.buttonText}
        />

        <ButtonCommon
          title="Sign Up"
          onPress={() => navigation.navigate("register")}
          style={styles.secondaryButton}
          textStyle={styles.secondaryButtonText}
        />
      </View>
    </LinearGradient>
  );
}

export default HomeScreen;
