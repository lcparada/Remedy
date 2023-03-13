import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";
import style from "./style";
import { AntDesign } from "@expo/vector-icons";
import Calendar from "../../components/Calendar";

const pills = [
  {
    name: "Amoxilicina",
    dosage: 875,
    unitDosage: "mg",
    takeAt: new Date().getTime(),
    isTake: false,
    id: 1,
  },
  {
    name: "Amoxilicina1",
    dosage: 875,
    unitDosage: "mg",
    takeAt: new Date().getTime(),
    isTake: false,
    id: 2,
  },
  {
    name: "Amoxilicina2",
    dosage: 875,
    unitDosage: "mg",
    takeAt: new Date().getTime(),
    isTake: false,
    id: 3,
  },
  {
    name: "Amoxilicina3",
    dosage: 875,
    unitDosage: "mg",
    takeAt: new Date().getTime(),
    isTake: false,
    id: 4,
  },
  {
    name: "Amoxilicina4",
    dosage: 875,
    unitDosage: "mg",
    takeAt: new Date().getTime(),
    isTake: false,
    id: 5,
  },
  {
    name: "Amoxilicina5",
    dosage: 875,
    unitDosage: "mg",
    takeAt: new Date().getTime(),
    isTake: false,
    id: 6,
  },
  {
    name: "Amoxilicina6",
    dosage: 875,
    unitDosage: "mg",
    takeAt: new Date().getTime(),
    isTake: false,
    id: 7,
  }, {
    name: "Amoxilicina7",
    dosage: 875,
    unitDosage: "mg",
    takeAt: new Date().getTime(),
    isTake: false,
    id: 8,
  },
  {
    name: "Amoxilicina7",
    dosage: 875,
    unitDosage: "mg",
    takeAt: new Date().getTime(),
    isTake: false,
    id: 9,
  },
  {
    name: "Amoxilicina7",
    dosage: 875,
    unitDosage: "mg",
    takeAt: new Date().getTime(),
    isTake: false,
    id: 10,
  },
  {
    name: "Amoxilicina7",
    dosage: 875,
    unitDosage: "mg",
    takeAt: new Date().getTime(),
    isTake: false,
    id:11,
  },
  {
    name: "Amoxilicina7",
    dosage: 875,
    unitDosage: "mg",
    takeAt: new Date().getTime(),
    isTake: false,
    id: 12,
  },
  {
    name: "Amoxilicina7",
    dosage: 875,
    unitDosage: "mg",
    takeAt: new Date().getTime(),
    isTake: false,
    id: 13,
  },
];


export default function HomeScreen() {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar style="auto" />

      <View>
        <View style={style.containerText}>
          <Text style={style.mainText}>Olá, </Text>
          <Text style={style.mainText}>
            bom dia, <Text style={style.usernameText}>Lucas!☀️</Text>{" "}
          </Text>
        </View>

        <View style={style.containerTextEvent}>
          <Text style={style.mainText}>Hoje você tem </Text>
          <Text style={style.eventTextEvent}>3 eventos pendentes.</Text>
        </View>
      </View> 

      <View style={style.content}>
        <Calendar />

        <FlatList
          data={pills}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={style.pill}>
                <View>
                  <Text style={style.descriptionPill}>{item.name}</Text>
                  <Text style={style.subDescriptionPill}>875 mg</Text>
                </View>

                <View style={style.timePill}>
                  <Text style={style.statusTextSucess}>Concluído</Text>
                  <AntDesign name="checkcircleo" size={20} color="#0B6E4F" />
                </View>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 35 }}
        />

        {/* <View>
          <Text style={style.mainTextHour}>09:00</Text>

          <View style={style.pill}>
            <View>
              <Text style={style.descriptionPill}>Amoxicilina</Text>
              <Text style={style.subDescriptionPill}>875 mg</Text>
            </View>

            <View style={style.timePill}>
              <Text style={style.statusTextSoon}>Em 10 minutos</Text>
              <AntDesign name="clockcircleo" size={20} color="#F6D664" />
            </View>
          </View>

          <View style={style.pill}>
            <View>
              <Text style={style.descriptionPill}>Amoxicilina</Text>
              <Text style={style.subDescriptionPill}>875 mg</Text>
            </View>

            <View style={style.timePill}>
              <Text style={style.statusTextSucess}>Concluído</Text>
              <AntDesign name="checkcircleo" size={20} color="#0B6E4F" />
            </View>
          </View>

          <View style={style.pill}>
            <View>
              <Text style={style.descriptionPill}>Amoxicilina</Text>
              <Text style={style.subDescriptionPill}>875 mg</Text>
            </View>

            <View style={style.timePill}>
              <Text style={style.statusTextLate}>
                Atrasado {`\n`} há 5 minutos
              </Text>
              <AntDesign
                name="exclamationcircleo"
                size={20}
                color="#721817"
                style={{ marginTop: 10 }}
              />
            </View>
          </View>

          <Text style={style.mainTextHour}>14:00</Text>

          <View style={style.pill}>
            <View>
              <Text style={style.descriptionPill}>Amoxicilina</Text>
              <Text style={style.subDescriptionPill}>875 mg</Text>
            </View>

            <View style={style.timePill}>
              <Text style={style.statusTextSoon}>Em 10 minutos</Text>
              <AntDesign name="clockcircleo" size={20} color="#F6D664" />
            </View>
          </View>

          <View style={style.pill}>
            <View>
              <Text style={style.descriptionPill}>Amoxicilina</Text>
              <Text style={style.subDescriptionPill}>875 mg</Text>
            </View>

            <View style={style.timePill}>
              <Text style={style.statusTextSucess}>Concluído</Text>
              <AntDesign name="checkcircleo" size={20} color="#0B6E4F" />
            </View>
          </View>

          <View style={style.pill}>
            <View>
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
        </View>*/}
      </View>
    </SafeAreaView>
  );
}
