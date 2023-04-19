import React from "react";
import {
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  Pressable,
  StatusBar,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();

  const [showPasswordOrNot, setShowPasswordOrNot] =
    React.useState("eye-off-outline");
  const [showDigits, setshowDigits] = React.useState(true);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  // function verificationInput() {
  //   if (
  //     username === "" ||
  //     password === ""
  //   ) {
  //     setError("*Os campos devem ser preenchidos*");
  //     return false;
  //   } else {
  //     setError(null);
  //   }
  // }

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
      <Pressable onPress={() => Keyboard.dismiss()}>
        <View style={styles.logo}>
          <MaterialCommunityIcons
            name="pill"
            size={77}
            color="#68A6DA"
            style={{ marginBottom: 60 }}
          />
        </View>

        <View style={styles.containerError}>
          <Text style={styles.error}>{error}</Text>
        </View>

        <View style={styles.containerInput}>
          <View style={styles.inputUser}>
            <TextInput
              style={styles.input}
              placeholder="Usuário"
              onChangeText={setUsername}
              value={username}
            ></TextInput>
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

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AppRoutes")}
        >
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ResetPasswordScreen")}
          >
            <Text style={styles.textForgotPassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.register}>
          <Text style={styles.subTextRegister}>Ainda não tem conta?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.textRegister}>Registre-se!</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}
