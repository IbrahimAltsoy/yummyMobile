import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import styles from "./Footer.Style";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.linksContainer}>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://yourwebsite.com/about")}
        >
          <Text style={styles.link}>Hakkımızda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://yourwebsite.com/contact")}
        >
          <Text style={styles.link}>İletişim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://yourwebsite.com/privacy")}
        >
          <Text style={styles.link}>Gizlilik Politikası</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://yourwebsite.com/terms")}
        >
          <Text style={styles.link}>Kullanım Koşulları</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://yourwebsite.com/help")}
        >
          <Text style={styles.link}>Yardım Merkezi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://yourwebsite.com/careers")}
        >
          <Text style={styles.link}>Kariyer</Text>
        </TouchableOpacity>
        <Text style={styles.copyright}>
          © 2024 ibrahim ALTSOY. Tüm hakları saklıdır.
        </Text>
      </View>
    </View>
  );
};

export default Footer;
