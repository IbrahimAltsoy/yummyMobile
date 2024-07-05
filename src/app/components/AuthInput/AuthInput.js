import React from "react";
import { View, TextInput } from "react-native";
import styles from "./AuthInput.Style";

const AuthForm = ({ fields, values, onChange }) => {
  return (
    <View style={styles.container}>
      {fields.map((field) => (
        <TextInput
          key={field.name}
          style={styles.input}
          placeholder={field.placeholder}
          value={values[field.name]}
          onChangeText={(text) => onChange(field.name, text)}
          secureTextEntry={field.secureTextEntry}
        />
      ))}
    </View>
  );
};

export default AuthForm;
