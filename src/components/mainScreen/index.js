import React from "react";
import { Text, View, SafeAreaView } from "react-native";

import style from "./style";
import EventScreen from "./eventScreen";
import CalendarScreen from "./calendarScreen";
import HourScreen from "./hourScreen";

export default function MainScreen() {
  return (

    <SafeAreaView>

      <View style={style.containerText}>

        <Text style={style.mainText}>Olá, </Text>

        <View style={{ flexDirection: "row" }}>
          <Text style={style.mainText}>bom dia, </Text>
          <Text style={style.usernameText}>Lucas!☀️</Text>
        </View>
        
      </View>

      <EventScreen />

      <CalendarScreen />

      <HourScreen />


      
    </SafeAreaView>
  );
}
