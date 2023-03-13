import React from "react";
import { Text, View, TouchableWithoutFeedback, Animated } from "react-native";

import styles from "./styles";
import { Feather } from "@expo/vector-icons";

export default function FloatBottom() {
  const [animation] = React.useState(new Animated.Value(0));
  const [open, setOpen] = React.useState(true);

  const toggleMenu = () => {
    const toValue = open ? 0 : 1;

    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();

    setOpen(!open);
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

  const nameAppear = {
    transform: [
      {
        scale: animation,
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

  return (
    <View style={[styles.container]}>


      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.subButton, packageStyle]}>
          <Feather name="package" size={24} color="white" />
        </Animated.View>
      </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
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
