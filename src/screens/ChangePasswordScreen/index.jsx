import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Pressable,
  Keyboard,
  TouchableOpacity,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import styles from "./styles";

export default function ChangePasswordScreen() {
  const [showPasswordOrNot, setShowPasswordOrNot] = React.useState("eye-off");
  const [showDigits, setshowDigits] = React.useState(true);

  function showPassword() {
    if (showPasswordOrNot === "eye-off") {
      setShowPasswordOrNot("eye");
      setshowDigits(false);
    } else {
      setShowPasswordOrNot("eye-off");
      setshowDigits(true);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
        <View style={styles.mainContainer}>
          <Feather name="edit-2" size={30} color="#333333" />
          <Text style={styles.mainText}>Mudar senha</Text>
        </View>

        <View style={styles.containerInputCurrentPassword}>
          <TextInput
            style={styles.inputCurrentPassword}
            placeholder="Senha atual"
            secureTextEntry={showDigits}
          ></TextInput>
          <TouchableOpacity onPress={showPassword}>
            <Feather name={showPasswordOrNot} size={24} color="#929292" />
          </TouchableOpacity>
        </View>

        <View style={styles.containerInputNewPassword}>
          <TextInput
            style={styles.inputCurrentPassword}
            placeholder="Nova senha"
            secureTextEntry={showDigits}
          ></TextInput>
        </View>

        <View style={styles.containerInputNewPassword}>
          <TextInput
            style={styles.inputCurrentPassword}
            placeholder="Confirme a nova senha"
            secureTextEntry={showDigits}
          ></TextInput>
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Mudar senha</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}
