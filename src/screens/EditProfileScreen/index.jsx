import React, { useEffect } from "react";
import {
  View,
  SafeAreaView,
  Pressable,
  Keyboard,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";

import styles from "./styles";

import { Feather } from "@expo/vector-icons";

export default function EditProfileScreen() {
  const [keyboardHeight, setKeyboardHeight] = React.useState();

  useEffect(() => {
    function onKeyboardDidShow(e) {
      setKeyboardHeight(e.endCoordinates.height);
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
      contentContainerStyle={{ paddingBottom: keyboardHeight - 340}}
    >
      <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
        <View style={styles.containerChangePhoto}>
          <View style={styles.circleChangePhoto}>
            <Feather name="camera" size={24} color="#C2C2CB" />
          </View>

          <TouchableOpacity>
            <Text style={styles.textChangePhoto}>Mudar foto +</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerChangeName}>
          <Text style={styles.textChangeName}>Nome:</Text>
          <TextInput
            style={styles.inputChangeName}
            placeholder="Lucas Parada"
          ></TextInput>
        </View>

        <View style={styles.containerChangeEmail}>
          <Text style={styles.textChangeEmail}>Email:</Text>
          <TextInput
            style={styles.inputChangeEmail}
            placeholder="loparada@gmail.com"
          ></TextInput>
        </View>

        <View style={styles.containerChangePhone}>
          <Text style={styles.textChangePhone}>Telefone:</Text>
          <TextInput
            style={styles.inputChangePhone}
            placeholder="(21) 98812-6131"
          ></TextInput>
        </View>

        <View style={styles.containerChangeCEP}>
          <Text style={styles.textChangeCEP}>CEP:</Text>
          <TextInput
            style={styles.inputChangeCEP}
            placeholder="23540-003"
          ></TextInput>
        </View>

        <View style={styles.containerChangeAddress}>
          <Text style={styles.textChangeCEP}>Endereço:</Text>
          <TextInput
            style={styles.inputChangeCEP}
            placeholder="Rua Vicente Batista, 85"
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Salvar</Text>
        </TouchableOpacity>
      </Pressable>
    </ScrollView>
  </SafeAreaView>
);
}
