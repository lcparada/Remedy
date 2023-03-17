import React from "react";
import { SafeAreaView, View, Text, FlatList, StatusBar } from "react-native";
import moment from "moment";

import style from "./style";
import { AntDesign } from "@expo/vector-icons";

import Calendar from "../../components/Calendar";
import FloatBottom from "../../components/FloatBottom";

const pills = [
  {
    name: "Amoxilicina",
    dosage: 875,
    unitDosage: "mg",
    takeAt: moment().add(10, "minute").subtract(3, "hour"),
    isTake: false,
    id: 1,
  },
  {
    name: "Amoxilicina",
    dosage: 875,
    unitDosage: "mg",
    takeAt: new Date().getDate(),
    isTake: false,
    id: 2,
  },
  {
    name: "Amoxilicina",
    dosage: 875,
    unitDosage: "mg",
    takeAt: new Date().getDate(),
    isTake: false,
    id: 3,
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
                  <Text style={style.subDescriptionPill}>
                    {item.dosage} {item.unitDosage}
                  </Text>
                </View>

                {item.isTake ? (
                  <View style={style.timePill}>
                    <Text style={style.statusTextSucess}>Concluído</Text>/
                    <AntDesign name="checkcircleo" size={20} color="#0B6E4F" />
                  </View>
                ) : item.isTake === false &&
                  moment(item.takeAt).unix() >=
                    moment().subtract(3, "hours").unix() &&
                  moment(item.takeAt).unix() <=
                    moment().subtract(3, "hours").add(10, "minutes").unix() ? (
                  <View style={style.timePill}>
                    <Text style={style.statusTextSoon}>
                      Em{" "}
                      {moment(item.takeAt).diff(
                        moment().subtract(3, "hour"),
                        "minutes"
                      ) + 1}{" "}
                      minutos
                    </Text>
                    <AntDesign name="clockcircleo" size={20} color="#F6D664" />
                  </View>
                ) : item.isTake === false &&
                  moment()
                    .subtract(3, "hours")
                    .isAfter(
                      moment(item.takeAt)
                        .subtract(3, "hours")
                        .subtract(5, "minutes")
                    ) ? (
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
                ) : null}
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
      <FloatBottom />
    </SafeAreaView>
  );
}
