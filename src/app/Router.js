import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native"; // NavigationContainer'ı burada kullanıyoruz
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage"; // AsyncStorage import ediyoruz

import MainRouter from "./router/MainStack";
import AuthRouter from "./router/AuthStack";

const Stack = createNativeStackNavigator();

function Router() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Kullanıcı doğrulama durumu

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = await AsyncStorage.getItem("accessToken"); // Token'ı kontrol et
      setIsAuthenticated(!!token); // Eğer token varsa, giriş yapmış sayılır
      // console.log(token); // Burada token değerini kontrol edin
      // console.log(isAuthenticated);
    };

    checkAuthStatus();
  }, []);

  if (isAuthenticated === null) {
    return null; // Token kontrolü yapılırken, yükleniyor mesajı gösterebilirsiniz
  }

  return isAuthenticated ? <MainRouter /> : <AuthRouter />;
}

export default Router;
