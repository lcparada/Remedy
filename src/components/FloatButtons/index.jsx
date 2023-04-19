import React from "react";
import { View, TouchableWithoutFeedback, Animated, Text } from "react-native";

import styles from "./styles";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function FloatBottom() {
  const [animation] = React.useState(new Animated.Value(0));
  const [open, setOpen] = React.useState(true);

  const navigation = useNavigation();

  const toggleMenu = () => {
    const toValue = open ? 0 : 1;

    Animated.spring(animation, {
      toValue,
      friction: 7,
      useNativeDriver: true,
    }).start(),
      setOpen(!open);
  };

  const openText = {
    transform: [
      {
        scale: animation,
      },
    ],
  };

  const openMenu = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"],
        }),
      },
    ],
  };

  const clipStyle = {
    transform: [
      {
        scale: animation,
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -70],
        }),
      },
    ],
  };

  const packageStyle = {
    transform: [
      {
        scale: animation,
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -140],
        }),
      },
    ],
  };

  function addMedicine() {
    navigation.navigate("AddMedicine");
    setOpen(true);
    toggleMenu();
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.addPill, openText]}>
        <TouchableWithoutFeedback onPress={addMedicine}>
          <Text style={styles.textAddPill}>Adicionar medicamento</Text>
        </TouchableWithoutFeedback>
      </Animated.View>

      <TouchableWithoutFeedback onPress={addMedicine}>
        <Animated.View style={[styles.button, styles.subButton, packageStyle]}>
          <Feather name="package" size={24} color="white" />
        </Animated.View>
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.addDrawer, openText]}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("AddPrescription")}
        >
          <Text style={styles.textAddDrawer}>Criar receituário</Text>
        </TouchableWithoutFeedback>
      </Animated.View>

      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("AddPrescription")}
      >
        <Animated.View style={[styles.button, styles.subButton, clipStyle]}>
          <Feather name="paperclip" size={24} color="white" />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => toggleMenu()}>
        <Animated.View style={[styles.button, openMenu]}>
          <Feather name="plus" size={30} color="white" />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}
