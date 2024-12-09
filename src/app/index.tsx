import React from "react";
import { Text } from "react-native"; // React Native Text bileşeni
import Router from "./Router"; // Router'ı import ediyoruz
import Toast from "react-native-toast-message"; // Toast mesajlarını gösteriyoruz

function Page() {
  return (
    <>
      <Router />
      <Toast />
    </>
  );
}

export default Page;
