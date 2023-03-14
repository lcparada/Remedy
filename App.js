import React from "react";
import AppRoutes from "./src/routes/app.routes";


import {
  useFonts,
  Lexend_300Light,
  Lexend_700Bold,
  Lexend_400Regular,
  Lexend_600SemiBold,
} from "@expo-google-fonts/lexend";



export default function App() {
  let [fontsLoaded] = useFonts({
    Lexend_300Light,
    Lexend_700Bold,
    Lexend_400Regular,
    Lexend_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <AppRoutes />
  );
}
