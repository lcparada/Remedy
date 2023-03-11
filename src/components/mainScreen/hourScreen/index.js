import React from "react";
import { Text, View, SafeAreaView } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import style from "./style";
import { ScrollView } from "react-native";

export default function HourScreen() {
  return (
    <SafeAreaView>
      <View style={style.mainContainer}>
          <Text style={style.mainText}>09:00</Text>

          <View style={style.pill}>
            <View style={style.textPill}>
              <Text style={style.descriptionPill}>Amoxicilina</Text>
              <Text style={style.subDescriptionPill}>875 mg</Text>
            </View>

            <View style={style.timePill}>
              <Text style={style.statusTextSoon}>Em 10 minutos</Text>
              <AntDesign name="clockcircleo" size={20} color="#F6D664" />
            </View>
          </View>

          <View style={style.pill}>
            <View style={style.textPill}>
              <Text style={style.descriptionPill}>Amoxicilina</Text>
              <Text style={style.subDescriptionPill}>875 mg</Text>
            </View>

            <View style={style.timePill}>
              <Text style={style.statusTextSucess}>Concluído</Text>
              <AntDesign name="checkcircleo" size={20} color="#0B6E4F" />
            </View>
          </View>

          <View style={style.pill}>
            <View style={style.textPill}>
              <Text style={style.descriptionPill}>Amoxicilina</Text>
              <Text style={style.subDescriptionPill}>875 mg</Text>
            </View>

            <View style={style.timePill}>
              <Text style={style.statusTextLate}>Atrasado há 5 minutos</Text>
              <AntDesign
                name="exclamationcircleo"
                size={20}
                color="#721817"
                style={{ marginTop: 10 }}
              />
            </View>
          </View>

          <Text style={style.mainText}>14:00</Text>

          <View style={style.pill}>
            <View style={style.textPill}>
              <Text style={style.descriptionPill}>Amoxicilina</Text>
              <Text style={style.subDescriptionPill}>875 mg</Text>
            </View>

            <View style={style.timePill}>
              <Text style={style.statusTextSoon}>Em 10 minutos</Text>
              <AntDesign name="clockcircleo" size={20} color="#F6D664" />
            </View>
          </View>

          <View style={style.pill}>
            <View style={style.textPill}>
              <Text style={style.descriptionPill}>Amoxicilina</Text>
              <Text style={style.subDescriptionPill}>875 mg</Text>
            </View>

            <View style={style.timePill}>
              <Text style={style.statusTextSucess}>Concluído</Text>
              <AntDesign name="checkcircleo" size={20} color="#0B6E4F" />
            </View>
          </View>

          <View style={style.pill}>
            <View style={style.textPill}>
              <Text style={style.descriptionPill}>Amoxicilina</Text>
              <Text style={style.subDescriptionPill}>875 mg</Text>
            </View>

            <View style={style.timePill}>
              <Text style={style.statusTextLate}>Atrasado há 5 minutos</Text>
              <AntDesign
                name="exclamationcircleo"
                size={20}
                color="#721817"
                style={{ marginTop: 10 }}
              />
            </View>
          </View>
      </View>
    </SafeAreaView>
  );
}
