import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./HomeScreen.Style";
import { LinearGradient } from "expo-linear-gradient";
import ButtonCommon from "@/app/components/ButtonCommon/ButtonCommon";

function HomeScreen({ navigation }) {
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
          onPress={() => navigation.navigate("Login")}
          style={styles.button}
          textStyle={styles.buttonText}
        />

        <ButtonCommon
          title="Sign Up"
          onPress={() => navigation.navigate("Register")}
          style={styles.secondaryButton}
          textStyle={styles.secondaryButtonText}
        />
      </View>
    </LinearGradient>
  );
}

export default HomeScreen;
