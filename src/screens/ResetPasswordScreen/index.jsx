import React from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Pressable,
  StatusBar,
  Keyboard,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ResetPasswordScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Pressable
        style={styles.containerPressable}
        onPress={() => Keyboard.dismiss()}
      >
        <View style={styles.containerMainText}>
          <Text style={styles.mainText}>Resetar senha</Text>
        </View>

        <View style={styles.containerSubText}>
          <Text style={styles.subText}>
            Entre com o email associado a sua conta e {"\n"}nós vamos enviar um
            email com instruções{"\n"}para redefinir sua senha.
          </Text>
        </View>

        <View style={styles.containerInputEmail}>
          <TextInput
            style={styles.inputEmail}
            placeholder="Seu email aqui!"
          ></TextInput>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="#929292"
          />
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("SendEmailPasswordScreen")}
          >
            <Text style={styles.textButton}>Enviar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerLogo}>
          <MaterialCommunityIcons name="pill" size={77} color="#68A6DA" />
        </View>
      </Pressable>
    </SafeAreaView>
  );
}
