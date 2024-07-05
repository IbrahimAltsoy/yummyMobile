import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
  Platform,
  Switch,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthday, setBirthday] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [gender, setGender] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [activationCode, setActivationCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleRegister = async () => {
    if (password !== passwordConfirm) {
      Alert.alert("Hata", "Şifreler eşleşmiyor");
      return;
    }

    const user = {
      Name: name,
      Surname: surname,
      UserName: userName,
      Email: email,
      PhoneNumber: phoneNumber,
      Birthday: birthday,
      Gender: gender,
      IsActive: isActive,
      ActivationCode: activationCode,
      Password: password,
      PasswordConfirm: passwordConfirm,
    };
    const response = await axios.post(
      "https://yummyapplication.com/api/User",
      user
    );

    if (response.data) {
      Alert.alert("Başarılı", "Kayıt yapıldı");
      navigation.navigate("login");
    } else {
      Alert.alert("Hata", "Kayıt yapılamadı");
    }
  };
  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthday;
    setShowDatePicker(Platform.OS === "ios");
    setBirthday(currentDate);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>

      <TextInput
        style={styles.input}
        placeholder="İsim"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Soyisim"
        value={surname}
        onChangeText={setSurname}
      />
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Telefon Numarası"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />

      <View>
        <Button title="Doğum Günü Seç" onPress={showDatePickerModal} />
        {showDatePicker && (
          <DateTimePicker
            value={birthday} // Ensure birthday is a valid Date object
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}
        <Text>{birthday.toLocaleDateString()}</Text>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Cinsiyet</Text>
        <RNPickerSelect
          onValueChange={(value) => setGender(parseInt(value))}
          items={[
            { label: "Erkek", value: 0 },
            { label: "Kadın", value: 1 },
            { label: "Diğer", value: 2 },
          ]}
          placeholder={{ label: "Cinsiyet seçin...", value: null }}
          style={pickerSelectStyles}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text>Aktif mi?</Text>
        <Switch value={isActive} onValueChange={setIsActive} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Aktivasyon Kodu"
        value={activationCode}
        onChangeText={setActivationCode}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre Tekrarı"
        value={passwordConfirm}
        onChangeText={setPasswordConfirm}
        secureTextEntry
      />

      <Button title="Kayıt Ol" onPress={handleRegister} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  pickerContainer: {
    marginBottom: 12,
  },
  pickerLabel: {
    marginBottom: 4,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 12,
  },
  inputAndroid: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 12,
  },
});

export default RegisterScreen;
