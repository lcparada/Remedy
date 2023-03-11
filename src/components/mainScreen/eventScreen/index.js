import React from "react";
import { Text, View, SafeAreaView } from "react-native";

import style from "./style";

export default function EventScreen() {
  return (
    <SafeAreaView>
      <View style={style.containerText}>
        <Text style={style.mainText}>Hoje você tem </Text>
        <Text style={style.eventText}>3 eventos pendentes.</Text>
      </View>
    </SafeAreaView>
  );
}
