import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import moment from "moment";

import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

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
  {
    name: "Amoxilicina",
    dosage: 875,
    unitDosage: "mg",
    takeAt: new Date().getDate(),
    isTake: false,
    id: 4,
  },
  {
    name: "Amoxilicina",
    dosage: 875,
    unitDosage: "mg",
    takeAt: new Date().getDate(),
    isTake: false,
    id: 5,
  },
  
];

export default function ReportScreen() {
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.containerMainText}>
        <Text style={styles.mainText}>Relatório</Text>
      </View>

      <View style={styles.subContainerText}>
        <Text style={styles.subText}>Parabêns, você é disciplinado! 🎉</Text>

        <Text style={styles.subText}>
          Você completou <Text style={styles.percent}>85,71%</Text> dos eventos
          que já passaram.
        </Text>

        <Text style={styles.subText}>
          Foram registrados o total de:{"\n"} • 10 medicamentos. {"\n"} • 70
          eventos.{" "}
        </Text>

        <Text style={styles.subText}>
          Do total de 70 eventos:{"\n"} • 50 foram{" "}
          <Text style={styles.sucessfulText}>concluídos</Text>.{"\n"} • 10 estão{" "}
          <Text style={styles.lateText}>atrasados.</Text>
          {"\n"} • 10 estão <Text style={styles.pendentText}>pendentes.</Text>
        </Text>
      </View>

      <View style={styles.containerEvent}>
        <Text style={styles.textEvent}>Eventos Atrasados (10)</Text>
      </View>

      <FlatList
          data={pills}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.pill}>
                <View>
                  <Text style={styles.descriptionPill}>{item.name}</Text>
                  <Text style={styles.subDescriptionPill}>
                    {item.dosage} {item.unitDosage}
                  </Text>
                </View>

                {item.isTake ? (
                  <View style={styles.timePill}>
                    <Text style={styles.statusTextSucess}>Concluído</Text>/
                    <AntDesign name="checkcircleo" size={20} color="#0B6E4F" />
                  </View>
                ) : item.isTake === false &&
                  moment(item.takeAt).unix() >=
                    moment().subtract(3, "hours").unix() &&
                  moment(item.takeAt).unix() <=
                    moment().subtract(3, "hours").add(10, "minutes").unix() ? (
                  <View style={styles.timePill}>
                    <Text style={styles.statusTextSoon}>
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
                  <View style={styles.timePill}>
                    <Text style={styles.statusTextLate}>
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
    </SafeAreaView>
  );
}
