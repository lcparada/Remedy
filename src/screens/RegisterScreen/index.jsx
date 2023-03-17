import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Pressable,
  Keyboard,
} from "react-native";

import styles from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function RegisterScreen({ navigation }) {
  const [showPasswordOrNot, setShowPasswordOrNot] =
    React.useState("eye-off-outline");
  const [showDigits, setshowDigits] = React.useState(true);

  function showPassword() {
    if (showPasswordOrNot === "eye-off-outline") {
      setShowPasswordOrNot("eye-outline");
      setshowDigits(false);
    } else {
      setShowPasswordOrNot("eye-off-outline");
      setshowDigits(true);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Pressable style={styles.pressableContainer} onPress={Keyboard.dismiss}>
        <View style={styles.logo}>
          <MaterialCommunityIcons name="pill" size={77} color="#68A6DA" />
        </View>

        <View style={styles.registerForm}>
          <View style={styles.containerUser}>
            <MaterialCommunityIcons
              name="account-outline"
              size={24}
              color="#929292"
            />
            <TextInput
              placeholder="Usuário"
              style={styles.inputUser}
            ></TextInput>
          </View>

          <View style={styles.containerEmail}>
            <Feather name="at-sign" size={22} color="#929292" />
            <TextInput
              placeholder="Email"
              style={styles.inputEmail}
            ></TextInput>
          </View>

          <View style={styles.containerPassword}>
            <Feather name="lock" size={22} color="#929292" />
            <TextInput
              placeholder="Senha"
              style={styles.linePassword}
              secureTextEntry={showDigits}
            ></TextInput>
            <TouchableOpacity
              onPress={showPassword}
              style={{ marginLeft: 155 }}
            >
              <Ionicons name={showPasswordOrNot} size={22} color="#929292" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons
              name="arrow-right"
              size={40}
              color="white"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.containerAlreadyAccount}>
          <Text style={styles.textAlreadyAccount}>Já tem conta? </Text>
          <TouchableOpacity
            style={styles.buttonAlreadyAccount}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.textButtonAlreadyAccount}>Toque aqui!</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}
