import { SafeAreaView, ScrollView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MainScreen from "./src/components/mainScreen";

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

  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView>
      <ScrollView decelerationRate="normal">
        <MainScreen />
      </ScrollView>
    </SafeAreaView>
  );
}
