import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, SafeAreaView } from "react-native";

import styles from "./style";

export default function ReportScreen() {
  return (
    <SafeAreaView style={{ flex: 1,justifyContent: "center", alignItems: "center" }}>
      <StatusBar style="auto" />
      <Text style={{fontSize:30}}>AMANDA EU TE AMO</Text>
    </SafeAreaView>
  );
}
z  