import React from "react";
import {
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  Pressable,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

export default function LoginScreen() {

  const [showPasswordOrNot, setShowPasswordOrNot] = React.useState("eye-off-outline");
  const [showDigits, setshowDigits] = React.useState(true);
  
  const [userName, setUserName] = React.useState(null)
  const [password, setPassword] = React.useState(null)

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
      <Pressable onPress={() => Keyboard.dismiss()}>
        <View style={styles.logo}>
          <MaterialCommunityIcons
            name="pill"
            size={77}
            color="#68A6DA"
            style={{ marginBottom: 60 }}
          />
        </View>

        <View style={styles.containerInput}>
          <View style={styles.inputUser}>
            <TextInput style={styles.input} placeholder="Usuário" onChangeText={setUserName} value={userName}></TextInput>
            <Ionicons name="person-outline" size={24} color="#929292" />
          </View>

          <View style={styles.inputUser}>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={showDigits}
              onChangeText={setPassword}
              value={password}
            ></TextInput>
            <TouchableOpacity onPress={() => showPassword()}>
              <Ionicons name={showPasswordOrNot} size={24} color="#929292" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

        <View style={styles.forgotPassword}>
          <TouchableOpacity>
            <Text style={styles.textForgotPassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.register}>
          <Text style={styles.subTextRegister}>Ainda não tem conta?</Text>
          <TouchableOpacity>
            <Text style={styles.textRegister}>Registre-se!</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}
