import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Pressable,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import styles from "./styles";

export default function ChangePasswordScreen() {
  const [showPasswordOrNot, setShowPasswordOrNot] = React.useState("eye-off");
  const [showDigits, setshowDigits] = React.useState(true);

  const [keyboardHeight, setKeyboardHeight] = React.useState();

  function showPassword() {
    if (showPasswordOrNot === "eye-off") {
      setShowPasswordOrNot("eye");
      setshowDigits(false);
    } else {
      setShowPasswordOrNot("eye-off");
      setshowDigits(true);
    }
  }

  React.useEffect(() => {
    function onKeyboardDidShow(e) {
      setKeyboardHeight(e.endCoordinates.height - 340);
    }

    function onKeyboardDidHide() {
      setKeyboardHeight(0);
    }

    const showSubscription = Keyboard.addListener(
      "keyboardDidShow",
      onKeyboardDidShow
    );
    const hideSubscription = Keyboard.addListener(
      "keyboardDidHide",
      onKeyboardDidHide
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: keyboardHeight }}
        showsVerticalScrollIndicator={false}
      >
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
      </ScrollView>
    </SafeAreaView>
  );
}
